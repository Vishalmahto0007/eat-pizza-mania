"use client";

import { useState } from "react";
import styles from "./CheckoutModal.module.css";
import emailjs from "@emailjs/browser";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { clearCart } from "@/features/cart/cartSlice";
import { placeOrder } from "@/features/orders/orderSlice";

interface CheckoutModalProps {
  onClose: () => void;
}

type FormField = "name" | "email" | "phone" | "address" | "payment";

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "cod",
  });

  const [errors, setErrors] = useState<{ [key in FormField]?: string }>({});
  const [touched, setTouched] = useState<{ [key in FormField]?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  // Validate the entire form or individual fields
  const validateField = (field: FormField, value: string): string => {
    switch (field) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Valid email is required";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "10-digit phone number required";
      case "address":
        return value.trim() ? "" : "Address is required";
      default:
        return "";
    }
  };

  // Validate all fields and return errors object
  const validateAll = () => {
    const newErrors: { [key in FormField]?: string } = {};
    (["name", "email", "phone", "address"] as FormField[]).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  // Handle input change with live validation
  const handleChange = (field: FormField, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Validate the field live only if user has touched it
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  // On blur mark field as touched and validate it
  const handleBlur = (field: FormField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async () => {
    // Mark all touched to true on submit
    setTouched({
      name: true,
      email: true,
      phone: true,
      address: true,
      payment: true,
    });

    const validation = validateAll();
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    setLoading(true);

    //   name: "Vishal Mahto",
    //   email: formData.email,
    //   order_id: 123,
    //   orders: [
    //     { name: "CAMPAGNOLA", units: 2, price: 25.99 },
    //     { name: "MARGHERITA", units: 1, price: 18.5 },
    //   ],
    //   cost: {
    //     shipping: 30,
    //     tax: 10,
    //     total: 114.48,
    //   },
    // };
    const uniqueOrderId = String(Math.floor(Math.random() * 90000 + 10000));
    const newOrderId = `OID${uniqueOrderId}PM`;
    setOrderId(newOrderId);

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.finalPrice * item.quantity,
      0
    );

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      order_id: newOrderId,
      orders: cartItems.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.finalPrice,
        size: item.size,
        extras: item.extras.length ? item.extras.join(", ") : "None",
      })),
      cost: {
        shipping: 0,
        tax: 0,
        total: subtotal,
      },
    };

    console.log("templateParams :", templateParams);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );

      const order = {
        id: newOrderId,
        date: new Date().toLocaleString(),
        items: cartItems,
        total: subtotal,
      };
      localStorage.setItem(
        "pizza-orders",
        JSON.stringify([...getOrdersFromStorage(), order])
      );
      dispatch(
        placeOrder({ id: newOrderId, items: cartItems, total: subtotal })
      );
      setSubmitted(true);
      dispatch(clearCart());
    } catch (err) {
      console.error("Failed to send email:", err);
    } finally {
      setLoading(false);
    }
  };

  // Add this helper to get existing orders from localStorage
  function getOrdersFromStorage() {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("pizza-orders") || "[]");
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  // Check if form is valid (no errors)
  const isValid = Object.keys(validateAll()).length === 0;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {submitted ? (
          <div className={styles.confirmation}>
            <h4>✅ Order placed successfully!</h4>
            <p>
              Thank you, <strong>{formData.name}</strong>.
            </p>
            <p>
              Email: <strong>{formData.email}</strong>
            </p>
            <p>
              Phone: <strong>{formData.phone}</strong>
            </p>
            <p>
              Order ID: <strong>{orderId}</strong>
            </p>
          </div>
        ) : (
          <>
            {(["name", "email", "phone", "address"] as FormField[]).map(
              (field) => (
                <div className={styles.field} key={field}>
                  <label htmlFor={field}>
                    {field[0].toUpperCase() + field.slice(1)}
                  </label>
                  {field !== "address" ? (
                    <input
                      id={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      value={formData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      onBlur={() => handleBlur(field)}
                      className={errors[field] ? styles.invalid : ""}
                      aria-invalid={errors[field] ? "true" : "false"}
                      aria-describedby={`${field}-error`}
                    />
                  ) : (
                    <textarea
                      id={field}
                      value={formData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      onBlur={() => handleBlur(field)}
                      className={errors[field] ? styles.invalid : ""}
                      aria-invalid={errors[field] ? "true" : "false"}
                      aria-describedby={`${field}-error`}
                    />
                  )}
                  {errors[field] && (
                    <p
                      className={styles.error}
                      id={`${field}-error`}
                      role="alert"
                    >
                      {errors[field]}
                    </p>
                  )}
                </div>
              )
            )}

            <div className={styles.field}>
              <label htmlFor="payment">Payment</label>
              <select
                id="payment"
                value={formData.payment}
                onChange={(e) =>
                  setFormData({ ...formData, payment: e.target.value })
                }
              >
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            <div className={styles.actions}>
              <button onClick={handleSubmit} disabled={loading || !isValid}>
                {loading ? "Processing..." : "Confirm Order"}
              </button>
              <button onClick={onClose} disabled={loading}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;

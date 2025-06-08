import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/features/cart/cartSlice";
import styles from "./Cart.module.css";
import CheckoutModal from "@/components/CheckoutModal/CheckoutModal";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  // const cartItems = [
  //   {
  //     id: "1",
  //     name: "Margherita",
  //     size: "Medium",
  //     extras: ["Cheese", "Olives"],
  //     quantity: 2,
  //     price: 299,
  //   },
  //   {
  //     id: "2",
  //     name: "Pepperoni",
  //     size: "Large",
  //     extras: [],
  //     quantity: 1,
  //     price: 399,
  //   },
  //   {
  //     id: "2",
  //     name: "Pepperoni",
  //     size: "Large",
  //     extras: [],
  //     quantity: 1,
  //     price: 399,
  //   },
  //   {
  //     id: "2",
  //     name: "Pepperoni",
  //     size: "Large",
  //     extras: [],
  //     quantity: 1,
  //     price: 399,
  //   },
  //   {
  //     id: "2",
  //     name: "Pepperoni",
  //     size: "Large",
  //     extras: [],
  //     quantity: 1,
  //     price: 399,
  //   },
  //   {
  //     id: "2",
  //     name: "Pepperoni",
  //     size: "Large",
  //     extras: [],
  //     quantity: 1,
  //     price: 399,
  //   },
  //   {
  //     id: "2",
  //     name: "Pepperoni",
  //     size: "Large",
  //     extras: [],
  //     quantity: 1,
  //     price: 399,
  //   },
  // ];

  const getTotal = () =>
    cartItems.reduce(
      (total, item) => total + item.basePrice * item.quantity,
      0
    );

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          <div className={styles.contentWrap}>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div className={styles.item} key={item.id}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={`/images/pizza${item.id}.png`}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.details}>
                    <h2>{item.name}</h2>
                    <div className={styles.row}>
                      <p>Size: {item.size}</p>
                      <p>Extras: {item.extras?.join(", ") || "None"}</p>
                    </div>
                    <div className={styles.bottomRow}>
                      <p>Price: ₹ {item.finalPrice}</p>
                      <div className={styles.quantityRow}>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.uniqueGeneratedID,
                              item.quantity - 1
                            )
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.uniqueGeneratedID,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <p>
                        Total: ₹ {(item.finalPrice * item.quantity).toFixed(2)}
                      </p>
                      <button
                        className={styles.removeBtn}
                        onClick={() => handleRemove(item.uniqueGeneratedID)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <h2 className={styles.summaryTitle}>🧾 Order Summary</h2>
              <p>Total Items: {cartItems.length}</p>
              <p>
                Subtotal: ₹
                {cartItems.reduce(
                  (total, item) => total + item.finalPrice * item.quantity,
                  0
                )}
              </p>
              <p>Delivery Charges: ₹ 0</p>
              <p>
                <strong>
                  Grand Total: ₹
                  {cartItems.reduce(
                    (total, item) => total + item.finalPrice * item.quantity,
                    0
                  ) + 0}
                </strong>
              </p>

              <div className={styles.summaryBtns}>
                <button className={styles.clear} onClick={handleClearCart}>
                  Clear Cart
                </button>
                <button
                  className={styles.checkout}
                  onClick={() => setIsCheckoutOpen(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
        {isCheckoutOpen && (
          <CheckoutModal
            onClose={() => {
              setIsCheckoutOpen(false);
              // handle modal close
            }}
            // onConfirm={() => {
            //   // handle confirm action
            //   dispatch(clearCart());
            // }}
          />
        )}
      </div>
    </>
  );
};

export default Cart;

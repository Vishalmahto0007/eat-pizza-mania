import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Order.module.css";

export interface Order {
  id: string;
  date: string;
  total: number;
  size: string;
  items: {
    basePrice: number;
    description: string;
    extras: string[];
    finalPrice: number;
    name: string;
    quantity: number;
    price: number;
    size: string;
  }[];
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem("pizza-orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>🧾 Your Order History</h1>

        {orders.length === 0 ? (
          <p className={styles.empty}>No orders found. Go order some pizzas!</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <span>Order ID: {order.id}</span>
                <span>Date: {formatDate(order.date)}</span>
                <span>Total: ₹ {order.total.toFixed(2)}</span>
              </div>

              <div className={styles.items}>
                <div className={styles.itemHeader}>
                  <span>Name</span>
                  <span>Qty</span>
                  <span>Price</span>
                </div>

                {order.items.map((item, index) => {
                  const extrasDisplay =
                    item.extras && item.extras.length > 0
                      ? item.extras.join(", ")
                      : "None";
                  return (
                    <div key={index} className={styles.item}>
                      <div className={styles.itemDetails}>
                        <div className={styles.itemName}>{item.name}</div>
                        <div className={styles.itemMeta}>
                          Size: {item.size}, Extras: {extrasDisplay}
                        </div>
                      </div>
                      <div className={styles.itemQty}>x{item.quantity}</div>
                      <div className={styles.itemPrice}>
                        ₹{item.finalPrice.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Orders;

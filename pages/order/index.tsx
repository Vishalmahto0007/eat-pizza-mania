import { useAppSelector } from "@/store/hook";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Order.module.css";

// Dummy data fallback for development/testing
const dummyOrders = [
  {
    id: "ORD123",
    date: "2025-06-07",
    total: 749.5,
    items: [
      { name: "Margherita", quantity: 1, price: 199.5 },
      { name: "Farmhouse", quantity: 2, price: 275 },
    ],
  },
  {
    id: "ORD124",
    date: "2025-06-06",
    total: 399,
    items: [
      { name: "Peppy Paneer", quantity: 1, price: 199 },
      { name: "Garlic Bread", quantity: 1, price: 200 },
    ],
  },
];

const Orders = () => {
  // const orders = useAppSelector((state) => state.orders.history);
  const orders = dummyOrders;

  const orderList = orders.length > 0 ? orders : dummyOrders;

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>🧾 Your Order History</h1>

        {orderList.length === 0 ? (
          <p className={styles.empty}>No orders found. Go order some pizzas!</p>
        ) : (
          orderList.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <span>Order ID: {order.id}</span>
                <span>Date: {order.date}</span>
                <span>Total: ₹{order.total.toFixed(2)}</span>
              </div>
              <div className={styles.items}>
                {order.items.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <span>{item.name}</span>
                    <span>Qty: {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Orders;

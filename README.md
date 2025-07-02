# 🍕 EatPizzaMania – Next.js PWA

**EatPizzaMania** is a modern, full-featured pizza ordering **Progressive Web App** (PWA) built using **Next.js** and **TypeScript**. It lets users customize pizzas, manage cart items, track order history, and receive real-time order confirmations via **email (Nodemailer)** — all wrapped in a stunning, responsive UI.

---

## 🌟 Key Features

### 🍕 Pizza Customization

- Select size: Small, Medium, Large
- Add or remove extra toppings
- Real-time price calculation
- Each custom pizza is treated as a unique cart item

### 🛒 Cart Functionality

- Add/remove/edit items in cart
- Quantity selector for each pizza
- Live subtotal and total calculation

### 📬 Order Placement + Email Confirmation

- Integrated **Nodemailer** to send:
  - Order confirmation with full breakdown
  - Customer details and order time
- Emails are sent upon successful checkout

### 📜 Order History

- View previous orders
- Reorder the same pizza
- See customization details (size, toppings, etc.)

### 💡 Best UI + UX

- Fully responsive and mobile-friendly
- Hover effects, smooth animations
- Built with accessibility in mind

---

## 🧱 Tech Stack

- **Next.js 15** with `app/` directory
- **TypeScript**
- **Redux Toolkit** (for cart/order management)
- **Nodemailer** (for transactional emails)
- **MongoDB or PostgreSQL** (for orders, if applicable)
- **CSS Modules / Tailwind CSS**
- **Framer Motion** for animations
- **React Hook Form** (for checkout form)

🌐 Live Demo
👉 Frontend Live: https://eatpizzamania.vercel.app

👨‍🍳 Author
Vishal Mahto

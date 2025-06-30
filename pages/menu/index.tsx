"use client";
import { useEffect, useState } from "react";

import styles from "./Menu.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Pizza from "@/components/PizzaCard/PizzaCard";
import Footer from "@/components/Footer/Footer";
import Shop from "../shop";

const Menu = () => {
  const [pizza, setPizza] = useState("");
  const pizzas = [
    "Pizza Margeritta",
    "Pizza Crust",
    "Pizza Biscuit Cake",
    "Crazy Sweet Pizza",
    "Crazy Crust Pizza",
    "Low Carb Pizza",
  ];

  useEffect(() => {
    const randomPizza = pizzas[Math.floor(Math.random() * pizzas.length)];
    setPizza(randomPizza);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles["col-6"]}>
              <div className={styles.about__img}>
                <img src="/images/pizza.jpg" alt="Pizza" />
              </div>
            </div>
            <div className={`${styles["col-6"]} ${styles["p-25"]}`}>
              <h3 className={styles.title}>The Pizza Menu</h3>
              <h1 className={styles["pizza-name"]}>{pizza}</h1>
              <p className={styles.desc}>
                This is the {pizza}, take it and make it your day specail,
                Specially for your tongue. Have some and make your day special.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Shop />
      <Pizza />
      <Footer />
    </>
  );
};

export default Menu;

import styles from "./Info.module.css";
import { usePathname } from "next/navigation";

const Info = () => {
  const pathName = usePathname();

  return (
    <>
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles["col-6"]} ${styles["p-25"]}`}>
              <h3 className={styles.title}>About Us</h3>
              <h1 className={styles["title-main"]}>WELCOME TO PIZZA MANIA</h1>
              {pathName !== "/about" ? (
                <p className={styles.desc}>
                  We provide delicious Pizzas as per your choice that can make
                  your day great. Our team ensures complete satisfaction in
                  taste. We never compromise on quality.
                </p>
              ) : (
                <p className={styles.desc}>
                  We provide mouth-watering, customizable pizzas crafted just
                  the way you like them because we believe great days start with
                  great taste.
                  <br /> Whether you're craving a cheesy classic or a bold
                  fusion of flavors, we’ve got something for everyone.
                  <br /> Our expert team puts passion into every slice, ensuring
                  your experience is filled with satisfaction, flavor, and
                  freshness.
                  <br /> At PizzaMania, quality is never compromised we use only
                  the finest ingredients, from our hand-kneaded dough to our
                  premium toppings.
                  <br /> Whether it's a quick bite, a family dinner, or a
                  celebration, our pizzas are guaranteed to bring smiles.
                  <br />
                  Delight in every bite. Happiness in every order.
                </p>
              )}
            </div>
            <div className={styles["col-6"]}>
              <div className={styles.about__img}>
                <img src="/images/pizza.jpg" alt="Pizza" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

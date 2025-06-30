import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className="container">
        <div className={styles.shop__text}>
          <div>
            <h1>
              Free Delivery PIZZA <br />
              Only @ 99/-
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

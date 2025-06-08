import Link from "next/link";
import "./index.css";
import Clients from "../../components/ClientBanner/ClientBanner";
import Pizza from "../../components/PizzaCard/PizzaCard";

const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="container">
          <div className="shop__text">
            <div>
              <h1>
                Free Delivery PIZZA <br />
                Only @ 99/-
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

import React from "react";
import {Link} from "react-router-dom";
const Shop = () => {
  return (
    <div className="shop" style={{backgroundImage: "url('/img/bg.jpg')"}}>
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery PIZZA <br></br>Only @ 99/-
            </h1>
            <div className="shop__btn">
              <Link to="/prices" className="btn btn-smart">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

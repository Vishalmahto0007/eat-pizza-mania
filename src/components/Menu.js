import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div className="about">
      <div className="containers">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
              This is the CHICAGO THIN CRUST, take it and make it your day specail, Specially for your tongue.
              Have some and make your day special.
            </p>
            <div className="about__btn">
              <Link to="/prices" className="btn btn-smart">
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

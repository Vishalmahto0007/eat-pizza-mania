import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
              Pizza Margeritta with extra cheese and with extra toppings,
                lets taste it.
              </p>
              <p className="price_rs">₹ 99.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Beer Pizza Crust</h1>
              <p className="price__text">
              Beer Pizza Crust with extra cheese and with extra toppings,
                lets taste it.
              </p>
              <p className="price_rs">₹ 149.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Biscuit Bake</h1>
              <p className="price__text">
              Pizza Biscuit Bake  with extra cheese and with extra toppings,
                lets taste it.
                {/* Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in. */}
              </p>
              <p className="price_rs">₹ 199.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza4.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Procuisto</h1>
              <p className="price__text">
                Pizza Procuisto with extra cheese and with extra toppings,
                lets taste it.

              </p>
              <p className="price_rs">₹ 399.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza5.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Crazy Crust Pizza </h1>
              <p className="price__text">
              Crazy Crust Pizza with extra cheese and with extra toppings,
                lets taste it.
              </p>
              <p className="price_rs">₹ 499.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza6.png" alt="pizza" />
              </div>
              <h1 className="price__heading">Low Crab Pizza</h1>
              <p className="price__text">
              Low Crab Pizza with extra cheese and with extra toppings,
                lets taste it.
        
                
              </p>
              <p className="price_rs">₹ 699.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;

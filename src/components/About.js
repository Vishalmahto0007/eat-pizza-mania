import React from 'react'
import {Link} from "react-router-dom"

const About = () => {
    return (
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-6 p-25">
                <h3>About Us</h3>
                <h1>WELCOME TO PIZZA MANIA</h1>
                <p>
                  We provide  delicious Pizzas as per your choice that can be make your great day. Our team give you all satisfation 
                  in the taste. We are not compromise in the taste.
                </p>
                <div className="about__btn">
                  <Link to="/menu" className="btn btn-smart">
                    READ MORE
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="about__img">
                  <img src="/img/pizza.jpg" alt="Pizza" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default About;

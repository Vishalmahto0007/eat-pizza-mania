import React from "react";
import Navbar from "./Navbar";

const Header = () => {

  const order=()=>{
    alert("Book your PIZZA, call at +918130462787, Your Loving :- Vishal Mahto");
  }
  return (
    
     
    <div className="banner" style={{backgroundImage: "url('/img/bg.jpg')"}}>
     
    
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">          
            
           
            <h3>Welcome to Pizza Mania. </h3>
             <p>
              24x7 Pizza Delivery, Near by you. Just Order in Pizza Mania. We Provide you delicious Pizza. Order Now..!!
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart" onClick={order}>
                ORDER NOW
              </a>
              
             
                  
            
               
               
              </div> 
           
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
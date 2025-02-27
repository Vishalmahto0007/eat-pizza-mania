import React from 'react'
import {FaFacebookF } from "react-icons/fa"
import {IoLogoGoogle} from "react-icons/io"
import {ImInstagram} from "react-icons/im"

function Footer() {
    return (
       <div className="footer"> 
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-text"></div>
                  <h2 >About us</h2>
                    <ul className="p ">
                      <li ><p className="p">
                      24x7 Pizza Delivery, Near by you. Just Order in Pizza Mania. We provide delicious, <br /> Pizzas as per your choice that can be make your great day.<br /> Our team give you all satisfation 
              in  the taste. We are not compromise in the taste.
              </p>
                    </li>
                    <li ><h2>Monday to Sunday : 9.00 am to 9.00 pm.</h2>
                    </li>
                </ul>
                </div>

                <div className="footer-text ">
                    <h2>Services</h2>
                    <ul >
                        <li >
                           Need help? Contact us.
                        </li>
                        <li >
                            About us page. 
                        </li>
                        <li >
                            Fast Delivery.
                        </li>
                        <li >
                            Table booking.
                        </li>

                    </ul>
                    </div>
                    <div className="footer-text">
                        <h2>Contact us</h2>
                        <ul >
                       
                            <li > (+91) 8130462787</li>
                            <li >pizzamania@book.com</li>
                            <li ><h5>Owner: VISHAL MAHTO</h5></li>
                        
                           
                            <span className="span">
                           <a className="link-a" href ="https://www.facebook.com/vishal.mahto.10" target="blank"><FaFacebookF   /> </a>
                          </span>
                          <span className="span" >
                          <a className="link-a" href ="https://Vishalmahto-portfolio.netlify.app" target="blank">< IoLogoGoogle /> </a>
                          
                            </span>
                            <span className="span">
                            <a className="link-a" href ="https://www.instagram.com/vishalmahto0007" target="blank"><ImInstagram  /> </a>
                            </span>
                            
                            </ul> 


                    </div>
                   
                  
            
        </div>

           <div className="footer-last">
             <hr className="line"/>
                       <h3 >@2021 Copyright by Vishal Mahto. All Rights Reserved.
                            </h3>
            </div> 
        </div> 
    )
}

export default Footer;

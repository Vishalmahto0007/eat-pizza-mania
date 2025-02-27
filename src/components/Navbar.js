import React,{useState} from "react";
import {Link} from "react-router-dom";
import {FaAlignRight} from "react-icons/fa";



const Navbar = () => {
  
  const [toggle, setToggle] = useState(false)
  const show = () => {
    console.log('changed')
    setToggle(prevState => (
      !prevState
    ))
  }
  

 
  return (
    <div className="navbar">
     <nav >
      <div className="navbar__text">
        <div className="logo">

          <span className="sp">pizza</span>
          <span className="spa">mania.com</span>
         
        </div>
        

        
        
      
        <ul className="navbar__ul">
          <li className="li">
            <Link to="/" >Home</Link>
          </li>
          <li className="li">
          <Link  to="/menu" >Menu</Link>
          </li>
          <li className="li">
          <Link  to="/shop" >Shop</Link>
          </li>

          <li className="li" >
          <Link  to="/about" >About</Link>
          </li>
          <li className="li">
          <Link  to="/footer" >Contact</Link>
          </li>
        </ul>

         
        
         
         <div className="fa" onClick={show} >
         <FaAlignRight  />
         </div>
        
      </div>
    </nav>

    {toggle ? 
    (<div className="mobile">
        
        <Link to = "/"><h3 onClick = {show} className="lin">Home</h3></Link>
         <Link to = "/menu"><h3 onClick = {show} className="lin">Menu</h3></Link>
         <Link to = "/shop"><h3 onClick = {show} className="lin">Shop</h3></Link>
         <Link to = "/footer"><h3 onClick = {show} className="lin">Contact</h3></Link>
         
      </div>) :
      
      null

    }
    </div>
  );
};

export default Navbar;

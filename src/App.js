import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "./components/Footer";


function App() {
  return (
    <div>    
        <Router>           
         
            <Navbar />
            <Route exact path ="/" component = {Home} />
            <Route  path="/about" component= {About} />

         
            <Route  path="/shop" component= {Shop} />
            <Route  path="/menu" component= {Menu}/>
          
            <Clients />
            <Prices path="/prices" component= {Prices} />
            <Footer  path="/footer" component={Footer} />            

        </Router>
     </div>     
  );
}

export default App;

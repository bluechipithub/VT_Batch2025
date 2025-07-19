import React from "react";
import "../assets/Css/Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="new">
        <nav>
          <li><Link to={"/"}> Home </Link></li>
          <li><Link to={"/about"}> About </Link></li>
          <li><Link to={"/contact"}> Contact </Link></li>
          
      
        
       </nav>
    </div>
  );
}

export default Navbar;

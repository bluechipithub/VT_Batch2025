import React from 'react';
import { Link } from 'react-router-dom';
import MAKELOTS from '../asset/Images/MAKELOTS-logo-1.webp'

import '../asset/css/App2.css'


function Navigationbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
         <div className="logo">
            <img src={MAKELOTS} alt="MakeLots Logo" height={80} />
          </div>

        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigationbar;

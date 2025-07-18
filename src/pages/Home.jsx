import React from "react";
import '../asset/css/Ap3.css';
import makelotimage from '../asset/Images/makelotimage.jpg'
import hopeimage from '../asset/Images/hopeimage.jpg'
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="home2">HOME</h1>
        </div>
      </section>
      <div className="hope">
        <img src={hopeimage} alt="hopeimage" />

      </div>

      <div className="home-container">
        <div className="home-image">
          <img src={makelotimage} alt="MakeLots" />
        </div>
        <div className="home-text">
          <h1>MAKE LOTS</h1>
          <p>
            <b>Our mission</b> is to empower fledgling business owners by providing them with professional, high-quality websites at an affordable cost.
          </p>
          <p>
            We’re dedicated to personalized service, building scalable websites, and,<b> strong client relationships</b> to help you succeed in the digital age.
          </p>
          <p>
            We’ve donated many websites to new businesses.<b> If you need financial support for your website, don’t hesitate to reach out — we’re here to help!
             </b>
          </p>
        </div>
        <p>In addition to our services, we also extend a helping hand to businesses in need. Over time, we’ve graciously donated numerous websites to business owners just like you. If you require financial assistance for your new business website, please don’t hesitate to get in touch.<b> We’re wholeheartedly dedicated to your success!</b></p>
      </div>

       <div className="bluebox">
       
         <li>We work with you from start to finish your website</li>
         <li>We dedicated to make low cost website</li>
         <li>We will kip your website upto date</li>
         <li>We grantuee you will love your new website</li>
         <h2>SEE OUR DESIGN</h2>

       </div>

       <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2023 MakeLots. All rights reserved.</p>
      <ul className="social-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </footer>
    </div>
  );
}

export default Home;

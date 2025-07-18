import { useState } from 'react'
import './contact.css'
function contact() {


  return (
    <div>

      <header className="header">

        <nav className="nav">

          <div className="logo">

            <img src="MAKELOTS-logo-1.webp" height={80} />

          </div>

          <ul className="nav-links">

            <li><a href="#">Donate</a></li>

            <li><a href="#">Mission Statemet</a></li>

            <li><a href="#">Learning Resource</a></li>

            <li><a href="#">Portfolio</a></li>

            <li><a href="#">About Us</a></li>

            <li><a href="#" className="active">Contact Us</a></li>

          </ul>

        </nav>

      </header>



      <section className="hero">

        <div className="hero-content">

          <h1>Contact Us</h1>

        </div>

      </section>



      <section className="about">

        <h3>About The Company</h3>

        <h2>MAKE LOTS</h2>

        <div style={{ display: 'flex', alignItems: 'center' }}>

          <p className='abc'><h3>Make Lots Foundation is more than just a web development company that is founded to give small business owners a chance to have a professionally designed website without breaking the bank.

            We’re a community of tech-savvy dreamers and doers, united in our passion for helping small business owners succeed. Our team of experienced developers is dedicated to providing top-notch services and creating websites that meet the unique needs of our clients.

            We believe that every small business deserves a website that reflects the quality of its products and services, and that’s why we’re committed to delivering high-quality websites that are both functional and aesthetically pleasing.

            Our commitment to education and empowerment sets us apart and makes us more than just a provider of web development services, it makes us a partner in the success of small businesses everywhere.

            Are you ready to take your business to the next level? Let’s join hands!</h3>

          </p> <div className='image'><img src="about.jpg" alt="About Us" style={{height:'500px',width:'600px'}}/></div>
          </div>
          </section> 
          
      



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

        export default contact;


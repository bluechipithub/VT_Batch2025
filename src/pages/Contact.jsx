import React from 'react';
import '../asset/css/Contact.css';
import contactus from '../asset/Images/contactus.avif'


function Contact() {
  return (
    <div className="Apap">
      {/* <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src={MAKELOTS} alt="MakeLots Logo" height={80} />
          </div>
          <ul className="nav-links">
            <li><a href="https://www.makelots.com/donate/">Donate</a></li>
            <li><a href="https://www.makelots.com/mission-statement/">Mission Statement</a></li>
            <li><a href="https://www.makelots.com/learning-resource/">Learning Resource</a></li>
            <li><a href="https://www.makelots.com/portfolia/">Portfolio</a></li>
            <li><a href="https://www.makelots.com/about-us/">About Us</a></li>
            <li><a href="https://www.makelots.com/contact-us/" className="active">Contact Us</a></li>
          </ul>
        </nav>
      </header> */}

      <section className="hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-container">
        <form className="contact-form">
          <h2>Get In Touch</h2>
          <p>Please fill out the form below to contact us.</p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" placeholder="First name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" placeholder="Last name" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" placeholder="Enter subject" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" placeholder="Enter phone" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" rows="5" placeholder="Type your message"></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-image">
          <img src={contactus} alt="Contact Visual" />
        </div>
      </section>
    </div>
  );
}

export default Contact;

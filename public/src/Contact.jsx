

import React from 'react'
import  './contect.css'


const Contact = () => {
  return (
    <div> 
    <div className="contact-header">
      <h1>Contact Us</h1>
    </div>
   <div class="contact-container">

    
    <div class="contact-form-container">
     
      <p>SEND US A MESSAGE</p>
      <form class="contact-form">

        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" />

        <label for="email">Email Address *</label>
        <input type="email" id="email" name="email" required />
         <label for="phone">Phone Number (Optional)</label>
        <input type="tel" id="phone" name="phone" />

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" maxlength="180" placeholder="Enter your message..."></textarea>
        <div class="char-count" id="charCount">0 / 180</div>

        <button type="submit">Send Message</button>
  </form>
    </div>
    <div class="contact-image">
      <img src="/5124556.jpg" alt="Contact Us Image" />
    </div>
 </div>
  </div>
  )
}

export default Contact
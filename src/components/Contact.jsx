import React from 'react'
import '../assets/css/Contact.css'; // relative path



const Contact = () => {
  return (
    <div>


        <div id="contact">

            <h1 id='c-head'> contact us </h1>

            <div className="c-content">

                   <h2 id='c-ctnt-head'>send us a message</h2>

                   <div id='c-ctnt-bottom'>

                <div className="c-form">

                    <input  className='brdr' type="text" placeholder='First Name * ' /> <br />

                    <input className='brdr' type="email" placeholder='Email Address *' /> <br />

                    <input className='brdr' type="number" placeholder='Phone Number' /><br />

                    <input id='c-msg' type="textarea" placeholder='Message' /> <br />

           
                    <button id='c-btn'>Send Message</button>




                </div>

                   <div className="c-image">
                       <img src='/images/5143151.jpg' alt="contact" />
                       
                  </div>

           </div>


               

                
            </div>



                  
        </div>

    </div>
  )
}

export default Contact
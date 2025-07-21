import React from 'react'
import "./My.css"
import img1 from "./assets/dikshaimg.jpeg"

const My = () => {
  return (
   <>
   <div className="container">
     
    <div className="left">
         <div className="leftbox">
            <img src={img1} alt="image" />
            
            <p><b>Diksha Dewangan</b></p>
            <hr />
            <p>STUDENT</p>
        </div>

           
    </div>
    <div className="right">
       <h1 className='heading'>HI!</h1>
       <p className='text'> Here's who I am & what I do</p>
       <div className="button">
        <button className="btn-resume">Resume</button>
        <button className="btn-project">Projects</button>
       </div>
       <br />
       <p className='paragraph'>Hello! I'm Diksha Dewangan, a passionate and enthusiastic B.Tech Computer Science student currently studying at Shri Shankaracharya Institute of Professional Management and Technology, Raipur.
        <br />
               <p>I have a strong interest in web development, programming, and exploring emerging technologies. I enjoy building responsive websites, learning new frameworks, and working on real-world projects to sharpen my skills.</p>
       </p>
       <p className='paragraph'>Alongside my passion for technology and programming, I also have a strong interest in sketching. It's not just a hobby—it's a creative outlet that enhances my focus, imagination, and attention to detail.
        <br />
        <br />


In the tech world, I enjoy exploring:
<br />
 <ul>
    <li>Frontend Development (HTML, CSS, JavaScript, React)</li>

<li>Programming Languages (C, C++, Java, Python)</li>

<li>Database Management</li>
 </ul>
 
 </p>
    </div>
   </div>
   </>
  )
}

export default My

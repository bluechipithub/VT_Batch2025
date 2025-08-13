
import React from 'react'
import './Card.css'

import { Link } from 'react-router'

const Card = () => {
  return (
    <div>

         <div className='container'>

                 
          <div className='card-top'>


             <div className='card'>

                   <h2>FOR APPROVELS </h2>

          <div className="btn">

              <button><Link to='/admin/Dashboard1/serviceprovider'>SERVICE PROVIDER</Link> </button>
             <button> <Link to='/admin/Dashboard1/Customer'>CUSTOMER</Link> </button>
             <button> <Link to='/admin/Dashboard1/profile'>PROFILE</Link> </button>
             <button> <Link to='/admin/Dashboard1/Ads'>ADS</Link> </button>
             <button> <Link to='/admin/Dashboard1/Gigs'>GIGS</Link> </button>
              
                
               
          </div>
               
             </div>
             
              <div id='card1' className='card'>

                   <h2>REJECTED </h2>

          <div className="btn">
             <button>SERVICE PROVIDER</button>
                <button>CUSTOMER</button>
                <button>PROFILE</button>
                <button>ADS</button>
                <button>GIGS</button>
          </div>
               
             </div>


           <div id='card3' className='card'>

                   <h2>JOB ANNALYTICS </h2>

          <div className="btn">
            <button>JOBS IN PROGRESS</button>
            <button> COMPLETED JOBS </button>
          </div>
               
             </div>


              <div id='card2' className='card'>

                   <h2> APPROVED </h2>

          <div className="btn">

            

               
                   <button><Link to='/admin/Dashboard1/Approved/serviceprovider'>SERVICE PROVIDER</Link></button>            
                <button>CUSTOMER</button>
                <button>PROFILE</button>
                <button>ADS</button>
                <button>GIGS</button>
          </div>
               
             </div>
             

          </div>

         <div id='botom' className='card-top'>


             <div id='btm-c1' className='card'>

                   <h2>MASTERS </h2>

          <div className="btn">
               <button>CATEGORIES WITH SAC CODE</button>
               <button>STATE-CITY-AREA</button>
               <button> SIGNATURE</button>
               <button>SLIDERS</button>
               <button> Contact us page & other pages</button>               
          </div>
               
             </div>
             
              <div id='btm-c2' className='card'>

                   <h2>ALL INVOICES </h2>

          <div className="btn">
             
          </div>
               
             </div>


           <div id='btm-c3' className='card'>

                   <h2>ADS</h2>

          <div className="btn">
        
                  <button>PROMO CODE</button>
                
                <button>   SALE</button>

               
                  <button> blogs</button>
                 
            
          </div>
               
             </div>

              <div id='btm-c4' className='card'>

                   <h2>SIGN </h2>

          <div className="btn">
              <button>Upload signature </button>
          </div>
               
             </div>
             

          </div>


         </div>
        


    </div>
  )
}

export default Card
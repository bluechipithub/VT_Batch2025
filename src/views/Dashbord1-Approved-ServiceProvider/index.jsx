// material-ui
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {  IconBan,IconEye,IconPrinter} from '@tabler/icons-react';

import { Link } from 'react-router';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import './Approved-serviceprovider.css'

// ==============================|| SAMPLE PAGE ||============================== //

export default function ApprovedServiceprovider() {


   const [providers, setProviders] = useState([
    
  {
    id: 1,
    name: "Bhupendra Kumar Sahu",
    mobile: "9977858040",
    category: "Painter",
    regDate: "2024-04-15",
    appDate: "2024-09-05",
    city: "Raipur",
    state: "Chhattisgarh",
    status: "Approved",
   image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Shahrukh Khan",
    mobile: "7720337755",
    category: "Photographer",
    regDate: "2024-04-18",
    appDate: "2024-04-30",
    city: "Durg",
    state: "Bhilai",
    status: "Approved",
    image:"https://plus.unsplash.com/premium_photo-1661638006395-76d9c7a9f9fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  // ... और भी डेटा हो सकता है

   ]); 


  return (
    <MainCard title="">
      <Typography variant="body2">

         <div className='approved bg-red-500 w-full h-screen'>
          <h2>All Approved Service Provider </h2>


           <div className='approved-container'>

            <div className='a-c-top'>
                <div className='btns'>
                  <button>Copy</button>
                  <button>Excel</button>
                  <button>CSV</button>
                  <button>PDF</button>
                  <button>Print</button>
                </div>

                <div className='search'>
                  <span>Search:</span>
                  <input className='search-input' type="text"  />
                </div>
              <div>

              

              </div>
            </div>

 
            <div className='a-c-table'>
       <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Service Category</th>
            <th>Registration Date</th>
            <th>Approved Date</th>
            <th>City</th>
            <th>State</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* यहाँ हम providers array पर map करेंगे */}
          {providers.map((provider, index) => (
            <tr key={provider.id}> {/* key prop बहुत ज़रूरी है, unique होनी चाहिए */}
              <td>{index + 1}</td> {/* S.No. के लिए */}
              <td>
                <img
                  src={provider.image} // इमेज का सोर्स
                  alt={provider.name} // ऑल्ट टेक्स्ट (इमेज लोड न होने पर दिखेगा)
                  className="profile-image" // इमेज के लिए CSS क्लास
                />
                {provider.name}
              </td>
              <td>{provider.mobile}</td>
              <td>{provider.category}</td>
              <td>{provider.regDate}</td>
              <td>{provider.appDate}</td>
              <td>{provider.city}</td>
              <td>{provider.state}</td>
              <td>
                <span className={`status-${provider.status.toLowerCase()}`}>
                  {provider.status} {/* 'Approved' को स्टाइल करने के लिए क्लास */}
                </span>
              </td>
              <td>
                {/* यहाँ तुम्हारे Action बटन होंगे, जैसे Edit, View, Delete */}
            <button className="action-button view"> <Link to="/admin/provider-details"><IconEye size={15} color='red'  />  </Link> </button>
                <button className="action-button edit"> <IconPrinter size={15}  color='black' /> </button>
                <button className="action-button delete"><IconBan size={15}/></button>

              </td>
            </tr>
          ))}
          {/* अगर कोई डेटा नहीं है तो */}
          {providers.length === 0 && (
            <tr>
              <td colSpan="10">No service providers found.</td>
            </tr>
          )}
        </tbody>
      </table>




            </div>


           </div>



           

           
         </div>
      </Typography>
    </MainCard>
  );
}

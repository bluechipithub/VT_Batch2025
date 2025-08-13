import React from "react";
import "./DashboardCard.css";
import { Link } from "react-router-dom"; // ✅ FIXED

const Dashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="dashboard-header">
        <h1>DASHBOARD-1</h1>
      </div>

      {/* Cards Section */} 
      <div className="dashboard-wrapper">
        {/* FOR APPROVALS */}
        <div className="card-block">
          <h3 className="card-title">FOR APPROVALS</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#f4c20d" }}>
            <Link to="/Admin/Dashboard1/approvels/serviceprovider" className="card-item button">SERVICE PROVIDER</Link>
            <Link to="/Admin/Dashboard1/approvels/customer" className="card-item button">CUSTOMER</Link>
            <Link to="/Admin/Dashboard1/approvels/profile" className="card-item button">PROFILE</Link>
            <Link to="/Admin/Dashboard1/approvels/ads" className="card-item button">ADS</Link>
            <Link to="/Admin/Dashboard1/approvels/gigs" className="card-item button">GIGS</Link>
          </div>
        </div>

        {/* REJECTED */}
        <div className="card-block">
          <h3 className="card-title">REJECTED</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#f57c00" }}>
            <Link to="/Admin/Dashboard1/Rejected/serviceprovider" className="card-item button">SERVICE PROVIDER</Link>
            <Link to="/Admin/Dashboard1/Rejected/customer" className="card-item button">CUSTOMER</Link>
            <Link to="/Admin/Dashboard1/Rejected/Ads" className="card-item button">ADS</Link>
            <Link to="/Admin/Dashboard1/Rejected/gigs" className="card-item button">GIGS</Link>
          </div>
        </div>

        {/* APPROVED */}
        <div className="card-block">
          <h3 className="card-title">APPROVED</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#a5d6a7" }}>
            <Link to="/Admin/Approved/serviceprovider" className="card-item button">SERVICE PROVIDER</Link>
            <Link to="/Admin/Approved/customer" className="card-item button">CUSTOMER</Link>
            <Link to="/Admin/Approved/ads" className="card-item button">ADS</Link>
            <Link to="/Admin/Approved/gigs" className="card-item button">GIGS</Link>
          </div>
        </div>

        {/* JOB ANALYTICS */}
        <div className="card-block">
          <h3 className="card-title">JOB ANALYTICS</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#f8c5b0" }}>
            <Link to="/Admin/Analytics/jobs-in-progress" className="card-item button">JOBS IN PROGRESS</Link>
            <Link to="/Admin/Analytics/completed-jobs" className="card-item button">COMPLETED JOBS</Link>
          </div>
        </div>

        {/* MASTERS */}
        <div className="card-block">
          <h3 className="card-title">MASTERS</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#d48483ff" }}>
            <Link to="/Admin/Masters/category" className="card-item text">CATEGORIE WITH SAC CODE</Link>
            <Link to="/Admin/Masters/location" className="card-item text">STATE-CITY-AREA</Link>
            <Link to="/Admin/Masters/signature" className="card-item text">SIGNATURE</Link>
            <Link to="/Admin/Masters/sliders" className="card-item text">SLIDERS</Link>
            <Link to="/Admin/Masters/contact-pages" className="card-item text">Contact us page & other pages</Link>
          </div>
        </div>

        {/* ALL INVOICES */}
        <div className="card-block">
          <h3 className="card-title">ALL INVOICES</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#2eea76ff" }}>
            {/* No buttons */}
          </div>
        </div>

        {/* ADS */}
        <div className="card-block">
          <h3 className="card-title">ADS</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#3ca3ecff" }}>
            <Link to="/Admin/Ads/promocode" className="card-item text">PROMO CODE</Link>
            <Link to="/Admin/Ads/sale" className="card-item text">SALE</Link>
            <Link to="/Admin/Ads/blogs" className="card-item text">blogs</Link>
          </div>
        </div>

        {/* SIGN */}
        <div className="card-block">
          <h3 className="card-title">SIGN</h3>
          <div className="dashboard-card" style={{ backgroundColor: "#eb4e4eff" }}>
            <Link to="/Admin/Sign/upload" className="card-item text">Upload signature</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

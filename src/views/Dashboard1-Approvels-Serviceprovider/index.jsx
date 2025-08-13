import { IconEye, IconTrash } from '@tabler/icons-react';
import React from "react";
import "./ServiceProviderGrid.css";
import AdharImage from 'assets/images/Adhar.jpg';
import girl from 'assets/images/girl1.jpg';

const data = [
  {
    name: "ARPITA MAHOBIA",
    service: "Fashion",
    date: "05Jul, 2005",
    email: "arpitamahobia41@gmail.com",
    mobile: "8269753260",
    altMobile: "8693973770",
    country: "India",
    state: "CG",
    city: "Raipur",
    address: "mujgahan ssipmt",
    area: "Sejbahar",
    qualification: "graduation",
    experience: "fresher",
    aadhar: AdharImage,
    accountHolder: "",
    bankName: "",
    ifsc: "",
    accountNo: "",
    reference: "",
    bio: "i am 3rd year student of engineering . my hobby is fashion modelling .",
    avatar: girl,
  },
  {
    name: "PUSHPA YADAV",
    mobile: "9202427997",
    email: "pushpayadav120@gamil.com",
    state: "CG",
    city: "Raipur",
    area: "kushalpur",
    service: "Data Entry",
    date: "03 Jul, 2025",
    avatar: girl,
    bankName: "",
    ifsc: "",
    accountNo: "",
    reference: "",
    bio: "i am 3rd year student of engineering . my hobby is fashion modelling .",
    aadhar: AdharImage
  }
];

export default function ServiceProviderGrid() {
  return (
    <div className="container">
      <h2 className="title">All Registered Service Providers</h2>

      <div className="button-row">
        <button>Copy</button>
        <button>Excel</button>
        <button>CSV</button>
        <button>PDF</button>
        <button>Print</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>State</th>
            <th>City</th>
            <th>Area</th>
            <th>Service</th>
            <th>Registration Date</th>
            <th>Aadhar Card Front</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="avatar-name">
                <img src={user.avatar} alt="avatar" className="avatar" />
                {user.name}
              </td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.state}</td>
              <td>{user.city}</td>
              <td>{user.area}</td>
              <td>{user.service}</td>
              <td>{user.date}</td>
              <td>
                <img src={user.aadhar} alt="aadhar" className="aadhar" />
              </td>
              <td className="actions">
                <button className="view-btn"><IconEye size={20} color='red' /></button>
                <button className="delete-btn"><IconTrash size={20} color='red' /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <span>Showing 1 to {data.length} of {data.length} entries</span>
        <div className="pagination">
          <button disabled>Previous</button>
          <button className="current-page">1</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

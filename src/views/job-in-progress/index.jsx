// // material-ui
// import Typography from '@mui/material/Typography';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';

// // // ==============================|| SAMPLE PAGE ||============================== //

// export default function JobInProgress() {
//   return (
//     <MainCard title="Jobs In Progress">
//       <Typography variant="body2">
//         This is a sample page demonstrating the use of MainCard component.
//       </Typography>
//       <form>

//       </form>
//       <Typography variant="body2" color="textSecondary">
//         You can customize this page as per your requirements.
//       </Typography>
//     </MainCard>
//   );
// }
// import React, { useState } from "react";

// function JobInProgress() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // Add your form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default JobInProgress;

import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

function JobInProgress() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Paper elevation={3} className="p-8 w-full max-w-md">
        <Typography variant="h5" component="h2" className="mb-6 text-center font-bold">
          Register
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="Name"
            variant="outlined"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="w-full mt-4"
            size="large"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default JobInProgress;

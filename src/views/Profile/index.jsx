import React from "react";
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Grid,
  Divider
} from "@mui/material";

import {
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  LocalPhone as LocalPhoneIcon,
  Cake as CakeIcon,
  Wc as WcIcon,
  Room as RoomIcon,
  LocationCity as LocationCityIcon,
  Home as HomeIcon,
  Badge as BadgeIcon,
  CreditCard as CreditCardIcon,
  LocationOn as LocationOnIcon
} from "@mui/icons-material";

import User1 from 'assets/images/Alka image.jpg';
import logo from 'assets/blue3.jpg';
import UploadDocumentsTab from 'views/Upload-Documents';
import UploadedDocumentsTab from 'views/Uploaded-Documents';


import { TextField, Button } from "@mui/material";
import { useState } from "react";


// Sample profile data
const profileData = {
  name: "Alka Kushwaha",
  phone: "8629948593",
  email: "alka.kushwaha2023@ssipmt.com",
  Address: "Shiva heights Bhatagoan",
};
// =================== COMPONENTS ===================

function TabNavigation({ tab, setTab }) {
  return (
    <Tabs
      value={tab}
      onChange={(_, v) => setTab(v)}
      indicatorColor="secondary"
      TabIndicatorProps={{ sx: { backgroundColor: "#ff3c67" } }}
      sx={{
        borderBottom: "1.5px solid #f0f0f0",
        px: 2,
        ".MuiTab-root": {
          textTransform: "none",
          py: 1,
          fontWeight: 500,
          fontSize: 15
        },
        ".Mui-selected": {
          color: "#ff3c67 !important"
        }
      }}
    >
      <Tab label="Profile" />
      <Tab label="Update Profile" />
      <Tab label="Upload Documents" />
      <Tab label="Uploaded Documents" />
    </Tabs>
  );
}

function ProfileDetailRow({ icon, label, value }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 1.2 }}>
      <Box sx={{ color: "#555", minWidth: 30 }}>{icon}</Box>
      <Typography sx={{ ml: 1.5, fontSize: 15.5, color: "#666", fontWeight: 500 }}>
        {label}:
      </Typography>
      <Typography sx={{ ml: 1, fontSize: 15.5, color: "#222", fontWeight: 600 }}>
        {value}
      </Typography>
    </Box>
  );
}

// =================== TAB CONTENTS ===================

function ProfileTab() {
  return (
    <Paper elevation={2} sx={{ borderRadius: 4, p: 4, mt: 3, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Avatar
            src={User1}
            sx={{ width: 110, height: 110, mx: "auto", mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography fontWeight={600} fontSize={18} gutterBottom>
            About Me
          </Typography>
          <Typography fontSize={15.5} color="text.secondary" lineHeight={1.6}>
            {profileData.description}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ProfileDetailRow icon={<BadgeIcon sx={{ color: "#1989ff" }} />} label="Full Name" value={profileData.name} />
          <ProfileDetailRow icon={<EmailIcon sx={{ color: "#fe2040" }} />} label="Email" value={profileData.email} />
          <ProfileDetailRow icon={<LocalPhoneIcon sx={{ color: "#555" }} />} label="Phone" value={profileData.phone} />
          <ProfileDetailRow icon={<LocationOnIcon sx={{ color: "#ff4d4f" }} />} label=" Address" value={profileData.Address} />
        </Grid>
      </Grid>
    </Paper>
  );
}



function UpdateProfileTab() {
  const [name, setName] = useState("Alka Kushwaha");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(User1); // Default profile image

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    console.log("Updated Name:", name);
    console.log("Selected File:", selectedFile);
    // TODO: Submit form data to server
  };

  return (
    <Box sx={{ mt: 3, p: 4, background: "#fff", borderRadius: 2, maxWidth: 600, mx: "auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
        <Avatar src={preview} sx={{ width: 120, height: 120, mb: 1 }} />
        <Typography sx={{ color: "#666", mb: 1 }}>Profile Photo</Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginBottom: 16 }}
        />
      </Box>

      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Button
        variant="contained"
        onClick={handleUpdate}
        sx={{ backgroundColor: "#f44336", "&:hover": { backgroundColor: "#d32f2f" } }}
      >
        Update Profile
      </Button>
    </Box>
  );
}

// =================== MAIN PAGE ===================

export default function SingleProfileFullPage() {
  const [tab, setTab] = React.useState(0);

  return (
    <Box sx={{ bgcolor: "#f6f7fa", minHeight: "100vh" }}>
      {/* Banner */}
      <Box sx={{ position: "relative", height: 230 }}>
        <Box component="img" src={logo} alt="banner" width="100%" height="100%" />
        <Avatar
          src={User1}
          sx={{
            width: 100,
            height: 100,
            position: "absolute",
            bottom: -50,
            left: "50%",
            transform: "translateX(-50%)",
            border: "4px solid white"
          }}
        />
      </Box>

      {/* Name + Title */}
      <Box sx={{ textAlign: "center", mt: 7 }}>
        <Typography fontWeight={600} fontSize={20}>
          {profileData.name}
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          {profileData.profession}
        </Typography>
      </Box>

      {/* Tabs and Content */}
      <Box sx={{ maxWidth: 950, mx: "auto", mt: 3 }}>
        <TabNavigation tab={tab} setTab={setTab} />
        {tab === 0 && <ProfileTab />}
        {tab === 1 && <UpdateProfileTab />}
        {tab === 2 && <UploadDocumentsTab />}
        {tab === 3 && <UploadedDocumentsTab />}
      </Box>
    </Box>
  );
}
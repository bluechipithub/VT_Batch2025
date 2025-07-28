import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Button
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const serviceCategories = [
  'Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Cleaning'
  // Add more as needed
];
const serviceSubCategories = [
  'Installation', 'Repair', 'Maintenance'
  // Add more as needed
];

export default function SamplePage() {
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceSubCategory, setServiceSubCategory] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');

  return (
    <MainCard content={false}>
      {/* Banner: Bilingual instructions with colored background */}
      {<Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '14px', fontSize: '18px' }}>
        Post your Service Requirement here
      </Typography>}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #173fa4 60%, #1da569 100%)',
          color: '#fff',
          px: 2,
          py: 2,
          fontSize: '8px', // very small but still legible
      
        }}
      >
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {/* Hindi Instructions */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{ fontWeight: 700, color: '#fd4366', mb: 1, fontSize: '10px' }}
                component="div"
              >
                पोर्टल की आवश्यकता के लिए निर्देश :
              </Typography>
              <Typography component="div" sx={{ lineHeight: 1.4, fontSize: '10px' }}>
                1. केवल इंग्लिश में पोस्ट कर सकते हैं।<br />
                2. यदि आप आवश्यकता का फोटो या वीडियो या दोनों डालते हैं तो आपको अच्छे परिणाम मिल सकते हैं।<br />
                3. वीडियो या फोटो में कहीं भी अपना नाम, नम्बर, पता या लिंक का उपयोग न करें।
              </Typography>
            </Box>
          </Grid>

          {/* English Instructions */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{ fontWeight: 700, color: '#fd4366', mb: 1, fontSize: '10px' }}
                component="div"
              >
                Important Notification!
              </Typography>
              <Typography component="div" sx={{ lineHeight: 1.4, fontSize: '10px' }}>
                1. Can post in English only.<br />
                2. If you put the video or photo or both of the requirement you can get good results.<br />
                3. Do Not use your Name, Number, Address or any link anywhere in video or images.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Form */}
      <Box sx={{ p: 4 }}>
        {/* {<Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#21705e' }}>
          Post your Service Requirement here
        </Typography> } */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Job Title"
              placeholder="What you need write short title"
              variant="outlined"
              required
              fullWidth  // ensures full width inside Grid item
              value={serviceTitle}
              onChange={e => setServiceTitle(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel>Select Service Category</InputLabel>
              <Select
                value={serviceCategory}
                label="Select Service Category"
                onChange={e => setServiceCategory(e.target.value)}
              >
                {serviceCategories.map(cat => (
                  <MenuItem value={cat} key={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel>Select Service Sub Category</InputLabel>
              <Select
                value={serviceSubCategory}
                label="Select Service Sub Category"
                onChange={e => setServiceSubCategory(e.target.value)}
              >
                {serviceSubCategories.map(sub => (
                  <MenuItem value={sub} key={sub}>{sub}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Describe Service"
              placeholder="Describe a detailed quantity of work (Service you want)"
              multiline
              minRows={3}
              variant="outlined"
              required
              fullWidth
              value={serviceDescription}
              onChange={e => setServiceDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: 220, mt: 2 }}
              disabled
            >
              Submit Requirement
            </Button>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
}

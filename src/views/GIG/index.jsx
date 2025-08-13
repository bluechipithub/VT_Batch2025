import React, { useState } from 'react';
import {
  Box,
  Paper,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  Button,
} from '@mui/material';

// Options
const gig = ['GIG 1', 'GIG 2', 'GIG 3'];
const categories = ['Graphic Design', 'Development', 'Marketing'];
const subCategories = ['Logo Design', 'Web App', 'SEO'];
const deliveryDays = [1, 2, 3, 7, 14, 30];
const hoursOptions = [1, 2, 3, 4, 6, 8, 10, 12];
const revisions = [0, 1, 2, 3, 5, 10];
const locations = ['Remote', 'Onsite', 'Hybrid'];

export default function GigPricingMatrix() {
  const [basic, setBasic] = useState({ gig: '', category: '', subCategory: '', maxDays: '', unit: 'Hours', hours: '', revision: '', workFrom: '', charges: '' });
  const [standard, setStandard] = useState({ gig: 'GIG 1', category: '', subCategory: '', maxDays: '', unit: 'Hours', hours: '', revision: '', workFrom: '', charges: '' });

  const handleChange = (type, field) => (e) => {
    const value = e.target.value;
    (type === 'basic' ? setBasic : setStandard)((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUnitChange = (unit) => {
    setBasic(prev => ({ ...prev, unit }));
    setStandard(prev => ({ ...prev, unit }));
  };

  const ScopeLabel = ({ children }) => (
    <Box sx={{ background: 'black', color: '#fff', fontWeight: 600, p: 3, minWidth: 240 }}>
      {children}
    </Box>
  );

  const DataField = ({ children, colSpan = 2 }) => (
    <Box sx={{
      background: '#d9e9e9ff',
      p: 1.2,
      flex: colSpan === 2 ? 2 : 1
    }}>
      {children}
    </Box>
  );

  const renderSelectField = (type, field, label, options) => (
    <FormControl size="small" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={type === 'basic' ? basic[field] : standard[field]} onChange={handleChange(type, field)} label={label}>
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>{opt}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Paper sx={{ p: 2, background: '#edf2f7' }}>
      {/* Header */}
       <Grid container width={'100%'} >
        {['SCOPE', 'BASIC SERVICE', 'STANDARD SERVICE'].map((label, idx) => (
          <Grid key={label} width={'33.3%'} item xs={6}>
            <Box sx={{ background: '#00a2ffff', color: '#fff', fontWeight: 700, textAlign: 'center', p: 2 }}>
              {label}
            </Box>
          </Grid>
        ))}
      </Grid> 

     




      {/* Single Column Fields */}
      {[
        ['Select GIG', 'gig', gig],
        ['Service Category', 'category', categories],
        ['Service Sub-Category', 'subCategory', subCategories]
      ].map(([label, field, options]) => (
        <Grid container key={field}>
          <ScopeLabel>{label}</ScopeLabel>
          <DataField>{renderSelectField('basic', field, `Select ${label}`, options)}</DataField>
        </Grid>
      ))}

      {/* Two Column Fields */}
      <Grid container>
        <ScopeLabel>Max Delivery Days</ScopeLabel>
        <DataField colSpan={1}>{renderSelectField('basic', 'maxDays', 'Select', deliveryDays)}</DataField>
        <DataField colSpan={1}>{renderSelectField('standard', 'maxDays', 'Select', deliveryDays)}</DataField>
      </Grid>

      <Grid container alignItems="center" background="#000000ff">
        <ScopeLabel>Unit of Measure</ScopeLabel>
        <Box sx={{ background: '#d9e9e9ff', px: 2, py: 1.2 }} flex={2}>
          <Typography component="span" sx={{ mr: 1 }}>Hours</Typography>
          <Radio checked={basic.unit === 'Hours'} onChange={() => handleUnitChange('Hours')} />
          <Typography component="span" sx={{ mx: 1 }}>Units</Typography>
          <Radio checked={basic.unit === 'Units'} onChange={() => handleUnitChange('Units')} />
        </Box>
      </Grid>

      <Grid container>
        <ScopeLabel>Hours of Working</ScopeLabel>
        <DataField>{renderSelectField('basic', 'hours', 'Select', hoursOptions)}</DataField>
        <DataField>{renderSelectField('standard', 'hours', 'Select', hoursOptions)}</DataField>
      </Grid>

      <Grid container>
        <ScopeLabel>Revision</ScopeLabel>
        <DataField>{renderSelectField('basic', 'revision', 'Select', revisions)}</DataField>
        <DataField>{renderSelectField('standard', 'revision', 'Select', revisions)}</DataField>
      </Grid>

      <Grid container>
        <ScopeLabel>Can Work From</ScopeLabel>
        <DataField>{renderSelectField('basic', 'workFrom', 'Select', locations)}</DataField>
        <DataField>{renderSelectField('standard', 'workFrom', 'Select', locations)}</DataField>
      </Grid>

      <Grid container>
        <ScopeLabel>Service Charges (in Rs)</ScopeLabel>
        <DataField>
          <TextField fullWidth size="small" value={basic.charges} onChange={handleChange('basic', 'charges')} placeholder="Charges" />
        </DataField>
        <DataField>
          <TextField fullWidth size="small" value={standard.charges} onChange={handleChange('standard', 'charges')} placeholder="Charges" />
        </DataField>
      </Grid>

      <Grid container>
        <ScopeLabel>Payment Terms</ScopeLabel>
        <DataField><Typography>100% Advance</Typography></DataField>
        <DataField><Typography>100% Advance</Typography></DataField>
      </Grid>

    
      
      <Grid container>
  <ScopeLabel sx={{ background: '#8ea2ff', color: '#fff' }}>Upload Photos</ScopeLabel>
  <Box sx={{ background: '#9fe1ffff', p: 1.2 }} flex={2}>
    <Button component="label" variant="outlined" size="small">
      
      <input type="file" multiple accept="image/*" />
    </Button>
    <Typography variant="caption" color="error" sx={{ mt: 0.5 }} display="block">
      (Max 400KB/photo, 1080x1080px, up to 9 photos, at least 1 photo mandatory)
    </Typography>
  </Box>
</Grid>

<Grid container>
  <ScopeLabel sx={{ background: '#8ea2ff', color: '#fff' }}>Upload Video</ScopeLabel>
  <Box sx={{ background: '#9fe1ffff', p: 1.2 }} flex={2}>
    <Button component="label" variant="outlined" size="small">
      
      <input type="file" accept="video/*" />
    </Button>
    <Typography variant="caption" color="error" sx={{ mt: 0.5 }} display="block">
      (Max 20MB & 1 video mandatory)
    </Typography>
  </Box>
</Grid>


      <Box sx={{ background: '#f7f7f7', p: 1.5, mt: 2 }}>
        <Typography variant="caption">
          Note-- Service charge or any additional Service charges will have 18% GST extra in the invoice
        </Typography>
      </Box>

      <Box textAlign="center" sx={{ py: 3 }}>
        <Button variant="contained" sx={{ bgcolor: '#0600ff' }}>Submit</Button>
      </Box>
    </Paper>
  );
}
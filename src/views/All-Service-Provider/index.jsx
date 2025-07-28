import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Avatar
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const serviceCategories = ['Accountant', 'Photographer', 'Data Entry'];
const states = ['Chhattisgarh'];
const cities = ['Raipur', 'Durg-Bhilai'];
const areas = ['Area 1', 'Area 2'];

const tableRows = [
  {
    name: 'Bhupendra Kumar Sahu',
    avatar: '',
    category: 'Painter',
    country: 'India',
    state: 'Chhattisgarh',
    city: 'Raipur',
    status: 'Invite'
  },
  {
    name: 'Shahrukh Khan',
    avatar: '',
    category: 'Photographer',
    country: 'India',
    state: 'Chhattisgarh',
    city: 'Durg-Bhilai',
    status: 'Invite'
  },
  {
    name: 'Suraj Kumar Dewangan',
    avatar: '',
    category: 'Data Entry',
    country: 'India',
    state: 'Chhattisgarh',
    city: 'Raipur',
    status: 'Invite'
  }
];

export default function SamplePage() {
  const [category, setCategory] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [search, setSearch] = useState('');

  return (
    <MainCard content={false}>
      {/* Green header */}
      <Box sx={{ backgroundColor: 'green', py: 1.5, textAlign: 'center',borderRadius: '8px 8px 0 0' }}>
        <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700,fontSize:'18px' }}>
          Service Provider List
        </Typography>
      </Box>

      {/* Filter controls */}
      <Box sx={{ p: 2, background: '#fff' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search Here..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              value={category}
              fullWidth
              displayEmpty
              size="small"
              onChange={e => setCategory(e.target.value)}
            >
              <MenuItem value="">Select Services Category</MenuItem>
              {serviceCategories.map(opt => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              value={state}
              fullWidth
              displayEmpty
              size="small"
              onChange={e => setState(e.target.value)}
            >
              <MenuItem value="">Select State</MenuItem>
              {states.map(opt => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              value={city}
              fullWidth
              displayEmpty
              size="small"
              onChange={e => setCity(e.target.value)}
            >
              <MenuItem value="">Select City</MenuItem>
              {cities.map(opt => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              value={area}
              fullWidth
              displayEmpty
              size="small"
              onChange={e => setArea(e.target.value)}
            >
              <MenuItem value="">Select Area</MenuItem>
              {areas.map(opt => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button
              fullWidth
              variant="contained"
              sx={{ background: '#f55a55', color: '#fff', fontWeight: 700 }}
              disableElevation
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Table */}
      <Box sx={{ p: 2 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.N</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row, idx) => (
                <TableRow key={row.name}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: '#2979ff' }}>
                          {row.name[0]}
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">{row.name}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>India</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error" size="small" sx={{ minWidth: 80 }}>
                      Invite
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="success" size="small" sx={{ mr: 1 }}>
                      View
                    </Button>
                    <Button variant="contained" color="info" size="small">
                      Ignore
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </MainCard>
  );
}

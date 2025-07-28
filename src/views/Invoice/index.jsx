import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Button,
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

// Define table columns
const columns = [
  { id: 'sn', label: 'S.N' },
  { id: 'name', label: 'Name' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'email', label: 'Email' },
  { id: 'age', label: 'Age' },
  { id: 'received', label: 'Received date' },
  { id: 'action', label: 'Action' },
];

export default function SamplePage() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');

  // No data table
  const rows = [];

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
  };

  return (
    <MainCard content={false}>
      {/* Page header */}
      <Box
        sx={{
          backgroundColor: 'green',
          padding: '12px',
          textAlign: 'center',
          borderRadius: '8px 8px 0 0',
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}
        >
          Customer Invoice List
        </Typography>
      </Box>

      {/* Controls for select and search */}
      <Box sx={{ p: 2 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item>
            <Typography variant="body2">
              Show{' '}
              <Select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                size="small"
                sx={{ mx: 1, minWidth: 60 }}
              >
                {[10, 25, 50].map((val) => (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
              entries
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              size="small"
              placeholder="Search"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ minWidth: 150 }}
            />
          </Grid>
        </Grid>

        {/* The Table */}
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      fontWeight: 600,
                      backgroundColor: 'beige',
                      fontSize: 14,
                      padding:"18px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Empty/No data message */}
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={columns.length}
                  sx={{
                    color: '#959fae',
                    background: '#f8fafc',
                    padding: '15px',
                  }}
                >
                  No data available in table
                </TableCell>
              </TableRow>
              {/* Last blank row for spacing/appearance */}
              {/* <TableRow>
                {columns.map((_, idx) => (
                  <TableCell
                    key={idx}
                    sx={{
                      background: '#fff',
                      height: '44px',
                      borderBottom: idx === columns.length - 1 ? 0 : undefined,
                    }}
                  />
                ))}
              </TableRow> */}
            </TableBody>
          </Table>

           <Table size="small" margin-top='0'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      fontWeight: 600,
                      backgroundColor: 'beige',
                      fontSize: 14,
                      padding:"18px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Empty/No data message */}

              {/* <TableRow>
                <TableCell
                  align="center"
                  colSpan={columns.length}
                  sx={{
                    color: '#959fae',
                    background: '#f3f6f9',
                    padding: '15px',
                  }}
                >
                  No data available in table
                </TableCell>
              </TableRow> */}

              {/* Last blank row for spacing/appearance */}
              <TableRow>
                {columns.map((_, idx) => (
                  <TableCell
                    key={idx}
                    sx={{
                      background: '#fff',
                      height: '44px',
                      borderBottom: idx === columns.length - 1 ? 0 : undefined,
                    }}
                  />
                ))}
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>

        {/* Footer: Info and pagination */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <Grid item>
            <Typography variant="body2" sx={{ color: '#6b7280' }}>
              Showing 0 to 0 of 0 entries
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                color: '#1976d2',
                textTransform: 'none',
                px: 2,
                fontWeight: 500,
              }}
             
            >
              Previous
            </Button>
            <Button
              variant="text"
              sx={{
                color: '#1976d2',
                textTransform: 'none',
                px: 2,
                fontWeight: 500,
              }}
            
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
}

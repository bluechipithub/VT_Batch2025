import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Button
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MainCard from 'ui-component/cards/MainCard';

// Column definitions
const columns = [
  { id: 'sn', label: 'Id' },
  { id: 'jobId', label: 'Service Category' },
  { id: 'customerName', label: 'Sub Category' },
  { id: 'jobTitle', label: 'Submitted date' },
  { id: 'serviceCharge', label: 'Close date' },
  { id: 'serviceCategory', label: 'Remarks ' },
  { id: 'createdDate', label: 'Status' },
  { id: 'actions', label: 'Actions' }
];

// Faint up/down arrows, as used in SN column
function FaintArrows() {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        ml: 0.5,
        opacity: 0.15,
        verticalAlign: 'middle'
      }}
    >
      <ArrowDropUpIcon fontSize="small" />
      <ArrowDropDownIcon fontSize="small" />
    </Box>
  );
}

export default function ApplicationResponses() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page] = useState(0);
  const [search, setSearch] = useState('');
  // Empty data for example
  const rows = [];

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    // Set page to 0 if you wire up real pagination
  };

  return (
    <MainCard content={false} sx={{ p: 2 }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: 'green',
          padding: '16px',
          textAlign: 'center',
          borderRadius: '8px 8px 0 0'
        }}
      >
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
          All Posted ADs
        </Typography>
      </Box>

      {/* Table controls */}
      <Box sx={{ p: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
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
              </Select>{' '}
              entries
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              size="small"
              label=""
              placeholder="Search"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: 200 }}
            />
          </Grid>
        </Grid>

        {/* Table */}
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
                      fontSize: 15
                    }}
                  >
                    {column.label}
                    {column.id === 'sn' && <FaintArrows />}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Empty state */}
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  align="center"
                  sx={{ color: '#b8bcc3', background: '#f9fbfc', fontSize: 16,padding:'12px' }}
                >
                  No data available in table
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer - Pagination and Info */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid item>
            <Typography variant="body2" sx={{ color: '#6c757d', pt: 1, pl: 1 }}>
              Showing 0 to 0 of 0 entries
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              // disabled
              sx={{
                color: '#1976d2',
                textTransform: 'none',
                fontWeight: 500,
                px: 2
              }}
            >
              Previous
            </Button>
            <Button
              variant="text"
              // disabled
              sx={{
                color: '#1976d2',
                textTransform: 'none',
                fontWeight: 500,
                px: 2
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

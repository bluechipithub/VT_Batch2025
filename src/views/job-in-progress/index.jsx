


// import * as React from 'react';
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Select,
//   MenuItem,
//   Typography
// } from '@mui/material';

// const columns = [
//   "Name",
//   "Position",
//   "Office",
//   "Age",
//   "Start date",
//   "Salary"
// ];

// export default function Transaction() {
//   // Empty data array for initial empty state
//   const [rows /*, setRows */] = React.useState([]);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   // NEW: Pagination state
//   const [page, setPage] = React.useState(0);

//   // Pagination logic
//   const totalRows = rows.length;
//   const totalPages = Math.ceil(totalRows / rowsPerPage);
//   const startIndex = page * rowsPerPage;
//   const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
//   const pageRows = rows.slice(startIndex, endIndex);

//   // Handlers for Previous/Next and rowsPerPage
//   const handlePrevious = () => setPage((prev) => Math.max(0, prev - 1));
//   const handleNext = () => setPage((prev) => Math.min(totalPages - 1, prev + 1));
//   const handleRowsPerPage = (e) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(0); // Reset to first page when changing rowsPerPage
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'auto', background: '#F9FAFC', p: 2 }}>
//       <Box sx={{ display: 'flex', background: 'rgb(23, 129, 253)', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
//         <Typography
//           align="center"
//           variant="h2"
//           sx={{ color: 'white', fontWeight: 500, padding: '5px' }}
//         >
//           Active Service Requests
//         </Typography>
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Typography variant="body2" sx={{ mr: 1 }}>Show</Typography>
//           <Select
//             size="small"
//             value={rowsPerPage}
//             onChange={handleRowsPerPage}
//             sx={{ width: 60, fontSize: 10 }}
//           >
//             {[10, 25, 50].map(opt => (
//               <MenuItem value={opt} key={opt}>{opt}</MenuItem>
//             ))}
//           </Select>
//           <Typography variant="body2" sx={{ ml: 1 }}>entries</Typography>
//         </Box>
//         <TextField size="small" placeholder="Search" sx={{ width: 180 }} />
//       </Box>
//       <TableContainer sx={{ maxHeight: 230, Width: 1400 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map(col => (
//                 <TableCell
//                   key={col}
//                   sx={{
//                     background: '#cde4e1ff',
//                     color: 'white',
//                     fontWeight: 600,
//                     fontSize: 14,
//                     whiteSpace: 'nowrap'
//                   }}
//                   align="center"
//                 >
//                   {col}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {pageRows.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={columns.length} align="center" sx={{ py: 4, background: '#F5F7FA' }}>
//                   No data available in table
//                 </TableCell>
//               </TableRow>
//             ) : (
//               pageRows.map((row, idx) => (
//                 <TableRow key={idx}>
//                   {columns.map((col, i) => (
//                     <TableCell key={i} align="center">
//                       {row[col] || "-"}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//           <TableHead>
//             <TableRow>
//               {columns.map(col => (
//                 <TableCell
//                   key={col}
//                   sx={{
//                     background: '#cde4e1ff',
//                     color: 'white',
//                     fontWeight: 600,
//                     fontSize: 14,
//                     whiteSpace: 'nowrap'
//                   }}
//                   align="center"
//                 >
//                   {col}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//         </Table>
//       </TableContainer>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
//         <Typography variant="body2">
//           {totalRows === 0
//             ? 'Showing 0 to 0 of 0 entries'
//             : `Showing ${startIndex + 1} to ${endIndex} of ${totalRows} entries`}
//         </Typography>
//         <Box>
//           <button
//             style={{
//               marginRight: 8,
//               border: '1px solid #bdbdbd',
//               borderRadius: 4,
//               background: page === 0 ? '#eee' : 'white',
//               padding: '4px 14px',
//               cursor: page === 0 ? 'not-allowed' : 'pointer'
//             }}
//             onClick={handlePrevious}
//             disabled={page === 0}
//           >
//             Previous
//           </button>
//           <button
//             style={{
//               border: '1px solid #bdbdbd',
//               borderRadius: 4,
//               background: (page >= totalPages - 1 || totalRows === 0) ? '#eee' : 'white',
//               padding: '4px 14px',
//               cursor: (page >= totalPages - 1 || totalRows === 0) ? 'not-allowed' : 'pointer'
//             }}
//             onClick={handleNext}
//             disabled={page >= totalPages - 1 || totalRows === 0}
//           >
//             Next
//           </button>
//         </Box>
//       </Box>
//     </Paper>
//   );
// }


// import * as React from 'react';
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Select,
//   MenuItem,
//   Typography,
//   TableSortLabel
// } from '@mui/material';



// const columns = [
//   "Name",
//   "Position",
//   "Office",
//   "Age",
//   "Start date",
//   "Salary"
// ];



// export default function Transaction() {
//   const [rows, setRows] = React.useState([
//     // Example data
//     {
//       "Name": "John Doe",
//   "Position": "Software Engineer",
//   "Office": "New York",
//   "Age": "21,
//   "Start date": "2024-01-01",
//   "Salary": "56000",
//     },
//     {
//       "Name": "Jane Smith",
//       "Position": "Project Manager",
//       "Office": "London",
//       "Age": "30",
//       "Start date": "2023-05-15",
//       "Salary": "75000",
//     },
//     {
//       "Name": "Alice Johnson",
//       "Position": "Data Analyst",
//       "Office": "San Francisco",
//       "Age": "28",
//       "Start date": "2022-11-20",
//       "Salary": "68000"
//     }
    
//     // Add more if needed
//   ]);
//   const [orderBy, setOrderBy] = React.useState('');
//   const [order, setOrder] = React.useState('asc');
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [page, setPage] = React.useState(0);

//   const handleSort = (column) => {
//     const isAsc = orderBy === column && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(column);

//     const sortedRows = [...rows].sort((a, b) => {
//       const aValue = a[column] ?? '';
//       const bValue = b[column] ?? '';

//       if (typeof aValue === 'number' && typeof bValue === 'number') {
//         return isAsc ? aValue - bValue : bValue - aValue;
//       }

//       return isAsc
//         ? String(aValue).localeCompare(String(bValue))
//         : String(bValue).localeCompare(String(aValue));
//     });

//     setRows(sortedRows);
//   };

//   const totalRows = rows.length;
//   const totalPages = Math.ceil(totalRows / rowsPerPage);
//   const startIndex = page * rowsPerPage;
//   const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
//   const pageRows = rows.slice(startIndex, endIndex);

//   const handlePrevious = () => setPage((prev) => Math.max(0, prev - 1));
//   const handleNext = () => setPage((prev) => Math.min(totalPages - 1, prev + 1));
//   const handleRowsPerPage = (e) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'auto', background: '#F9FAFC', p: 2 }}>
//       <Box sx={{ display: 'flex', background: 'rgb(23, 129, 253)', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
//         <Typography
//           align="center"
//           variant="h2"
//           sx={{ color: 'white', fontWeight: 500, padding: '5px' }}
//         >
//           Active Service Requests
//         </Typography>
//       </Box>

//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Typography variant="body2" sx={{ mr: 1 }}>Show</Typography>
//           <Select
//             size="small"
//             value={rowsPerPage}
//             onChange={handleRowsPerPage}
//             sx={{ width: 60, fontSize: 10 }}
//           >
//             {[5, 10, 15].map(opt => (
//               <MenuItem value={opt} key={opt}>{opt}</MenuItem>
//             ))}
//           </Select>
//           <Typography variant="body2" sx={{ ml: 1 }}>entries</Typography>
//         </Box>
//         <TextField size="small" placeholder="Search" sx={{ width: 180 }} />
//       </Box>

//       <TableContainer sx={{ maxHeight: 230 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map(col => (
//                 <TableCell
//                   key={col}
//                   align="center"
//                   sx={{
//                     background: '#0099ffff',
//                     color: 'white',
//                     fontWeight: 600,
//                     fontSize: 14,
//                     whiteSpace: 'nowrap'
//                   }}
//                   sortDirection={orderBy === col ? order : false}
//                 >
//                   {/* <TableSortLabel
//                     active={orderBy === col}
//                     direction={orderBy === col ? order : 'asc'}
//                     onClick={() => handleSort(col)}
//                     sx={{ color: 'white', '&.Mui-active': { color: 'white' } }}
//                   >
//                     {col}
//                   </TableSortLabel> */}
//                   <TableSortLabel
//   active={orderBy === col}
//   direction={orderBy === col ? order : 'asc'}
//   onClick={() => handleSort(col)}
//   sx={{
//     color: 'white',
//     '&.Mui-active': {
//       color: 'white',
//       '& .MuiTableSortLabel-icon': {
//         color: 'white',
//       }
//     },
//     '& .MuiTableSortLabel-icon': {
//       color: 'white',
//     }
//   }}
// >
//   {col}
// </TableSortLabel>

//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {pageRows.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={columns.length} align="center" sx={{ py: 4, background: '#F5F7FA' }}>
//                   No data available in table
//                 </TableCell>
//               </TableRow>
//             ) : (
//               pageRows.map((row, idx) => (
//                 <TableRow key={idx}>
//                   {columns.map((col, i) => (
//                     <TableCell key={i} align="center">
//                       {row[col] || "-"}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
//         <Typography variant="body2">
//           {totalRows === 0
//             ? 'Showing 0 to 0 of 0 entries'
//             : `Showing ${startIndex + 1} to ${endIndex} of ${totalRows} entries`}
//         </Typography>
//         <Box>
//           <button
//             style={{
//               marginRight: 8,
//               border: '1px solid #bdbdbd',
//               borderRadius: 4,
//               background: page === 0 ? '#eee' : 'white',
//               padding: '4px 14px',
//               cursor: page === 0 ? 'not-allowed' : 'pointer'
//             }}
//             onClick={handlePrevious}
//             disabled={page === 0}
//           >
//             Previous
//           </button>
//           <button
//             style={{
//               border: '1px solid #ff0000ff',
//               borderRadius: 4,
//               background: (page >= totalPages - 1 || totalRows === 0) ? '#eee' : 'white',
//               padding: '4px 14px',
//               cursor: (page >= totalPages - 1 || totalRows === 0) ? 'not-allowed' : 'pointer'
//             }}
//             onClick={handleNext}
//             disabled={page >= totalPages - 1 || totalRows === 0}
//           >
//             Next
//           </button>
//         </Box>
//       </Box>
//     </Paper>
//   );
// }

import * as React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  Typography,
  TableSortLabel
} from '@mui/material';

const columns = [
  "Name",
  "Position",
  "Office",
  "Age",
  "Start date",
  "Salary"
];

export default function JobInProgress() {
  const [rows, setRows] = React.useState([
    // {
    //   "Name": "John Doe",
    //   "Position": "Software Engineer",
    //   "Office": "New York",
    //   "Age": "21",
    //   "Start date": "2024-01-01",
    //   "Salary": "56000"
    // },
    // {
    //   "Name": "Jane Smith",
    //   "Position": "Project Manager",
    //   "Office": "London",
    //   "Age": "30",
    //   "Start date": "2023-05-15",
    //   "Salary": "75000"
    // },
    //  {
    //   "Name": "JSon Doe",
    //   "Position": "Project Manager",
    //   "Office": "London",
    //   "Age": "30",
    //   "Start date": "2023-05-15",
    //   "Salary": "75000"
    // },
    //  {
    //   "Name": "Smith",
    //   "Position": "Project Manager",
    //   "Office": "London",
    //   "Age": "30",
    //   "Start date": "2023-05-15",
    //   "Salary": "75000"
    // },
    //  {
    //   "Name": "Jane",
    //   "Position": "Project Manager",
    //   "Office": "London",
    //   "Age": "30",
    //   "Start date": "2023-05-15",
    //   "Salary": "75000"
    // },
    // {
    //   "Name": "Alice Johnson",
    //   "Position": "Data Analyst",
    //   "Office": "San Francisco",
    //   "Age": "28",
    //   "Start date": "2022-11-20",
    //   "Salary": "68000"
    // }
  ]);

  const [orderBy, setOrderBy] = React.useState('');
  const [order, setOrder] = React.useState('asc');
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(column);

    const sortedRows = [...rows].sort((a, b) => {
      const aValue = a[column] ?? '';
      const bValue = b[column] ?? '';

      return isAsc
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });

    setRows(sortedRows);
  };

  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = page * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
  const pageRows = rows.slice(startIndex, endIndex);

  const handlePrevious = () => setPage((prev) => Math.max(0, prev - 1));
  const handleNext = () => setPage((prev) => Math.min(totalPages - 1, prev + 1));
  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'auto', background: '#F9FAFC', p: 2 }}>
      <Box sx={{ display: 'flex', background: 'rgb(23, 129, 253)', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
        <Typography
          align="center"
          variant="h2"
          sx={{ color: 'white', fontWeight: 500, padding: '5px' }}
        >
          Active Service Requests
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>Show</Typography>
          <Select
            size="small"
            value={rowsPerPage}
            onChange={handleRowsPerPage}
            sx={{ width: 60, fontSize: 10 }}
          >
            {[5, 10, 15].map(opt => (
              <MenuItem value={opt} key={opt}>{opt}</MenuItem>
            ))}
          </Select>
          <Typography variant="body2" sx={{ ml: 1 }}>entries</Typography>
        </Box>
        <TextField size="small" placeholder="Search" sx={{ width: 180 }} />
      </Box>

      <TableContainer sx={{ maxHeight: 230 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell
                  key={col}
                  align="center"
                  sx={{
                    background: '#0099ff',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 14,
                    whiteSpace: 'nowrap'
                  }}
                  sortDirection={orderBy === col ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === col}
                    direction={orderBy === col ? order : 'asc'}
                    onClick={() => handleSort(col)}
                    sx={{
                      color: 'white',
                      '&.Mui-active': {
                        color: 'white',
                        '& .MuiTableSortLabel-icon': { color: 'white' }
                      },
                      '& .MuiTableSortLabel-icon': { color: 'white' }
                    }}
                  >
                    {col}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {pageRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 4, background: '#F5F7FA' }}>
                  No data available in table
                </TableCell>
              </TableRow>
            ) : (
              pageRows.map((row, idx) => (
                <TableRow key={idx}>
                  {columns.map((col, i) => (
                    <TableCell key={i} align="center">
                      {row[col] || "-"}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

           <TableContainer sx={{ maxHeight: 230 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell
                  key={col}
                  align="center"
                  sx={{
                    background: '#0099ff',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 14,
                    whiteSpace: 'nowrap'
                  }}
                  sortDirection={orderBy === col ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === col}
                    direction={orderBy === col ? order : 'asc'}
                    onClick={() => handleSort(col)}
                    sx={{
                      color: 'white',
                      '&.Mui-active': {
                        color: 'white',
                        '& .MuiTableSortLabel-icon': { color: 'white' }
                      },
                      '& .MuiTableSortLabel-icon': { color: 'white' }
                    }}
                  >
                    {col}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

        
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Typography variant="body2">
          {totalRows === 0
            ? 'Showing 0 to 0 of 0 entries'
            : `Showing ${startIndex + 1} to ${endIndex} of ${totalRows} entries`}
        </Typography>
        <Box>
          <button
            style={{
              marginRight: 8,
              border: '1px solid #bdbdbd',
              borderRadius: 4,
              background: page === 0 ? '#eee' : 'white',
              padding: '4px 14px',
              cursor: page === 0 ? 'not-allowed' : 'pointer'
            }}
            onClick={handlePrevious}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            style={{
              border: '1px solid #f8f8f8ff',
              borderRadius: 4,
              background: (page >= totalPages - 1 || totalRows === 0) ? '#eee' : 'white',
              padding: '4px 14px',
              cursor: (page >= totalPages - 1 || totalRows === 0) ? 'not-allowed' : 'pointer'
            }}
            onClick={handleNext}
            disabled={page >= totalPages - 1 || totalRows === 0}
          >
            Next
          </button>
        </Box>
      </Box>
    </Paper>
  );
}

// // material-ui
// import Typography from '@mui/material/Typography';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';

// // ==============================|| SAMPLE PAGE ||============================== //

// export default function AllJobs() {
//   return (
//     <MainCard title="All Jobs">
//       <Typography variant="body2">
//         This is a sample page demonstrating the use of MainCard component.
//       </Typography>
//       <Typography variant="body2" color="textSecondary">
//         You can customize this page as per your requirements.
//       </Typography>
//     </MainCard>
//   );
// }


// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField
// } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import { IconSend } from '@tabler/icons-react';

// const rows = [
//   { id: 21, serviceName: 'Maid', subCategory: '-', charges: 9000, duration: '30 Days', required: '15 Dec, 2024', submitted: '05 Dec, 2024' },
//   { id: 86, serviceName: 'Beautician', subCategory: '-', charges: 9000, duration: '1 Days', required: '02 Jun, 2025', submitted: '20 May, 2025' },
//   { id: 93, serviceName: 'Cook (Chef)', subCategory: '-', charges: 9000, duration: '30 Days', required: '02 Jun, 2025', submitted: '22 May, 2025' },
//   { id: 99, serviceName: 'Maid', subCategory: '-', charges: 9000, duration: '30 Days', required: '05 Jun, 2025', submitted: '25 May, 2025' },
//   { id: 123, serviceName: 'Maid', subCategory: '-', charges: 9000, duration: '30 Days', required: '10 Jul, 2025', submitted: '03 Jul, 2025' },
//   { id: 9, serviceName: 'Maid', subCategory: '-', charges: 8000, duration: '30 Days', required: '01 Aug, 2024', submitted: '12 Jul, 2024' },
//   { id: 20, serviceName: 'Maid', subCategory: '-', charges: 8000, duration: '30 Days', required: '01 Dec, 2024', submitted: '04 Dec, 2024' },
//   { id: 31, serviceName: 'Accountant', subCategory: '-', charges: 8000, duration: '30 Days', required: '03 Feb, 2025', submitted: '12 Jan, 2025' },
//   { id: 36, serviceName: 'Maid', subCategory: '-', charges: 8000, duration: '30 Days', required: '25 Mar, 2025', submitted: '01 Mar, 2025' },
//   { id: 55, serviceName: 'Photographer', subCategory: 'Video Editor', charges: 8000, duration: '15 Days', required: '24 Jun, 2025', submitted: '05 May, 2025' }
// ];

// const columns = [
//   { field: 'id', headerName: 'S.N', width: 80 },
//   { field: 'serviceName', headerName: 'Service Name', flex: 1 },
//   { field: 'subCategory', headerName: 'Sub Category Name', flex: 1 },
//   { field: 'charges', headerName: 'Service Charges', flex: 1, renderCell: (params) => `₹ ${params.value}` },
//   { field: 'duration', headerName: 'Duration Of Service', flex: 1 },
//   { field: 'required', headerName: 'Required Date', flex: 1 },
//   { field: 'submitted', headerName: 'Submitted Date', flex: 1 },
//   {
//     field: 'actions',
//     headerName: 'Actions',
//     sortable: false,
//     width: 150,
//     renderCell: () => (
//       <Button
//         variant="contained"
//         color="error"
//         size="small"
//         startIcon={<IconSend size={16} />}
//       >
//         View & Apply
//       </Button>
//     )
//   }
// ];

// export default function OpenServiceRequests() {
//   const [pageSize, setPageSize] = useState(10);
//   const [search, setSearch] = useState('');

//   // Filter rows based on search
//   const filteredRows = rows.filter((row) =>
//     Object.values(row).some((val) =>
//       val.toString().toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   return (
//     <Box sx={{ p: 2 }}>
//       <Box sx={{
//         backgroundColor: '#00bcd4',
//         p: 1,
//         borderRadius: '4px',
//         textAlign: 'center',
//         mb: 2
//       }}>
//         <Typography variant="h6" sx={{ color: '#fff' }}>Open Service Requests</Typography>
//       </Box>

//       <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
//         <TextField
//           variant="outlined"
//           size="small"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </Box>

//       <div style={{ height: 500, width: '100%' }}>
//         <DataGrid
//           rows={filteredRows}
//           columns={columns}
//           pageSize={pageSize}
//           rowsPerPageOptions={[5, 10, 20]}
//           onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//           disableSelectionOnClick
//         />
//       </div>
//     </Box>
//   );
// }
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { IconSend } from "@tabler/icons-react";

const rows = [
  { id: 21, serviceName: "Maid", subCategory: "-", charges: "₹ 9000", duration: "30 Days", required: "15 Dec, 2024", submitted: "05 Dec, 2024" },
  { id: 86, serviceName: "Beautician", subCategory: "-", charges: "₹ 9000", duration: "1 Days", required: "02 Jun, 2025", submitted: "20 May, 2025" },
  { id: 93, serviceName: "Cook (Chef)", subCategory: "-", charges: "₹ 9000", duration: "30 Days", required: "02 Jun, 2025", submitted: "22 May, 2025" },
  { id: 99, serviceName: "Maid", subCategory: "-", charges: "₹ 9000", duration: "30 Days", required: "05 Jun, 2025", submitted: "25 May, 2025" },
  { id: 123, serviceName: "Maid", subCategory: "-", charges: "₹ 9000", duration: "30 Days", required: "10 Jul, 2025", submitted: "03 Jul, 2025" },
  { id: 9, serviceName: "Maid", subCategory: "-", charges: "₹ 8000", duration: "30 Days", required: "01 Aug, 2024", submitted: "12 Jul, 2024" },
  { id: 20, serviceName: "Maid", subCategory: "-", charges: "₹ 8000", duration: "30 Days", required: "01 Dec, 2024", submitted: "04 Dec, 2024" },
  { id: 31, serviceName: "Accountant", subCategory: "-", charges: "₹ 8000", duration: "30 Days", required: "03 Feb, 2025", submitted: "12 Jan, 2025" },
  { id: 36, serviceName: "Maid", subCategory: "-", charges: "₹ 8000", duration: "30 Days", required: "25 Mar, 2025", submitted: "01 Mar, 2025" },
  { id: 55, serviceName: "Photographer", subCategory: "Video Editor", charges: "₹ 8000", duration: "15 Days", required: "24 Jun, 2025", submitted: "05 May, 2025" },
];

const columns = [
  { field: "id", headerName: "S.N", width: 80 },
  { field: "serviceName", headerName: "Service Name", width: 150 },
  { field: "subCategory", headerName: "Sub Category Name", width: 150 },
  { field: "charges", headerName: "Service Charges", width: 150 },
  { field: "duration", headerName: "Duration Of Service", width: 160 },
  { field: "required", headerName: "Required Date", width: 150 },
  { field: "submitted", headerName: "Submitted Date", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Button
        variant="contained"
        color="error"
        startIcon={<IconSend size={16} />}
        sx={{ textTransform: "none" }}
      >
        View & Apply
      </Button>
    ),
  },
];

export default function OpenServiceRequests() {
  const [search, setSearch] = useState("");

  const filteredRows = rows.filter((row) =>
    row.serviceName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          p: 2,
          borderRadius: 2,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Header */}
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#03A9F4",
            color: "#fff",
            borderRadius: "4px",
            textAlign: "center",
            p: 1,
            fontWeight: "bold",
          }}
        >
          Open Service Requests
        </Typography>

        {/* Search */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1, mt: 1 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

        {/* DataGrid */}
        <Box sx={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </Box>
  );
}

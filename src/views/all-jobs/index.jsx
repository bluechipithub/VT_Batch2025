import React, { useState, useMemo } from 'react';
import { Box, Select, MenuItem, TextField, Typography } from '@mui/material';
import { IconBrandTelegram } from '@tabler/icons-react'; // ✅ Corrected import

const initialData = [
  { sn: 1, serviceName: 'Maid', subCategory: '-', serviceCharges: 9000, duration: '30 Days', requiredDate: '15 Dec, 2024', submittedDate: '10 Nov, 2024' },
  { sn: 2, serviceName: 'Beautician', subCategory: '-', serviceCharges: 9000, duration: '1 Day', requiredDate: '02 Jun, 2025', submittedDate: '20 May, 2025' },
  { sn: 3, serviceName: 'Cook (Chef)', subCategory: '-', serviceCharges: 9000, duration: '30 Days', requiredDate: '02 Jun, 2025', submittedDate: '22 May, 2025' },
  { sn: 4, serviceName: 'Beautician', subCategory: '-', serviceCharges: 9000, duration: '1 Day', requiredDate: '02 Jun, 2025', submittedDate: '20 May, 2025' },
  { sn: 5, serviceName: 'Cook (Chef)', subCategory: '-', serviceCharges: 9000, duration: '30 Days', requiredDate: '02 Jun, 2025', submittedDate: '22 May, 2025' },
  { sn: 6, serviceName: 'Beautician(F)', subCategory: '-', serviceCharges: 9000, duration: '1 Day', requiredDate: '02 Jun, 2025', submittedDate: '20 May, 2025' },
  { sn: 7, serviceName: 'Cook (Chef)', subCategory: '-', serviceCharges: 9000, duration: '30 Days', requiredDate: '02 Jun, 2025', submittedDate: '22 May, 2025' },
  { sn: 8, serviceName: 'Beautician(M)', subCategory: '-', serviceCharges: 9000, duration: '1 Day', requiredDate: '02 Jun, 2025', submittedDate: '20 May, 2025' },
  { sn: 9, serviceName: 'Cook', subCategory: '-', serviceCharges: 9000, duration: '30 Days', requiredDate: '02 Jun, 2025', submittedDate: '22 May, 2025' },
  { sn: 10, serviceName: 'Cook', subCategory: '-', serviceCharges: 9000, duration: '30 Days', requiredDate: '02 Jun, 2025', submittedDate: '22 May, 2025' }
];

const headers = [
  { key: 'sn', label: 'S.N' },
  { key: 'serviceName', label: 'Service Name' },
  { key: 'subCategory', label: 'Sub Category' },
  { key: 'serviceCharges', label: 'Charges' },
  { key: 'duration', label: 'Duration' },
  { key: 'requiredDate', label: 'Required Date' },
  { key: 'submittedDate', label: 'Submitted Date' },
  { key: 'actions', label: 'Actions' }
];

const ServiceListPage = () => {
  const [data] = useState(initialData);
  const [search, setSearch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const filteredData = data.filter(item =>
    item.serviceName.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (typeof aVal === 'number') {
        return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
      }
      return sortConfig.direction === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [filteredData, sortConfig]);

  const totalEntries = sortedData.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const pageData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const paginationRange = useMemo(() => {
    const delta = 2;
    const range = [];
    let l;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        if (l) {
          if (i - l === 2) range.push(l + 1);
          else if (i - l !== 1) range.push('...');
        }
        range.push(i);
        l = i;
      }
    }
    return range;
  }, [currentPage, totalPages]);

  const toggleSort = (key) => {
    setSortConfig(prev =>
      prev.key === key
        ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' }
    );
  };

  return (
    <Box sx={{ padding: 3, fontFamily: 'sans-serif', backgroundColor: '#f9f9f9' }}>
      <Box sx={{ background: 'rgb(23, 129, 253)', padding: 1, borderRadius: 1, mb: 2 }}>
        <Typography variant="h2" align="center" sx={{ color: 'white', fontWeight: 600 }}>
          All Jobs
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>Show</Typography>
          <Select
            size="small"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            sx={{ width: 80 }}
          >
            {[5, 10, 15].map(opt => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </Select>
          <Typography variant="body2" sx={{ ml: 1 }}>entries</Typography>
        </Box>
        <TextField
          size="small"
          placeholder="Search"
          sx={{ width: 250 }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </Box>

      <Box sx={{ background: '#fff', borderRadius: 2, boxShadow: 1, overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#cde4e1' }}>
            <tr>
              {headers.map(({ key, label }) => (
                <th
                  key={key}
                  onClick={() => key !== 'actions' && toggleSort(key)}
                  style={{
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 600,
                    cursor: key !== 'actions' ? 'pointer' : 'default',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {label}
                  {key !== 'actions' && sortConfig.key === key && (
                    <span style={{ marginLeft: 6 }}>{sortConfig.direction === 'asc' ? '🔼' : '🔽'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.length === 0 ? (
              <tr>
                <td colSpan={headers.length} style={{ textAlign: 'center', padding: '20px' }}>
                  No entries found
                </td>
              </tr>
            ) : (
              pageData.map(item => (
                <tr key={item.sn} style={{ borderBottom: '1px solid #eee',lineHeight: '3' }}>
                  <td>{item.sn}</td>
                  <td>{item.serviceName}</td>
                  <td>{item.subCategory}</td>
                  <td>₹ {item.serviceCharges}</td>
                  <td>{item.duration}</td>
                  <td>{item.requiredDate}</td>
                  <td>{item.submittedDate}</td>
                  <td>
                    {/* <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '6px 10px',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}>
                      <IconBrandTelegram size={16} /> View & Apply
                    </button> */}
                    <button
  onClick={() => window.open('#')}
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '6px 10px',
    borderRadius: 4,
    cursor: 'pointer',
  }}
>
  <IconBrandTelegram size={16} /> View & Apply
</button>

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant="body2">
            totalEntries === 0
              ? 'Showing 0 to 0 of 0 entries'
              `Showing ${startIndex + 1} to ${Math.min(startIndex + 1 + rowsPerPage - 1, totalEntries)} of ${totalEntries} entries`
          </Typography>
          <Box>
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Prev</button>
            {paginationRange.map((page, idx) =>
              page === '...' ? (
                <span key={idx} style={{ margin: '0 4px' }}>...</span>
              ) : (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    margin: '0 4px',
                    fontWeight: page === currentPage ? 'bold' : 'normal',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  {page}
                </button>
              )
            )}
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceListPage;
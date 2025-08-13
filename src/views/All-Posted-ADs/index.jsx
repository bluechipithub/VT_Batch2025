import React, { useState, useMemo } from 'react';

// You would typically fetch this data from an API.
// To see the table with data, you can uncomment these lines and comment out the empty array.
/*
const initialData = [
    { id: 'SR-001', serviceCategory: 'IT Support', subCategory: 'Hardware', submittedDate: '2025-07-20', closedDate: '-', remarks: 'Awaiting parts', status: 'In Progress' },
    { id: 'SR-002', serviceCategory: 'Human Resources', subCategory: 'Payroll', submittedDate: '2025-07-18', closedDate: '2025-07-22', remarks: 'Resolved', status: 'Closed' },
    { id: 'SR-003', serviceCategory: 'Facilities', subCategory: 'Maintenance', submittedDate: '2025-07-25', closedDate: '-', remarks: 'Scheduled for next week', status: 'Open' },
];
*/
const initialData = []; // Starting with empty data as in the screenshot

const ServiceRequestsPage = () => {
  const [data, setData] = useState(initialData);
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Define table columns. The 'isSortable' flag can be used to disable sorting on specific columns.
  const columns = [
    { key: 'id', label: 'Id', isSortable: true },
    { key: 'serviceCategory', label: 'Service Category', isSortable: true },
    { key: 'subCategory', label: 'Sub Category', isSortable: true },
    { key: 'submittedDate', label: 'Submitted date', isSortable: true },
    { key: 'closedDate', label: 'Closed date', isSortable: true },
    { key: 'remarks', label: 'Remarks', isSortable: true },
    { key: 'status', label: 'Status', isSortable: true },
    { key: 'actions', label: 'Actions', isSortable: false },
  ];

  // Memoized data processing for filtering and sorting
  const processedData = useMemo(() => {
    let filteredData = [...data];
    if (searchTerm) {
      filteredData = filteredData.filter(item =>
        Object.keys(item).some(key =>
          String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return filteredData;
  }, [data, searchTerm, sortConfig]);

  const totalEntries = processedData.length;
  const totalPages = Math.ceil(totalEntries / entriesToShow) || 1;

  // Memoized data for the current page
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesToShow;
    return processedData.slice(startIndex, startIndex + entriesToShow);
  }, [processedData, currentPage, entriesToShow]);
  
  const startEntry = totalEntries > 0 ? (currentPage - 1) * entriesToShow + 1 : 0;
  const endEntry = Math.min(currentPage * entriesToShow, totalEntries);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Embedded CSS for single-file implementation
  const style = `
    .page-background {
        background-color: #f0f2f5;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        padding: 2rem;
        display: flex;
        justify-content: center;
    }
    .requests-card {
        background-color: #ffffff;
        border: 1px solid #e7eaf3;
        border-radius: 0.375rem;
        width: 100%;
        max-width: 1200px;
        box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
    }
    .card-header {
        background-color: #34c27a; /* Green header */
        color: white;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
    }
    .card-header h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        text-align: center;
    }
    .card-body {
        padding: 1.5rem;
    }
    .controls-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .show-entries, .search-bar {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        color: #495057;
    }
    .show-entries select, .search-bar input {
        padding: 0.375rem 0.75rem;
        font-size: 0.9rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
    }
    .table-responsive {
        width: 100%;
        overflow-x: auto;
    }
    .requests-table {
        width: 100%;
        border-collapse: collapse;
        color: #212529;
    }
    .requests-table th, .requests-table td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
        text-align: left;
        white-space: nowrap;
    }
    .requests-table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
        font-weight: 600;
    }
    .requests-table thead th.sortable {
        cursor: pointer;
        user-select: none;
    }
    .sort-icon {
        color: #b3b3b3;
        float: right;
        margin-left: 0.5rem;
    }
    .no-data {
        text-align: center !important;
        padding: 2rem !important;
        color: #6c757d;
    }
    .pagination-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #495057;
    }
    .pagination-controls button {
        color: #6c757d;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #dee2e6;
        padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
    }
    .pagination-controls button:first-of-type {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .pagination-controls button:last-of-type {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
    }
    .pagination-controls button:disabled {
        opacity: 0.65;
        cursor: not-allowed;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="page-background">
        <div className="requests-card">
          <div className="card-header">
            <h2>Service Requests</h2>
          </div>
          <div className="card-body">
            <div className="controls-wrapper">
              <div className="show-entries">
                <label htmlFor="entries">Show&nbsp;</label>
                <select
                  id="entries"
                  value={entriesToShow}
                  onChange={(e) => { setEntriesToShow(Number(e.target.value)); setCurrentPage(1); }}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span>&nbsp;entries</span>
              </div>
              <div className="search-bar">
                <label htmlFor="search">Search:</label>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                />
              </div>
            </div>

            <div className="table-responsive">
              <table className="requests-table">
                <thead>
                  <tr>
                    {columns.map(col => (
                      <th 
                        key={col.key} 
                        onClick={() => col.isSortable && requestSort(col.key)}
                        className={col.isSortable ? 'sortable' : ''}
                      >
                        {col.label}
                        {col.isSortable && <span className="sort-icon">↕</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item, index) => (
                      <tr key={item.id || index}>
                        <td>{item.id || 'N/A'}</td>
                        <td>{item.serviceCategory || 'N/A'}</td>
                        <td>{item.subCategory || 'N/A'}</td>
                        <td>{item.submittedDate || 'N/A'}</td>
                        <td>{item.closedDate || 'N/A'}</td>
                        <td>{item.remarks || 'N/A'}</td>
                        <td>{item.status || 'N/A'}</td>
                        <td>{/* Action buttons (e.g., View, Edit) would go here */}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length} className="no-data">
                        No data available in table
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination-wrapper">
              <div className="pagination-info">
                Showing {startEntry} to {endEntry} of {totalEntries} entries
              </div>
              <div className="pagination-controls">
                <button
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage >= totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRequestsPage;
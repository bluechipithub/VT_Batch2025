import React, { useState, useMemo } from 'react';

// You would typically fetch this data from an API.
// To see the table with data, you can uncomment these lines and comment out the empty array.
/*
const initialData = [
    { jobId: 'JB001', customerName: 'Alice Johnson', jobTitle: 'Plumbing Services', serviceCharge: 150, serviceCategory: 'Maintenance', createdDate: '2025-07-26' },
    { jobId: 'JB002', customerName: 'Bob Williams', jobTitle: 'Electrical Wiring', serviceCharge: 450, serviceCategory: 'Installation', createdDate: '2025-07-25' },
    { jobId: 'JB003', customerName: 'Charlie Brown', jobTitle: 'AC Repair', serviceCharge: 200, serviceCategory: 'Repair', createdDate: '2025-07-24' },
];
*/
const initialData = []; // Starting with empty data as in the screenshot

const ApplicationResponsesPage = () => {
  const [data, setData] = useState(initialData);
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Define table columns. 'isSortable' flag prevents sort handler on S.N and Actions.
  const columns = [
    { key: 'sn', label: 'S.N', isSortable: false },
    { key: 'jobId', label: 'Job Id', isSortable: true },
    { key: 'customerName', label: 'Customer Name', isSortable: true },
    { key: 'jobTitle', label: 'Job Title', isSortable: true },
    { key: 'serviceCharge', label: 'Service Charge', isSortable: true },
    { key: 'serviceCategory', label: 'Service Category', isSortable: true },
    { key: 'createdDate', label: 'Created Date', isSortable: true },
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
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
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
  
  const startIndex = (currentPage - 1) * entriesToShow;
  const startEntry = totalEntries > 0 ? startIndex + 1 : 0;
  const endEntry = Math.min(startIndex + entriesToShow, totalEntries);

  // Sort handler
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
    .response-card {
        background-color: #ffffff;
        border: 1px solid #e7eaf3;
        border-radius: 0.375rem;
        width: 100%;
        max-width: 1200px;
        box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
    }
    .card-header {
        background-color: #34c27a;
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
    .show-entries label, .search-bar label {
        margin-right: 0.5rem;
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
    .response-table {
        width: 100%;
        border-collapse: collapse;
        color: #212529;
    }
    .response-table th, .response-table td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
        text-align: left;
        white-space: nowrap;
    }
    .response-table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
        font-weight: 600;
    }
    .response-table thead th.sortable {
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
        <div className="response-card">
          <div className="card-header">
            <h2>Application Responses</h2>
          </div>
          <div className="card-body">
            <div className="controls-wrapper">
              <div className="show-entries">
                <label htmlFor="entries">Show</label>
                <select
                  id="entries"
                  value={entriesToShow}
                  onChange={(e) => { setEntriesToShow(Number(e.target.value)); setCurrentPage(1); }}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
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
              <table className="response-table">
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
                      <tr key={item.jobId || index}>
                        <td>{startIndex + index + 1}</td>
                        <td>{item.jobId}</td>
                        <td>{item.customerName}</td>
                        <td>{item.jobTitle}</td>
                        <td>${item.serviceCharge?.toFixed(2)}</td>
                        <td>{item.serviceCategory}</td>
                        <td>{item.createdDate}</td>
                        <td>{/* Action buttons (e.g., Edit, Delete) would go here */}</td>
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
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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

export default ApplicationResponsesPage;
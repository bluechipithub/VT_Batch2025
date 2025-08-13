import React, { useState, useMemo } from 'react';

// You would typically fetch this data from an API.
// To see the table with data, you can uncomment these lines and comment out the empty array.
/*
const initialData = [
    { id: 'INV-001', name: 'John Doe', invoiceType: 'Service', email: 'john.d@example.com', status: 'Paid' },
    { id: 'INV-002', name: 'Jane Smith', invoiceType: 'Product', email: 'jane.s@example.com', status: 'Pending' },
    { id: 'INV-003', name: 'Peter Jones', invoiceType: 'Subscription', email: 'peter.j@example.com', status: 'Overdue' },
    { id: 'INV-004', name: 'Mary Brown', invoiceType: 'Service', email: 'mary.b@example.com', status: 'Paid' },
];
*/
const initialData = []; // Starting with empty data as in the screenshot

const InvoiceListPage = () => {
  const [data, setData] = useState(initialData);
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Define table columns. `isSortable` is used to enable/disable sorting on a column.
  const columns = [

    { key: 'Name', label: 'Name', isSortable: true },
    { key: 'Position', label: 'Position', isSortable: true },
    { key: 'Office', label: 'Office', isSortable: true },
    { key: 'Age', label: 'Age', isSortable: true },
    { key: 'Start date', label: 'Start date', isSortable: true },
    { key: 'Salary', label: 'Salary', isSortable: true },
  ];

  // Memoized data processing for filtering and sorting
  const processedData = useMemo(() => {
    let filteredData = [...data];
    if (searchTerm) {
      filteredData = filteredData.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
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
  
  const startIndex = (currentPage - 1) * entriesToShow;
  const startEntry = totalEntries > 0 ? startIndex + 1 : 0;
  const endEntry = Math.min(startIndex + entriesToShow, totalEntries);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const styles = `
    .page-background {
        background-color: #f4f6f9;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        padding: 2rem;
        display: flex;
        justify-content: center;
    }
    .invoice-card {
        background-color: #ffffff;
        border: 1px solid #e7eaf3;
        border-radius: 0.375rem;
        width: 100%;
        max-width: 1200px;
        box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
    }
    .card-header {
        background-color: #0d6efd; /* Vibrant blue header */
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
    .invoice-table {
        width: 100%;
        border-collapse: collapse;
        color: #212529;
    }
    .invoice-table th, .invoice-table td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
        text-align: left;
        white-space: nowrap;
    }
    .invoice-table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
        font-weight: 600;
    }
    .invoice-table thead th.sortable {
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
      <style>{styles}</style>
      <div className="page-background">
        <div className="invoice-card">
          <div className="card-header">
            <h2>Transaction List</h2>
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
              <table className="invoice-table">
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
                        <td>{startIndex + index + 1}</td>
                        <td>{item.name || 'N/A'}</td>
                        <td>{item.invoiceType || 'N/A'}</td>
                        <td>{item.email || 'N/A'}</td>
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
            
                 <div className="table-responsive">
              <table className="invoice-table">
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
                        <td>{startIndex + index + 1}</td>
                        <td>{item.name || 'N/A'}</td>
                        <td>{item.invoiceType || 'N/A'}</td>
                        <td>{item.email || 'N/A'}</td>
                        <td>{item.status || 'N/A'}</td>
                        <td>{/* Action buttons (e.g., View, Edit) would go here */}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {/* <td colSpan={columns.length} className="no-data">
                        No data available in table
                      </td> */}
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

export default InvoiceListPage;
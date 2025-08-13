import React, { useState } from 'react';

// You would typically fetch this data from an API.
// Using mock data here for demonstration purposes.
const serviceProvidersData = [
    { id: 1, name: 'Bhupendra Kumar Sahu', avatar: 'https://i.pravatar.cc/150?img=1', category: 'Painter', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Active' },
    { id: 2, name: 'Shahrukh Khan', avatar: 'https://i.pravatar.cc/150?img=2', category: 'Photographer', country: 'India', state: 'Chhattisgarh', city: 'Durg-Bhilai', status: 'Active' },
    { id: 3, name: 'Suraj Kumar Dewangan', avatar: 'https://i.pravatar.cc/150?img=3', category: 'Data Entry', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Active' },
    { id: 4, name: 'Ashish Thakur', avatar: 'https://i.pravatar.cc/150?img=4', category: 'Data Entry', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Inactive' },
    { id: 5, name: 'Neelam Bhoutik', avatar: 'https://i.pravatar.cc/150?img=5', category: 'Data Entry', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Active' },
    { id: 6, name: 'Govinda Kesharwani', avatar: 'https://i.pravatar.cc/150?img=6', category: 'Data Entry', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Active' },
    { id: 7, name: 'Nilesh Kumar', avatar: 'https://i.pravatar.cc/150?img=7', category: 'Data Entry', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Active' },
    { id: 8, name: 'Devendra Kumar Sahu', avatar: 'https://i.pravatar.cc/150?img=8', category: 'Data Entry', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Active' },
    { id: 9, name: ' Aruna Sona', avatar: 'https://i.pravatar.cc/150?img=9', category: 'Accountant', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Inactive' },
    { id: 10, name: 'Neelkant Manda', avatar: 'https://i.pravatar.cc/150?img=10', category: 'Accountant', country: 'India', state: 'Chhattisgarh', city: 'Raipur', status: 'Active' },
];


const ServiceProviderList = () => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);

    // Pagination logic
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = serviceProvidersData.slice(indexOfFirstEntry, indexOfLastEntry);
    const totalPages = Math.ceil(serviceProvidersData.length / entriesPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // CSS styles embedded within the component
    const styles = `
        /* Import Font Awesome for icons */
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

        .page-wrapper {
            background-color: #f0f2f5;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding-bottom: 50px;
        }
        .page-header {
            background-color: #28a745;
            color: white;
            padding: 1rem;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
        }
        .card {
            background: #ffffff;
            margin: 20px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .filter-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            align-items: flex-end;
        }
        .filter-controls select {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            flex-grow: 1;
        }
        .search-btn {
            background-color: #dc3545;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .table-controls {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        .table-responsive {
            overflow-x: auto;
        }
        .data-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }
        .data-table th, .data-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e0e0e0;
        }
        .data-table th {
            font-weight: 600;
            color: #333;
        }
        .data-table tbody tr:hover {
            background-color: #f5f5f5;
        }
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
            vertical-align: middle;
        }
        .name-cell {
            display: flex;
            align-items: center;
        }
        .action-btn {
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin-right: 5px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }
        .btn-invite { background-color: #dc3545; }
        .btn-view { background-color: #28a745; }
        .btn-share { background-color: #007bff; }
        .pagination-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }
        .pagination {
            display: flex;
            list-style: none;
            padding: 0;
        }
        .pagination li a {
            padding: 8px 12px;
            margin: 0 2px;
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #007bff;
            text-decoration: none;
            cursor: pointer;
        }
        .pagination li.active a {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #888;
            font-size: 14px;
        }
    `;

    return (
        <div className="page-wrapper">
            <style>{styles}</style>
            <header className="page-header">Service Provider List</header>

            <div className="card filter-controls">
                <select><option>Select City</option></select>
                <select><option>Select Area</option></select>
                <select><option>Select Service Category</option></select>
                <select><option>Select Center</option></select>
                <button className="search-btn"><i className="fas fa-search"></i> Search</button>
            </div>

            <div className="card">
                <div className="table-controls">
                    <div>Show <select><option>10</option></select> entries</div>
                    <div>Search: <input type="text" /></div>
                </div>
                <div className="table-responsive">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.map((provider) => (
                                <tr key={provider.id}>
                                    <td>{provider.id}</td>
                                    <td>
                                        <div className="name-cell">
                                            <img src={provider.avatar} alt={provider.name} className="avatar" />
                                            {provider.name}
                                        </div>
                                    </td>
                                    <td>{provider.category}</td>
                                    <td>{provider.country}</td>
                                    <td>{provider.state}</td>
                                    <td>{provider.city}</td>
                                    <td>{provider.status}</td>
                                    <td>
                                        <button className="action-btn btn-invite"><i className="fas fa-user-plus"></i> Invite</button>
                                        <button className="action-btn btn-view"><i className="fas fa-eye"></i> View</button>
                                        <button className="action-btn btn-share"><i className="fas fa-share-alt"></i> Share</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination-controls">
                    <div>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, serviceProvidersData.length)} of {serviceProvidersData.length} entries</div>
                    <ul className="pagination">
                        <li><a onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}>Previous</a></li>
                        {[...Array(totalPages).keys()].map(number => (
                             <li key={number + 1} className={currentPage === number + 1 ? 'active' : ''}>
                                <a onClick={() => paginate(number + 1)}>{number + 1}</a>
                            </li>
                        ))}
                        <li><a onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}>Next</a></li>
                    </ul>
                </div>
            </div>
            
            <footer className="footer">
                All rights reserved by BlueChipCares admin.
            </footer>
        </div>
    );
};

export default ServiceProviderList;
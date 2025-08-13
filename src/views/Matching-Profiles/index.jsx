import React, { useState } from 'react';

const MatchingProfilesPage = () => {
    // State to hold the number of records found. Default is 0 as shown in the image.
    const [recordCount, setRecordCount] = useState(0);

    // Embedded CSS for single-file implementation
    const styles = `
        .page-background {
            background-color: #f0f2f5; /* Light grey page background */
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            padding: 2rem;
            min-height: 100vh;
            display:flex;
            justify-content: center;
            align-items: flex-start;
        }

        .profile-card {
            width: 150%;
            max-width: 1250px;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            overflow: hidden; /* Ensures children conform to the rounded corners */
        }

        .card-header {
            background-color: #34c27a; /* Green header color */
            color: white;
            padding: 1rem 1.5rem;
            text-align: center;
        }

        .card-header h2 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 600;
        }

        .card-body {
            background-color: #ffffff;
            /* The body has no content, but padding gives it height */
            padding: 1rem;
            min-height: 40px; 
            border: 1px solid #e7eaf3;
            border-top: none;
            border-bottom-left-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="page-background">
                <div className="profile-card">
                    <div className="card-header">
                        <h2>
                            Matching Profiles ( {recordCount} records found )
                        </h2>
                    </div>
                    <div className="card-body">
                        {/* This area is empty as per the screenshot */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MatchingProfilesPage;
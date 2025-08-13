// import React from 'react';

const MatchingJobsPage = () => {
    // Base64 encoded placeholder image to keep the component self-contained.
    const avatarImage = 'https://bluechipcares.com/public/storage/uploads/Profile/1744372361_images.jfif';

    // Component styles embedded in a template literal
    const styles = `
        .matching-jobs-page {
            background-color: #f0f4f8; /* Light blue-grey background */
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            padding: 0;
            margin: 0;
        }

        .header-bar {
            background-color: #36a2eb; /* Matching blue color */
            color: white;
            padding: 1rem 0;
            text-align: center;
            margin-bottom: 2rem;
        }

        .header-bar h2 {
            margin: 0;
            font-weight: 600;
        }

        .content-area {
            display: flex;
            justify-content: flex-start;
            padding: 0 2rem;
        }

        .job-card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            padding: 1.5rem;
            display: flex;
            align-items: center;
            max-width: 400px;
        }

        .avatar img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right: 1.5rem;
            object-fit: cover;
        }

        .job-details h3 {
            margin: 0 0 0.25rem 0;
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        .job-details h3 a {
            color: #007bff;
            text-decoration: none;
        }
        
        .job-details h3 a:hover {
            text-decoration: underline;
        }

        .job-details .meta-info {
            color: #6c757d; /* Grey color for meta text */
            font-size: 0.9rem;
            line-height: 1.4;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="matching-jobs-page">
                <header className="header-bar">
                    <h2>Matching Jobs</h2>
                </header>
                <main className="content-area">
                    <div className="job-card">
                        <div className="avatar">
                            <img src={avatarImage} alt="Sunita Yadav" />
                        </div>
                        <div className="job-details">
                            <h3>
                                <a href="#">React JS Trainer.</a>
                            </h3>
                            <p className="meta-info">
                                SUNITA YADAV, (Information Technology (IT))
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default MatchingJobsPage;
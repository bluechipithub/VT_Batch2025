import React, { useState } from 'react';
const PostAdForm = () => {
  // State to hold all form field values
  const [formData, setFormData] = useState({
    jobTitle: '',
    serviceCategory: '',
    serviceSubCategory: '',
    describeService: '',
    needDate: '',
    startTime: '',
    duration: '',
    daysNeeded: '',
    willingToPay: '',
    workFrom: '',
    workMode: '',
    sameAddress: false,
    country: '',
    selectStar: '',
    state: '',
    city: '',
    area: '',
    image: null,
    video: null,
  });
  

  // State for displaying the chosen file names
  const [imageFileName, setImageFileName] = useState('No file chosen');
  const [videoFileName, setVideoFileName] = useState('No file chosen');

  // Generic handler for text, select, and checkbox inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handler for file inputs to update file state and display name
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const file = files[0];
      setFormData(prevState => ({ ...prevState, [name]: file }));
      if (name === 'image') setImageFileName(file.name);
      if (name === 'video') setVideoFileName(file.name);
    }
  };

  // Handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! Check the console for the data.');
    console.log('Form Data:', formData);
  };

  // Handler for the clear button to reset the form
  const handleClear = () => {
    setFormData({
      jobTitle: '', serviceCategory: '', serviceSubCategory: '', describeService: '',
      needDate: '', startTime: '', duration: '', daysNeeded: '', willingToPay: '',
      workFrom: '', workMode: '', sameAddress: false, country: '', selectStar: '',
      state: '', city: '', area: '', image: null, video: null,
    });
    setImageFileName('No file chosen');
    setVideoFileName('No file chosen');
    document.getElementById("ad-form").reset();
  };

  // CSS styles embedded within the component for a single-file solution
  const styles = `
    .page-container {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      max-width: 1200px;
    }
      .header-title{
      display:flex;
      }
    body {
    margin: 0;
    font-family: Arial, sans-serif;
    }

    .banner-container {
    width: 100%;
    border: 1px solid #e0e0e0;
    overflow: hidden; 
    }

    .banner-header {
    background: linear-gradient(to right, #0077c2, #4caf50);
    color: white;
    text-align: center;
    padding: 12px 10px;
    }

    .banner-header h2 {
    margin: 0;
    font-size: 1.5em;
    font-weight: bold;
    }

    .banner-content {
    display: flex;
    flex-wrap: wrap;
    background-color: #0d1a52;
    color: white;
    padding: 25px;
   }

   .column {
    flex: 1;
    min-width: 300px;
    padding: 0 20px;
   }

   .column h3 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.1em;
   }

   .hindi-title {
    color: #ff6b81;
   }

   .english-title {
    color: #a58fee;
   }

   .column ol {
    margin: 0;
    padding-left: 20px;
   }

   .column li {
    margin-bottom: 12px;
    line-height: 1.5;
    font-size: 0.95em;
   }
    
  
    .form-container {
      background-color: #ffffff;
      max-width: 1200px;
      margin: 30px auto;
      padding: 30px 40px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
    }
    .form-group {
      margin-bottom: 22px;
    }
    .form-label {
      display: block;
      margin-bottom: 8px;
      color: #333; /* Dark grey for readability */
      font-weight: 500;
      font-size: 15px;
    }
    .form-label .required {
      color: red;
      margin-left: 2px;
    }
    .form-input, .form-select, .form-textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 16px;
      color: #333;
      font-family: inherit;
    }
    .form-textarea {
        resize: vertical;
        min-height: 80px;
    }
    .form-checkbox-group {
      display: flex;
      align-items: center;
      margin-bottom: 22px;
      gap: 10px;
    }
    .form-checkbox {
      width: 18px;
      height: 18px;
      accent-color: #007bff;
    }
    .form-file-wrapper {
      border: 1px solid #ccc;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .form-file-wrapper span {
      padding: 0 12px;
      color: #555;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .form-file-wrapper input[type="file"] {
      display: none;
    }
    .form-file-wrapper .file-button {
      background-color: #f1f1f1;
      border-left: 1px solid #ccc;
      padding: 12px 18px;
      cursor: pointer;
      font-size: 14px;
    }
    .info-text {
      font-size: 14px;
      color: #e60000; /* Red as in video */
      margin: 25px 0;
      text-align: left;
    }
    .button-group {
      margin-top: 20px;
      display: flex;
      gap: 15px;
    }
    .btn {
      padding: 12px 28px;
      border: none;
      border-radius: 4px;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .btn:hover { opacity: 0.9; }
    .btn-submit { background-color: #28a745; }
    .btn-clear { background-color: #007bff; }
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #888;
    }
  `;

  return (
    <div className="page-container">
      <style>{styles}</style>
      
      {/* <header className="page-header">
        <div>Hello, Username! (Post your AD)</div>
        <div className="header-links">
          <a href="#">My profile</a> | <a href="#">Logout</a>
        </div>
      </header> */}
      

      <div className="form-container">
        <form id="ad-form" onSubmit={handleSubmit} noValidate>

          <div className="form-group">
            <label className="form-label" htmlFor="jobTitle">Job Title<span className="required">*</span></label>
            <input type="text" id="jobTitle" name="jobTitle" placeholder="Write a brief about your job" className="form-input" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="serviceCategory">Select Service Category<span className="required">*</span></label>
            <select id="serviceCategory" name="serviceCategory" className="form-select" onChange={handleChange}>
              <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="serviceSubCategory">Select Service Sub Category<span className="required">*</span></label>
            <select id="serviceSubCategory" name="serviceSubCategory" className="form-select" onChange={handleChange}>
              <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="describeService">Describe Service<span className="required">*</span></label>
            <textarea id="describeService" name="describeService" placeholder="Describe a detailed quantity of work / service you want" className="form-textarea" onChange={handleChange}></textarea>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="needDate">When do you need service<span className="required">*</span></label>
            <input type="date" id="needDate" name="needDate" className="form-input" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="startTime">Time to start service<span className="required">*</span></label>
            <input type="time" id="startTime" name="startTime" className="form-input" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="duration">Duration of Service<span className="required">*</span> (Days)</label>
            <input type="number" id="duration" name="duration" className="form-input" onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="daysNeeded">No. of days you need the service</label>
            <input type="number" id="daysNeeded" name="daysNeeded" className="form-input" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="willingToPay">Service Charges that you are willing to Pay (<span className="required">*</span> Taxes Extra)</label>
            <input type="number" id="willingToPay" name="willingToPay" className="form-input" onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="workFrom">Work from<span className="required">*</span></label>
            <select id="workFrom" name="workFrom" className="form-select" onChange={handleChange}>
              <option value="">Select Work Mode</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="workMode">Select Work Mode</label>
            <select id="workMode" name="workMode" className="form-select" onChange={handleChange}>
               <option value="">Select</option>
            </select>
          </div>
        
          <div className="form-checkbox-group">
            <label className="form-label">Service Location Address<span className="required">*</span></label>
            <input type="checkbox" id="sameAddress" name="sameAddress" className="form-checkbox" onChange={handleChange} />
            <label htmlFor="sameAddress" style={{color: '#555', fontWeight: 'normal', cursor: 'pointer'}}>service location of customer is same as customer's profile address</label>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="country">Country<span className="required">*</span></label>
            <select id="country" name="country" className="form-select" onChange={handleChange}>
               <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="selectStar">Select<span className="required">*</span></label>
            <select id="selectStar" name="selectStar" className="form-select" onChange={handleChange}>
               <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="state">Select State<span className="required">*</span></label>
            <select id="state" name="state" className="form-select" onChange={handleChange}>
               <option value="">Select</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="city">Select City<span className="required">*</span></label>
            <select id="city" name="city" className="form-select" onChange={handleChange}>
               <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="area">Select Area</label>
            <select id="area" name="area" className="form-select" onChange={handleChange}>
               <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
              <label className="form-label">Upload Image (Only .jpg, .jpeg, .png format accepted)</label>
              <div className="form-file-wrapper">
                  <span>{imageFileName}</span>
                  <label htmlFor="image" className="file-button">Choose File</label>
                  <input id="image" type="file" name="image" accept=".jpg,.jpeg,.png" onChange={handleFileChange}/>
              </div>
          </div>

          <div className="form-group">
              <label className="form-label">Upload Video (maximum size- 20MB)</label>
              <div className="form-file-wrapper">
                  <span>{videoFileName}</span>
                  <label htmlFor="video" className="file-button">Choose File</label>
                  <input id="video" type="file" name="video" accept="video/*" onChange={handleFileChange}/>
              </div>
          </div>
          
          <p className="info-text">Your Ad with Video and Image will have more accurate response.</p>

          <div className="button-group">
            <button type="submit" className="btn btn-submit">Submit</button>
            <button type="button" className="btn btn-clear" onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>
      
      <footer className="footer">
        <p>All Rights Reserved by BlueChipCares admin.</p>
      </footer>
    </div>
  );
};

export default PostAdForm;
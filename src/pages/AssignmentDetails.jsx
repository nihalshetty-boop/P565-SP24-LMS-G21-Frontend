import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AssignmentDetails() {
  const { subjectId, assignmentId } = useParams();
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Replace this with the actual logic to fetch assignment details
  const fetchAssignmentDetails = (subjectId, assignmentId) => {
    // Fetch data logic here
    // For now, just a placeholder text
    return `Detailed description for ${assignmentId} of ${subjectId}`;
  };

  // Handle file input change
//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   }; 

const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log('File chosen:', event.target.files[0]);
  };
  

  // Handle file upload submission
//   const handleSubmit = () => {
//     if (file) {
//       // Logic to handle file upload will go here
//       // For now, just simulate an upload status message
//       setUploadStatus(`File ${file.name} is submitted.`);
//     }
//   };

const handleSubmit = () => {
    console.log('Submit button was clicked.'); // This should appear in the console
    if (file) {
      console.log(`File to submit: ${file.name}`); // This should show the file name
      setUploadStatus(`File ${file.name} is submitted.`);
    }
  };
  

  // Fetch assignment details based on subjectId and assignmentId
  const assignmentDetails = fetchAssignmentDetails(subjectId, assignmentId);

  // Styles similar to the given image
  const cardStyle = {
    backgroundColor: '#E0F7FA',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    maxWidth: '400px',
    margin: '40px auto'
  };

  const buttonStyle = {
    backgroundColor: '#26A69A',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    margin: '10px 0',
    cursor: 'pointer'
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #B2DFDB',
    borderRadius: '4px',
    width: '100%'
  };

  return (
    <div style={cardStyle}>
      <h1 className="text-2xl font-bold mb-4" style={{ textAlign: 'center', color: '#004D40' }}>Assignment Details for {assignmentId}</h1>
      <p className="mb-4">{assignmentDetails}</p>
      
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Upload your assignment:</label>
        <input type="file" onChange={handleFileChange} style={inputStyle} />
      </div>
      
      <button type="button" onClick={handleSubmit} style={buttonStyle}
      className='w-full py-2 bg-[#0fa3b1] text-white rounded-lg border-2 border-[#bee1e6] hover:bg-[#bee1e6] hover:text-[#0fa3b1] hover:border-[#0fa3b1] flex justify-center items-center transition-colors duration-300'>
        Submit Assignment
      </button>
      
      {uploadStatus && <p className="mt-3" style={{ textAlign: 'center', color: '#004D40' }}>{uploadStatus}</p>}
    </div>
  );
}

export default AssignmentDetails;

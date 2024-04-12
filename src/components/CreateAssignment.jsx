import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CreateAssignment() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [assignmentDetails, setAssignmentDetails] = useState('');
  const [files, setFiles] = useState([]);
  const [deadline, setDeadline] = useState('');

  const handleFilesChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Assignment Details:', assignmentDetails);
    console.log('Files:', files);
    console.log('Deadline:', deadline);
    
    // Logic to handle file upload will go here

    navigate(`/manage-courses/${subjectId}`); // Redirect back to manage courses
  };

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Assignment for {subjectId.replace('-', ' ')}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={assignmentDetails}
          onChange={(e) => setAssignmentDetails(e.target.value)}
          placeholder="Enter assignment details"
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="file"
          multiple
          onChange={handleFilesChange}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Finish
        </button>
      </form>
    </div>
  );
}

export default CreateAssignment;

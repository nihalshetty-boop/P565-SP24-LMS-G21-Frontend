import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CreateAnnouncement() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [announcementDetails, setAnnouncementDetails] = useState('');
  const [files, setFiles] = useState([]);
  

  const handleFilesChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Announcement Details:', announcementDetails);
    console.log('Files:', files);
    
    
    // Logic to handle file upload will go here

    navigate(`/manage-courses/${subjectId}`); // Redirect back to manage courses
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Announcement for {subjectId.replace('-', ' ')}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={announcementDetails}
          onChange={(e) => setAnnouncementDetails(e.target.value)}
          placeholder="Enter Announcement details"
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="file"
          multiple
          onChange={handleFilesChange}
          className="w-full p-2 border rounded mb-4"
        />
    
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Finish
        </button>
      </form>
    </div>
  );
}

export default CreateAnnouncement;

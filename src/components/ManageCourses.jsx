import React from 'react';
import { useParams } from 'react-router-dom';

function ManageCourses() {
  const { subjectId } = useParams();

  // Placeholder functions for assignment actions
  const createAssignment = () => {
    console.log('Creating assignment...');
    // Implement creation logic
  };

  const editAssignment = () => {
    console.log('Editing assignment...');
    // Implement editing logic
  };

  const deleteAssignment = () => {
    console.log('Deleting assignment...');
    // Implement deletion logic
  };

  // Placeholder functions for announcement actions
  const createAnnouncement = () => {
    console.log('Creating announcement...');
    // Implement creation logic
  };

  const editAnnouncement = () => {
    console.log('Editing announcement...');
    // Implement editing logic
  };

  const deleteAnnouncement = () => {
    console.log('Deleting announcement...');
    // Implement deletion logic
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subject: {subjectId.replace('-', ' ')}</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Assignments</h2>
        <button onClick={createAssignment} className="mr-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Assignment
        </button>
        <button onClick={editAssignment} className="mr-2 mb-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Edit Assignment
        </button>
        <button onClick={deleteAssignment} className="mr-2 mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete Assignment
        </button>
        {/* Placeholder for assignment list */}
        <p>No assignments to display.</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Announcements</h2>
        <button onClick={createAnnouncement} className="mr-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Announcement
        </button>
        <button onClick={editAnnouncement} className="mr-2 mb-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Edit Announcement
        </button>
        <button onClick={deleteAnnouncement} className="mr-2 mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete Announcement
        </button>
        {/* Placeholder for announcements list */}
        <p>No announcements to display.</p>
      </div>
    </div>
  );
}

export default ManageCourses;

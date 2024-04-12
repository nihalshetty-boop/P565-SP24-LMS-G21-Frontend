import React, {useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function ManageCourses() {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  // Function to navigate to the Create Assignment page
  const createAssignment = () => {
    console.log('Creating assignment...');
    navigate(`/manage-courses/${subjectId}/create-assignment`);
  };


  // const editAssignment = () => {
  //   console.log('Editing assignment...');
  //   // Implement editing logic
  // };

  // const deleteAssignment = () => {
  //   console.log('Deleting assignment...');
  //   // Implement deletion logic
  // };

  const [assignments, setAssignments] = useState([
    { id: 'assignment1', name: 'Homework 1' },
    // ...other assignments
  ]);


  // Placeholder functions for announcement actions
  const createAnnouncement = () => {
    console.log('Creating announcement...');
    navigate(`/manage-courses/${subjectId}/create-announcement`);
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

        {/* Only display assignments if there are any */}
        

{assignments.length > 0 ? (
  assignments.map((assignment) => (
    <div key={assignment.id} className="flex items-center justify-between mb-2 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
      {assignment.name}
      <div>
        <Link to={`/manage-courses/${subjectId}/edit/${assignment.id}`}>
          <FontAwesomeIcon icon={faEdit} className="text-green-600 hover:text-green-800 mx-2" />
        </Link>
        <Link to={`/manage-courses/${subjectId}/delete/${assignment.id}`}>
          <FontAwesomeIcon icon={faTrashAlt} className="text-red-600 hover:text-red-800 mx-2" />
        </Link>
      </div>
    </div>
  ))
) : (
  <p>No assignments to display.</p>
)}




        {/* <button onClick={editAssignment} className="mr-2 mb-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Edit Assignment
        </button>
        <button onClick={deleteAssignment} className="mr-2 mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete Assignment
        </button> */}
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

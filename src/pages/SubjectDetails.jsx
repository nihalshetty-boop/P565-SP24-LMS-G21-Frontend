import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SubjectDetails() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [searchAssignment, setSearchAssignment] = useState('');
  const [searchChat, setSearchChat] = useState('');

  // This could be dynamic data fetched based on subjectId
  const content = {
    'applied-algorithms': {
      assignments: ['Assignment 1', 'Assignment 2'],
      announcements: [
        { title: 'Algo Announcement 1', description: 'This is Algo Announcement 1' },
        { title: 'Algo Announcement 2', description: 'This is  Algo Announcement 2' },
      ],
    },
    'software-engineering': {
      assignments: ['Assignment 1', 'Assignment 2'],
      announcements: [
        { title: 'SE Announcement 1', description: 'This is SE Announcement 1' },
        { title: 'SE Announcement 2', description: 'This is  SE Announcement 2' },
      ],
    },
    'data-mining': {
      assignments: ['Assignment 1', 'Assignment 2'],
      announcements: [
        { title: 'DM Announcement 1', description: 'This is DM Announcement 1' },
        { title: 'DM Announcement 2', description: 'This is  DM Announcement 2' },
      ],
    },
  };

  const handleAssignmentClick = (assignmentId) => {
    navigate(`/assignments/${assignmentId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#e1eaef]">
  <div className="w-full h-full p-6 rounded-lg bg-white shadow-xl">
    <h2 className="text-2xl font-bold text-center text-[#0fa3b1] mb-6">
      {subjectId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
    </h2>
    
    <div className="text-[#0fa3b1] mb-6">
      <h3 className="text-lg font-medium text-[#0fa3b1] mb-4">Announcements:</h3>
      {content[subjectId].announcements.map((announcement, index) => (
        <div key={index} className="text-gray-800 text-lg mb-4 p-4 border rounded-lg">
          <p className="font-semibold">{announcement.title}</p>
          <p className="text-gray-600">{announcement.description}</p>
        </div>
      ))}
    </div>

    <div className="mb-4">
      <input
        type="text"
        value={searchAssignment}
        onChange={(e) => setSearchAssignment(e.target.value)}
        placeholder="Search Assignments"
        className="w-full p-3 mb-2 text-gray-700 rounded-lg border-2 border-[#bee1e6] focus:outline-none focus:border-[#0fa3b1]"
      />
    </div>

    <div className="space-y-4">
      <div className="text-[#0fa3b1]">
        <h3 className="text-lg font-medium text-[#0fa3b1] mb-4">Assignments:</h3>
        {content[subjectId].assignments.map((assignment, index) => (
          <p key={index} className="text-gray-800 text-lg p-4 border rounded-lg">
            <a onClick={() => handleAssignmentClick(assignment)} className="hover:underline cursor-pointer underline">
              {assignment}
            </a>
          </p>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}

export default SubjectDetails;

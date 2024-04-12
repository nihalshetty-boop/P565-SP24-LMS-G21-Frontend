import React from 'react';
import { useParams } from 'react-router-dom';

// This could be data fetched from an API or server
const courseDetails = {
  'applied-algorithms': {
    title: 'Applied Algorithms',
    instructor: 'John Doe',
    description: 'Learn advanced algorithms...'
    // other details
  },
  'data-mining': {
    title: 'DM',
    instructor: 'ABC',
    description: 'Learn DM...'
    // other details
  },
  'software-engineering': {
    title: 'SE',
    instructor: 'DEF',
    description: 'Learn SE...'
    // other details
  }
  // ... other courses
};



function CourseDetails() {
  const { courseId } = useParams();
  const details = courseDetails[courseId]; // Fetch details based on courseId

  return (
    <div className="p-6">
      <h2 className="font-bold text-3xl mb-4">{details.title}</h2>
      <p className="mb-4">{details.description}</p>
      <p className="font-bold">Instructor: {details.instructor}</p>
      <button
        onClick={() => enrollInCourse(courseId)}
            className="mt-4 bg-[#0fa3b1] text-white py-2 px-4 rounded">
         Enroll
            </button>

    </div>
  );
}

export default CourseDetails;

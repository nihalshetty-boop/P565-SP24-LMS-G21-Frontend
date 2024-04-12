import React from 'react';
import { Link } from 'react-router-dom';

// Mock data for courses, replace this with your actual data source
const courses = [
  { id: 'applied-algorithms', title: 'Applied Algorithms' },
  { id: 'software-engineering', title: 'Software Engineering' },
  { id: 'data-mining', title: 'Data Mining' },
  // Add more courses as needed
];

function CourseCard({ title, courseId }) {
  return (
    <Link to={`/course/${courseId}`} className="bg-white shadow-md rounded p-6 hover:bg-[#0fa3b1] hover:text-white">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>Learn more about {title}</p>
    </Link>  //////
  );
}

function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#e1eaef]">
      <nav className='flex pr-8 pt-5 shadow-sm justify-between items-center'>
        <img className='h-10 max-w-48 mx-5' src='/Logos/coursecraft_logo.png' alt='Coursecraft' />
        <div className="flex items-center">
          <img className='h-10 w-10' src='/Logos/default_pfp.png' alt='Coursecraft' />
          <div className="text-[#0fa3b1] text-[20px] font-bold tracking-wide mx-10">Rohith</div>
        </div>
      </nav>
      {/* Navbar can be extracted to a separate component */}
      
      <div className="md:container md:mx-auto px-10 my-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Map over the courses array to render CourseCard components */}
        {courses.map((course) => (
          <CourseCard key={course.id} title={course.title} courseId={course.id} />
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;

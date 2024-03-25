

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Faculty_Courses from '../components/Faculty_Courses';
import ManageCourses from '../components/ManageCourses'; 
function Faculty_Dashboard() {
    return (
        <div className="min-h-screen bg-[#e1eaef]">
          {/* Replicated navigation code */}
          <nav className='flex pr-8 pt-5 shadow-sm justify-between items-center'>
            <img className='h-10 max-w-48 mx-5' src='/Logos/coursecraft_logo.png' alt='Coursecraft' />
            <div className="flex items-center">
              <img className='h-10 w-10' src='/Logos/default_pfp.png' alt='Profile' />
              <div className="text-[#0fa3b1] text-[20px] font-bold tracking-wide mx-10">Charan</div>
            </div>
          </nav>
          
          {/* Content remains unchanged */}
          <div className="md:container md:mx-auto my-10 grid grid-cols-3 gap-4">
            <Link to="/manage-courses/applied-algorithms">
              <Faculty_Courses title="Applied Algorithms" />
            </Link>
            <Link to="/manage-courses/software-engineering">
              <Faculty_Courses title="Software Engineering" />
            </Link>
            <Link to="/manage-courses/data-mining">
              <Faculty_Courses title="Data Mining" />
            </Link>
          </div>
    
          <Routes>
            <Route path="/manage-courses/:subjectId" element={<ManageCourses />} />
          </Routes>
        </div>
      );
    }


    

export default Faculty_Dashboard;

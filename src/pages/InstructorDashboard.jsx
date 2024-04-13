

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Faculty_Courses from '../components/Faculty_Courses';
import ManageCourses from '../components/ManageCourses'; 
// import {getCourses, getCourseName, getName } from '../features/dashboard/dashboardInfo';
import { getCourses, getCourseName, getName } from '../features/dashboard/dashboard/dashboardInfo';
import SubjectCard from './SubjectCard';


async function getSubjects() {
  let subjects = [];
  try {
    let courses = await getCourses();
    //console.log(courses);
    for(const course of courses) {
      //console.log(getCourseName(course));
      subjects.push({ title: await getCourseName(course), subjectId: course});
      //console.log(subjects);
    }
    return subjects;
  } catch (error) {
    console.error(error.code, error.message);
  }
  //console.log(courses);
}

function Faculty_Dashboard() {

  const [searchTerm, setSearchTerm] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getSubjects()
      .then(fetchedSubjects => {
        //console.log(fetchedSubjects);
        setSubjects(fetchedSubjects);
      })
      .catch(error => {
        console.error("Error fetching subjects:", error);
      });
  }, []);

  useEffect(() => {
    getName()
      .then(fetchedName => {
        //console.log(fetchedName);
        setName(fetchedName);
      })
      .catch(error => {
        console.error("Error fetching name:", error);
      });
  }, []);

  // Filter subjects based on search term
  const filteredSubjects = searchTerm.length === 0 ? subjects : subjects.filter(subject =>
    subject.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="min-h-screen bg-[#e1eaef]">
        {/* Replicated navigation code */}
        <nav className='flex pr-8 pt-5 shadow-sm justify-between items-center'>
          <img className='h-10 max-w-48 mx-5' src='/Logos/coursecraft_logo.png' alt='Coursecraft' />
          <div className="flex items-center">
            <img className='h-10 w-10' src='/Logos/default_pfp.png' alt='Profile' />
            <div className="text-[#0fa3b1] text-[20px] font-bold tracking-wide mx-10">{name}</div>
          </div>
        </nav>

        {/* Search input */}
        <div className="search-bar md:container md:mx-auto my-10">
          <input
            type="text"
            placeholder="Search for classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#0fa3b1] transition-colors'
          />
        </div>

        {/* Subjects grid */}
        <div className="md:container md:mx-auto grid grid-cols-3 gap-4">
        {filteredSubjects.map(subject => (
          <Link to={`/manage-courses/${subject.subjectId}`} key={subject.subjectId}>
            <SubjectCard title={subject.title} subjectId={subject.subjectId} />
          </Link>
        ))}
      </div>
  
        <Routes>
          <Route path="/manage-courses/:subjectId" element={<ManageCourses />} />
        </Routes>
      </div>
    );
  }


    

export default Faculty_Dashboard;

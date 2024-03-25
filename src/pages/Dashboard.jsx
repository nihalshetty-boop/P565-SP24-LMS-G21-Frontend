// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import SubjectCard from './SubjectCard';
// import SubjectDetails from './SubjectDetails';

// function Dashboard() {
//   return (
//     <div className="min-h-screen bg-[#e1eaef]">
//       <nav className='flex pr-8 pt-5 shadow-sm justify-between items-center'>
//         <img className='h-10 max-w-48 mx-5' src='/Logos/coursecraft_logo.png' alt='Coursecraft' />
//         <div className="flex items-center">
//           <img className='h-10 w-10' src='/Logos/default_pfp.png' alt='Coursecraft' />
//           <div className="text-[#0fa3b1] text-[20px] font-bold tracking-wide mx-10">Rohith</div>
//         </div>
//       </nav>
//       <div className="md:container md:mx-auto my-10 grid grid-cols-3 gap-4">
//         {/* Links act as the trigger for navigation on click */}
//         <SubjectCard title="Applied Algorithms" subjectId="applied-algorithms" />
//         <SubjectCard title="Software Engineering" subjectId="software-engineering" />
//         <SubjectCard title="Data Mining" subjectId="data-mining" />
//       </div>
    
//       <Routes>
//         <Route path="/subject/:subjectId" element={<SubjectDetails />} />
//       </Routes>
//     </div>
//   );
// }

// export default Dashboard;



import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SubjectCard from './SubjectCard';
import SubjectDetails from './SubjectDetails';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  // Assuming you have a list of subjects to display
  const subjects = [
    { title: 'Applied Algorithms', subjectId: 'applied-algorithms' },
    { title: 'Software Engineering', subjectId: 'software-engineering' },
    { title: 'Data Mining', subjectId: 'data-mining' },
    // You can add more subjects here
  ];

  // Filter subjects based on search term
  const filteredSubjects = searchTerm.length === 0 ? subjects : subjects.filter(subject =>
    subject.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#e1eaef]">
      <nav className='flex pr-8 pt-5 shadow-sm justify-between items-center'>
        <img className='h-10 max-w-48 mx-5' src='/Logos/coursecraft_logo.png' alt='Coursecraft' />
        <div className="flex items-center">
          <img className='h-10 w-10' src='/Logos/default_pfp.png' alt='Coursecraft' />
          <div className="text-[#0fa3b1] text-[20px] font-bold tracking-wide mx-10">Rohith</div>
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
          <SubjectCard key={subject.subjectId} title={subject.title} subjectId={subject.subjectId} />
        ))}
      </div>

      <Routes>
        <Route path="/subject/:subjectId" element={<SubjectDetails />} />
      </Routes>
    </div>
  );
}

export default Dashboard;


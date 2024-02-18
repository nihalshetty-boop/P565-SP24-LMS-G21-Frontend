// src/pages/firstpage.jsx

import { Link } from 'react-router-dom';

function FirstPage() {
    return (
        <div className='h-screen'>
          <nav className='flex items-center justify-between	shadow-sm'>
            <img classname='h-80 w-100' src='/Logos/coursecraft_logo.png' alt='Coursecraft' />
            <div className='flex gap-10'>
              <Link to={"login"}>
                <button className='px-8 py-2 bg-purple-100 rounded-md text-purple-600'>
                  Login
                </button>
              </Link>
              <Link to={"signup"}>
                <button className='px-6 py-2 bg-purple-600 rounded-md text-white'>
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
          <main className='pl-[150px] py-[150px] flex gap-[130px] '>
            <div className='flex flex-col gap-[35px]'>
              <h1 className='leading-[120px] text-[100px] text-gray-700'>
                <br /> Elevate your learning journey with 
                <span className='text-blue-500'> CourseCraft </span>
                <br />
                
                
              </h1>
              <p className='text-gray-600 leading-[30px]'>
                Get access to your academic progress, course modules, study <br />
                material and the latest announcements on CourseCraft
              </p>
              <Link to={"/signup"}>
                <button className='px-6 py-2 bg-purple-600 rounded-md text-white '>
                  Get started
                </button>
              </Link>
            </div>
    
          </main>
        </div>
      );
}

export default FirstPage;

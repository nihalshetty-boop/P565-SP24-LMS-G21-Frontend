import { Link } from 'react-router-dom';

function FirstPage() {
    return (
        <div className='pr-20 min-h-screen bg-[#e1eaef]'>
          <nav className='flex pl-8 pt-10 justify-between shadow-sm'>
            <img className='h-20' src='/Logos/coursecraft_logo.png' alt='Coursecraft' />
            <div className='flex gap-10 pt-5'>
              <Link to="/login">
                <button className='px-8 py-2 hover:bg-[#bee1e6] bg-[#0fa3b1] rounded-md text-white hover:text-[#0fa3b1]  border-2 hover:border-[#0fa3b1]'>
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className='px-6 py-2 bg-[#0fa3b1] rounded-md text-white hover:bg-[#bee1e6] hover:text-[#0fa3b1] border-2 hover:border-[#0fa3b1]'>
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
          <main className='pl-[50px] py-[50px] mt-[200px] flex gap-[30px]'>
            <div className='flex flex-col gap-[35px]'>
              <h1 className='text-[100px] text-gray-700' style={{ lineHeight: '120px' }}>
                Elevate your learning journey with 
                <span className='text-[#0fa3b1]'> CourseCraft</span>
              </h1>
              <p className='text-gray-600' style={{ lineHeight: '30px' }}>
                Get access to your academic progress, course modules, study
                material, and the latest announcements on CourseCraft.
              </p>
              <Link to="/signup">
                <button className='px-6 py-2 bg-[#0fa3b1] rounded-md text-white hover:bg-[#bee1e6] hover:text-[#0fa3b1] hover:border-2 border-[#0fa3b1]'>
                  Get started
                </button>
              </Link>
            </div>
          </main>
        </div>
      );
}

export default FirstPage;

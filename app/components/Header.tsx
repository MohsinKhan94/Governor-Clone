// components/Navbar.tsx
import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-[#044E83] shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto flex justify-between items-center py-4 h-auto lg:h-[50px]'>
        <div className='flex items-center'>
          <Image src={logo} alt='Governor Sindh Logo' width={50} height={50} className='ml-4 lg:ml-9 mt-0 lg:mt-5' />
          <span className='ml-4 lg:ml-[60px] font-extrabold text-[10px] lg:text-[13px] text-[#B9D8F3]'>Tuition Free Education Program on latest Technologies</span>
        </div>
        {/* Mobile menu button */}
        <div className='lg:hidden'>
          <button id='menu-button' className='text-[#FAF9F6] px-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <ul className='hidden lg:flex text-[#FAF9F6] space-x-6 lg:space-x-9 text-lg px-[20px] lg:px-[40px] font-medium text-[14px] lg:text-[16px]'>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Home</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Apply</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Jobs</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Result</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Courses</a></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div id='mobile-menu' className='lg:hidden hidden'>
        <ul className='text-[#FAF9F6] flex flex-col space-y-4 p-4'>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Home</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Apply</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Jobs</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Result</a></li>
          <li><a href='#' className='hover:text-[#B9D8F3]'>Courses</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

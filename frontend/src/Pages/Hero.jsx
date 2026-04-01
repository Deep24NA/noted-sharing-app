import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'; 
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import book from '../assets/book.jpg'
// import Registration from '../Forms/Registration';
// import TopNotes from './TopNotes';
// import book from '../Images/book.jpg'

const SearchBar = () => {
  return (
    <div className='w-full max-w-sm sm:max-w-xl lg:max-w-2xl  backdrop-blur-sm rounded-full p-2 shadow-xl border border-gray-200  '>
      <form className='flex items-center'>
        <input
          type='text'
          placeholder='Search notes by subject,topic or author...'
          className='w-full px-4 py-1 text-black text-[16px] bg-transparent focus:outline-none '
          aria-label='Search input'
        />
        <button
          type='submit'
          className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 transition duration-300 flex items-center justify-center'
          aria-label='Submit search'
        >
          <FiSearch size={20} />
        </button>
      </form>
    </div>
  );
};



const Hero = () => {
  return (
  
    <div className='relative h-[80vh] md:h-[80vh] w-full '>
      
      

      {/* 2. Content Wrapper (Static and positioned above the slider) */}
      {/* This ensures the search bar and text do NOT slide with the image */}
      <div className=' absolute w-full h-full flex flex-col justify-center items-center z-10 p-4 bg-contain  ' style={{ backgroundImage: `url(${book})` }}>
        
        {/* Title/Text (Static) */}
        <motion.h1 className='text-3xl md:text-5xl font-bold  mb-6 drop-shadow-lg text-center bg-gradient-to-l from-pink-500 via-purple-500 via-pink-900 via-yellow-500 via-pink-800 to-indigo-500 bg-clip-text text-transparent'
          animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%", 
        }}>
       Find Notes & Share Easily
        </motion.h1>
        <p className='text-black text-[18px]  p-1 mb-3'>Collaborate and learn better with a community of note-sharers</p>
        
        {/* Search Bar (Static) */}
        <SearchBar />
        <div className='mt-20 flex  gap-12'>
      <Link to="/register"
        whileHover={{
    scale: 1.1,
    boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.6)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
        className='bg-gradient-to-r from-pink-500 via-purple-500 via-pink-900 via-purple-500 to-indigo-500 p-3 rounded-lg text-white hover:scale-110 shadow-lg shadow-pink-500'>Upload your notes</Link>
        <Link to="/topnotes"  className='bg-gradient-to-l from-pink-500 via-purple-500 via-pink-900 via-purple-500 to-indigo-500 p-3 rounded-lg text-white  hover:scale-110 shadow-lg shadow-pink-500'>Explore popular notes</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
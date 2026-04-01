import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // You'll need to install react-icons
import { Link } from 'react-router-dom';

const navItems = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'About', href: '/about' },
  { id: 3, text:'Contact', href: '/contact' },
  { id: 4, text: 'Register/Login', href: '/register' },
];

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [nav, setNav] = useState(false);

  // Function to toggle the mobile menu state
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-gray-800 text-white flex justify-between items-center h-20 mx-auto px-4 sticky top-0 z-40 shadow-sm shadow-cyan-800 w-full'  >
      {/* Logo/Brand Name */}
      <h1 className='text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 via-pink-900 via-purple-500 to-indigo-500 bg-clip-text text-transparent  '>NoteHub</h1>

      {/* Desktop Navigation (Visible on medium screens and larger) */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className=''
          >
            {/* <a href={item.href}>{item.text}</a> */}
            <Link to={item.href} className='p-4 hover:bg-indigo-600 rounded-xl m-2 cursor-pointer duration-300'>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon (Visible only on small screens) */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer z-20'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Navigation Menu (Sliding sidebar for small screens) */}
      <ul
        className={
          // Conditional class for open/close animation and positioning
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%]  border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500 z-20'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        {/* <h1 className='text-3xl font-bold text-indigo-400 m-4 mt-7'>REACT.</h1> */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-indigo-600 duration-300 border-gray-600 cursor-pointer'
          >
         <Link to={item.href} onClick={handleNav}>{item.text}</Link>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
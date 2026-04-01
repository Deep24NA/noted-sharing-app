
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {

  const HandleJoin=()=>{
    // const [Email,setEmail]=useState()
   
      alert("Thanks for joining our group we will catch you soon❤️😊")
    
  }
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 flex justify-center flex-col items-center">
   <div className=" flex justify-center items-center w-100 gap-5 m-4 ">
    <input type="email"
     placeholder="Enter your email..." 
     className="bg-zinc-700 "
    //  value={Email}
    //  onChange={(e)=>{setEmail(e.target.value)}}
     />
   <span className="bg-gray-700 rounded-xl px-4 py-4 hover:cursor-pointer" onClick={HandleJoin}>Join Us</span>
   </div>

      <div className="flex flex-wrap justify-center gap-6 mb-4">
       
        <Link to="/" className="hover:text-purple-400">Home</Link>

       <Link to="/about" className="hover:text-purple-400">About</Link>
        <Link to="/contact" className="hover:text-purple-400">Contact</Link>
       <Link to="/register" className="hover:text-purple-400">Register</Link>
      </div>

  
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
      </div>

     
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NoteHub, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;




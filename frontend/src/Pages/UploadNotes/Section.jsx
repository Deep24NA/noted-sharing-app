import React from "react";
import UploadNoteDetails from "./UploadNoteDetails";
import girl from "../../assets/girl.png"
import {motion} from 'framer-motion'
function UploadSection() {
  return (

  <div className=" my-40">
   <motion.h2 className=' md:text-2xl font-semibold capitalize my-9 p-4 text-center bg-gradient-to-l from-pink-500 via-purple-500 via-pink-900 via-yellow-500 via-pink-800 to-indigo-500 bg-clip-text text-transparent  '
           animate={{ 
           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
         }}
         transition={{
           duration: 4,
           repeat: Infinity,
           ease: "linear",
         }}
         style={{
           backgroundSize: "200% 200%", // important for smooth movement
         }}>
       Share your<span className="text-6xl"> Knowledge</span> by your notes
         </motion.h2>
      <div className="flex ">

      <div className="relative contain">
        <img src={girl} alt="" className="h-140 w-[300px] md:w-[690px]" />
      </div>

      <UploadNoteDetails></UploadNoteDetails>
    </div>
  </div>
  );
}

export default UploadSection;

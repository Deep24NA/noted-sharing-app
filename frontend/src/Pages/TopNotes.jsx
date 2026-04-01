import React from "react";
import NotesFrame from "../Frames/Notes";
import {motion} from 'framer-motion'
function TopNotes() {
  return (
    <div className="bg-gray-200 p-9">
     <motion.h1 className='text-3xl capitalize md:text-5xl font-semibold  mb-6 drop-shadow-lg text-center bg-gradient-to-r from-pink-500 via-purple-500 via-pink-900 via-purple-500 to-indigo-500 bg-clip-text text-transparent'
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
    top notes
        </motion.h1>
      <div className="flex flex-wrap justify-center items-center">
        <NotesFrame
          title="JavaScript"
          description="js part1 covers all basic topics"
          auther="Seeta patel"
        ></NotesFrame>
        <NotesFrame
          title="HTML"
          description="js part1 covers all basic topics"
          auther="Seeta patel"
        ></NotesFrame>
        <NotesFrame
          title="Maths"
          description="js part1 covers all basic topics"
          auther="Seeta patel"
        >
          {" "}
        </NotesFrame>
        <NotesFrame
          title="React"
          description="js part1 covers all basic topics"
          auther="Seeta patel"
        ></NotesFrame>
        <NotesFrame
          title="Node.Js"
          description="js part1 covers all basic topics"
          auther="Seeta patel"
        ></NotesFrame>
      </div>
    </div>
  );
}

export default TopNotes;

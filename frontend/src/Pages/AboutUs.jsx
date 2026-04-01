import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaUsers,
  FaRocket,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";

const CardContent = [
  {
    id: 1,
    icon: <FaBook size={160} className=""></FaBook>,
    heading: "Find Quality notes",
    text: "Easily find high-quality notes shared by top students and experts. Save time and study smarter with well-organized, reliable notes.",
  },
  {
    id: 2,
    icon: <FaUsers size={160}></FaUsers>,
    heading: "Collaborate and share",
    text: "Share your notes with friends, get feedback, and study together — learning becomes easier when you collaborate!",
  },
  {
    id: 3,
    icon: <FaRocket size={160}></FaRocket>,
    heading: "Boots your learning",
    text: "Take your learning to the next level! Explore top-quality notes and tools that help you study smarter and faster.",
  },
];

function AboutUs() {
  return (
    <div className=" w-full bg-gray-300 py-20 md:w-screen">
      <h1 className="text-center m-16 text-black">
        Why{" "}
        <motion.span className="bg-gradient-to-r from-pink-500 via-purple-500 via-pink-900  to-indigo-500 bg-clip-text text-transparent  font-semibold"
         animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%", // important for smooth movement
            }}>
          Notehub
        </motion.span>
        ?
      </h1>
      <div className="flex justify-center gap-4  flex-wrap">
        {CardContent.map((item, i) => (
          <motion.div
            className=" bg-gradient-to-r from-pink-500 via-amber-700 via-yellow-900 via-blue-500 via-purple-500 via-cyan-700 via-lime-400 via-red-600 to-indigo-500 p-0.5 rounded-2xl shadow-[0_10px_40px_rgba(190,30,190,.2)]  w-[460px]  md:w-[370px]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
             
        viewport={{ once: true }}
            style={{
              backgroundSize: "200% 200%", // important for smooth movement
            }}id={i.toString()}
          key={i}
          >
            <div className="bg-gray-700 rounded-2xl p-8 flex flex-col justify-center items-center gap-10 w-full h-full ">
              {item.icon}
              <h2 className="text-2xl text-amber-600">{item.heading}</h2>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="m-10">
        <button className='bg-gradient-to-r from-pink-500 via-purple-500 via-pink-900 via-purple-500 to-indigo-500 p-3 rounded-lg text-white hover:scale-110 shadow-lg shadow-pink-500 m-auto block'>know More..</button>
      </div>
    </div>
  );
}

export default AboutUs;

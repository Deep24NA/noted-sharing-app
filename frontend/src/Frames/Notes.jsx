import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa"; // thumbs outline + filled
import { AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai"; // Share, View
import { FaRegComment } from "react-icons/fa"; // Comment
import { MdMarkEmailRead } from "react-icons/md"; // Mark as Read
import { CgProfile } from "react-icons/cg"; // View Profile
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
function NotesFrame({ title, description, auther }) {
  const [preview, setPreview] = useState(null);
  const [fname, setFname] = useState("");

  const HandleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));

      setFname(file.name);
    }
  };
  const Handleveiw = () => {
    if (preview) {
      window.open(preview, "_blank");
    }
  };
  return (
    <motion.div
      drag
      className={` shadow-lg shadow-indigo-300  rounded-xl p-3 m-4 sm:w-[370px] md:w-[300px] bg-gray-700  w-full `}
    >
      <input
        type="file"
        accept=".pdf,.jpg,.png"
        className="w-72 m-auto block"
        onChange={HandleFile}
      />
      {preview && <iframe src={preview} title="pdf preview"></iframe>}
      <div className="flex justify-content-center items-center flex-col text-white gap-1">
        <p> {fname}</p>
        <h3 className="capitelize font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 via-pink-700 to-indigo-500 bg-clip-text text-transparent  text-xl">
          {title}
        </h3>
        <p className=" capitalize">{description}</p>
        <p>
          <span className=" ">Published by-</span>
          <span className=" capitalize bg-gradient-to-l from-pink-500 via-purple-500 via-pink-700 to-indigo-500 bg-clip-text text-transparent  text-xl">
            {auther}
          </span>
        </p>
      </div>
      <div className="flex justify-around items-center  flex-row m-6">
        <button onClick={Handleveiw}>view</button>
        <button>Download</button>
      </div>
      {/* <div className="flex justify-around items-center gap-2 m-3">
        <button>
          <AiFillHeart />
        </button>
        <button>
          {" "}
          <AiOutlineShareAlt title="Share" />
        </button>
        <button>
          {" "}
          <FaRegComment title="Comment" />
        </button>
        <button>
          {" "}
          <MdMarkEmailRead title="Mark as Read" />
        </button>
        <button>
          {" "}
          <CgProfile title="Profile" />
        </button>
      </div>
      <div className="flex justify-center gap-5">
         <button>
         view
        </button>
        <button>
          download
        </button>
       
      </div> */}
    </motion.div>
  );
}

export default NotesFrame;

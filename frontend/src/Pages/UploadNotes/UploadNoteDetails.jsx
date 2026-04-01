import React, { useState } from "react";

function UploadNoteDetails() {
  const [preview,setPreview]=useState(null)
  const handlepreview=(e)=>{
const file=e.target.files[0];
if(file){
  setPreview(URL.createObjectURL(file))
}
  }
  return (
    <div className="bg-gradient-to-l from-blue-500/30 via-white/20  opacity-70 p-3 rounded-xl flex flex-col justify-center gap-5 w-1/2  items-center">
      <h2 className="text-center font-semibold text-3xl text-shadow-cyan-950 text-black">Fill details</h2>
    
         <input type="file" className="w-full bg-black" onChange={handlepreview} />
     {preview &&( <iframe src={preview} frameborder="0"></iframe>)}
    
   <div className="bg-black w-full rounded-xl p-1">
       <label htmlFor="">Choose title</label>
      <select name="" id="" className="bg-black p-3 rounded-xl m-2">
        <option value="">JavaScript</option>
        <option value="">Java</option>
        <option value="">DSA</option>
 
        <option value="">C++</option>
        <option value="">Computer network</option>
        <option value="">React</option>
       
      </select> 
   </div>
    <input type="text" placeholder="Uploaded by...." className="bg-black w-full" />
  <div className="flex justify-content-center  flex-col w-full">
        <label htmlFor="" className="">Description</label>
      <textarea name="" id="" placeholder="" className="bg-amber-100 rounded"></textarea>
  </div>
 
     <button className="block w-full"> Upload</button>
    </div>
  );
}

export default UploadNoteDetails;

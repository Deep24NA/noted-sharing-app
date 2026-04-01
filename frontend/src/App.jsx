import { Routes, Route } from "react-router-dom";
import Login from "../src/Pages/Login"
import Register from '../src/Pages/Register'
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";


function App() {
  return (
   <>
    <Navbar></Navbar>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
       <Route path="/student-Dashboard" element={<Dashboard/>}/>
      </Routes>
      
    <Footer></Footer>
    </>
  );
}

export default App;
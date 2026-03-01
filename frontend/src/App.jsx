import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Pages/Login"
import Register from '../src/Pages/Register'
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";

// import {PrivateRoute} from "../src/components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
       <Route path="/student-Dashboard" element={<Dashboard/>}/>
      </Routes>
      {/* <Dashboard></Dashboard> */}
    </BrowserRouter>
  );
}

export default App;
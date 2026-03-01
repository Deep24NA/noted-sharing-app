import { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  ClipboardList,
  Award,
  User,
  Import,
  LogOut,
} from "lucide-react";
import { logoutUser } from "../api/auth";
import { useNavigate } from "react-router-dom";




export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser(); // call api
      localStorage.removeItem("token"); // remove token
      navigate("/"); // redirect
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-20 top-0 left-0 h-full w-64 bg-blue-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-xl font-bold">Student Panel</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-5">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
            <BookOpen size={18} /> My Courses
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
            <ClipboardList size={18} /> Assignments
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
            <Award size={18} /> Results
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300">
            <User size={18} /> Profile
          </a>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-white shadow px-4 h-16">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>

          <h1 className="text-xl font-semibold">Welcome, Seeta 👋</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 overflow-y-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-gray-500">Enrolled Courses</h2>
              <p className="text-2xl font-bold mt-2">5</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-gray-500">Pending Assignments</h2>
              <p className="text-2xl font-bold mt-2">2</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-gray-500">Overall Percentage</h2>
              <p className="text-2xl font-bold mt-2">82%</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2 text-gray-600">
              <li>📘 Submitted React Assignment</li>
              <li>📝 Completed Java Quiz</li>
              <li>🏆 Scored 85% in Database Test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

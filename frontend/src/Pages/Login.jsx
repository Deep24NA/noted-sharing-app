import { useState } from "react";
import { LoginUser } from "../api/auth";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await LoginUser(formData);
      console.log(res);
      // alert("Login successful ✅");

      setFormData({
        email: "",
        password: ""
      });
if(res.message==="Login successful"){
navigate("/student-Dashboard");
}


    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-semibold transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Extra Text */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link className="text-indigo-600 font-semibold cursor-pointer hover:underline" 
          to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
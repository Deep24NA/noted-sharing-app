import { useState } from "react";
import { RegisterUser } from "../api/auth";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
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
      const res = await RegisterUser(formData);
      console.log(res);

      setFormData({
        name: "",
        email: "",
        password: "",
        role: ""
      });

    } catch (err) {
      alert(err.message);
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
          Register
        </h2>

        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

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

        {/* Role */}
        <div className="mb-4">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
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
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Login Link */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            className="text-indigo-600 font-semibold hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
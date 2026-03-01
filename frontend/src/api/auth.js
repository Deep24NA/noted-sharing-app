
const API_URL = "http://localhost:5000/api/auth";

export const RegisterUser = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (err) {
    console.error("Register Error:", err.message);
    return { success: false, message: err.message };
  }
};



export const LoginUser = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (err) {
    console.error("Login Error:", err.message);
    return { success: false, message: err.message };
  }
};



//logout
 export const logoutUser = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include"
  });

  return response.json();
};
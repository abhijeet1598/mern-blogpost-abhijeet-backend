import { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import config from "../config/config";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${config.backendURI}/api/auth/login`,
        formData
      );
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in to Blog Post</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      <p>
        Do not have an account? <Link to={"/register"}>Register</Link>
      </p>
    </form>
  );
};

export default Login;

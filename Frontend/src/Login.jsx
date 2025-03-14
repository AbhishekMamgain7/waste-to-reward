import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";

import "./Login.css";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { email, password } = formData;

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Invalid email format.");
      setFormData({ email: "", password: "" });
      setIsSubmitting(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      setFormData({ email: "", password: "" });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Incorrect username/password. Please try again.");
        setFormData({ email: "", password: "" });
      } else {
        alert("Error: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="login-box"
      >
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue</p>

        <form onSubmit={handleLogin}>
          <motion.input
            name="email"
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="login-input"
          />
          <motion.input
            name="password"
            whileFocus={{ scale: 1.05 }}
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="login-input"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="login-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

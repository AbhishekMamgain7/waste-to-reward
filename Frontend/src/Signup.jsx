import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
import "./Login.css";

const SignUp = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      alert("Invalid email format.");
      setFormData({ ...formData, email: "" });
      setFormData({ ...formData, password: "" });
      setIsSubmitting(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Signup complete!");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("You are already registered. Try to login.");
        navigate("/login");
      } else if (error.code === "auth/weak-password") {
        alert("Password is too weak. Please try a stronger password.");
        setFormData({ ...formData, password: "" });
      } else {
        alert("An error occurred. Please try again.");
      }
    } finally {
      if (formData.password !== "") {
        setFormData({
          fullName: "",
          age: "",
          phoneNumber: "",
          email: "",
          password: "",
        });
      }
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
        <h2 className="login-title">Create an Account</h2>
        <p className="login-subtitle">Join us and start earning rewards!</p>

        <form onSubmit={handleSignup}>
          <motion.input
            name="fullName"
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="login-input"
          />
          <motion.input
            name="age"
            whileFocus={{ scale: 1.05 }}
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="login-input"
          />
          <motion.input
            name="phoneNumber"
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="login-input"
          />
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
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </motion.button>
        </form>

        <p className="login-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;

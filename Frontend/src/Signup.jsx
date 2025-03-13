import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { app } from "./firebaseConfig";
import "./Login.css"; // Reusing styles from Login

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Sign Up Successful!");
      setIsSubmitting(false);
    }, 2000);
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
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Full Name"
            required
            className="login-input"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="number"
            placeholder="Age"
            required
            className="login-input"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Phone Number"
            required
            className="login-input"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Email"
            required
            className="login-input"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            placeholder="Password"
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

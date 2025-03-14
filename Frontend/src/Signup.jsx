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

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const fullName = form.fullName.value;
    const age = form.age.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert(`Signup complete!\nName: ${fullName}\nAge: ${age}\nPhone: ${phoneNumber}`);
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("You are already registered. Try to login.");
        navigate("/login");
      } else {
        alert("Error: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
      form.reset();
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
            required
            className="login-input"
          />
          <motion.input
            name="age"
            whileFocus={{ scale: 1.05 }}
            type="number"
            placeholder="Age"
            required
            className="login-input"
          />
          <motion.input
            name="phoneNumber"
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Phone Number"
            required
            className="login-input"
          />
          <motion.input
            name="email"
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Email"
            required
            className="login-input"
          />
          <motion.input
            name="password"
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

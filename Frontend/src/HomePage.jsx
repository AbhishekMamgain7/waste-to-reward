import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const categories = [
  {
    name: "Plastic",
    description: "Earn Goodman Points as per the quality and quantity.",
    borderColor: "green-border",
    textColor: "white-text",
    imageClass: "plastic-bg",
  },
  {
    name: "Organic",
    description: "Earn Goodman Points as per quantity.",
    borderColor: "yellow-border",
    textColor: "yellow-text",
    imageClass: "organic-bg",
  },
  {
    name: "Glass",
    description: "Earn Goodman Points as per quantity.",
    borderColor: "blue-border",
    textColor: "white-text",
    imageClass: "glass-bg",
  },
];

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Waste to Reward</h1>
        <nav className="header-nav">
          <ul className="header-menu">
            <li className="header-menu-item">
              <Link to="/login" className="header-link">
                Login
              </Link>
            </li>
            <li className="header-menu-item">
              <a href="#services" className="header-link">
                AI Assistant
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="header2">
        <div className="header2-overlay"></div>
        <h1 className="header2-text">
          Earn Goodman Points for Responsible Waste Disposal
        </h1>
      </div>

      <section className="waste-section">
        <h2 className="section-title">Waste Categories</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-card ${category.borderColor} ${category.imageClass}`}
            >
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className={`category-title ${category.textColor}`}>
                  {category.name}
                </h3>
                <p className="category-desc">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        &copy; 2025 Waste to Rewards. All Rights Reserved.
      </footer>
    </div>
  );
}

export default HomePage;

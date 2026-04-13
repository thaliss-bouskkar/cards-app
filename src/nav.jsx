import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';
import logo from './logo.png';

export default function Nav({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <NavLink to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="logo" className="logo-icon" />
        <span className="logo-text">DevProfiles</span>
      </NavLink>

      <button className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Poids" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Poids
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cards" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Cards
          </NavLink>
        </li>
      </ul>

      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

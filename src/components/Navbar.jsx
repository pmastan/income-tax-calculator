import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            💰 <span>Tax Calculator</span>
          </Link>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/income-tax" onClick={closeMenu}>
              Income Tax
            </NavLink>
          </li>

          <li>
            <NavLink to="/gst" onClick={closeMenu}>
              GST
            </NavLink>
          </li>

          <li>
            <NavLink to="/tds" onClick={closeMenu}>
              TDS
            </NavLink>
          </li>

          <li>
            <NavLink to="/stamp-duty" onClick={closeMenu}>
              Stamp Duty
            </NavLink>
          </li>

          <li>
            <NavLink to="/capital-gain" onClick={closeMenu}>
              Capital Gain
            </NavLink>
          </li>

          <li>
            <NavLink to="/professional-tax" onClick={closeMenu}>
              Professional Tax
            </NavLink>
          </li>

          <li>
            <NavLink to="/tax-saving" onClick={closeMenu}>
              Tax Saving
            </NavLink>
          </li>

          <li>
            <NavLink to="/tax-slabs" onClick={closeMenu}>
              Tax Slabs
            </NavLink>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          className="overlay"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}

export default Navbar;
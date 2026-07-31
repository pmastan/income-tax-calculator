import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          💰 <span>Tax Calculator</span>
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/income-tax"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Income Tax
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gst"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            GST
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tds"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            TDS
          </NavLink>
        </li>

         <li>
          <NavLink
            to="/stamp-duty"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Stamp Duty
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/capital-gain"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Capital Gain
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/professional-tax"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Professional Tax
          </NavLink>
        </li>

       

        <li>
          <NavLink
            to="/tax-saving"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tax Saving
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tax-slabs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tax Slabs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaPercentage,
  FaFileInvoiceDollar,
  FaStamp,
  FaChartLine,
  FaBriefcase,
  FaPiggyBank,
  FaTable,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Income Tax",
      path: "/income-tax",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "GST",
      path: "/gst",
      icon: <FaPercentage />,
    },
    {
      name: "TDS",
      path: "/tds",
      icon: <FaFileInvoiceDollar />,
    },
    {
      name: "Stamp Duty",
      path: "/stamp-duty",
      icon: <FaStamp />,
    },
    {
      name: "Capital Gain",
      path: "/capital-gain",
      icon: <FaChartLine />,
    },
    {
      name: "Professional Tax",
      path: "/professional-tax",
      icon: <FaBriefcase />,
    },
    {
      name: "Tax Saving",
      path: "/tax-saving",
      icon: <FaPiggyBank />,
    },
    {
      name: "Tax Slabs",
      path: "/tax-slabs",
      icon: <FaTable />,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <h2>💰 Tax Calculator</h2>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>💰 TaxCalculator</h2>
          <p>Income Tax Calculator</p>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <small>© 2026 Tax Calculator</small>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
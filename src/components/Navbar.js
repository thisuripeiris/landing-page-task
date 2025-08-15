import React from "react";
import logo from "../assets/Logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <img src={logo} alt="Logo" height="35" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactus">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#careers">
                CAREERS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

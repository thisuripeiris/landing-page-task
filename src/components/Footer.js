import React from "react";
import logoWhite from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={logoWhite} alt="Logo" height="40" className="mb-3" />
            <p>© ct digital</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Our Technologies</h5>
            <ul className="list-unstyled">
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-white me-3">
            Privacy Policy
          </a>
          <a href="#" className="text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

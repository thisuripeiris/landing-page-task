import React from "react";
import logoWhite from "../assets/Logo.png";
import "../styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="footer" className="text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start mb-4">
          <div className="col-md-4 mb-3 top-container-div top-container-div-1">
            <a href="#hero">
              <img src={logoWhite} alt="Logo" height="40" className="mb-2" />
            </a>

            <p className="mb-0 logo-desc">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          <div className="col-md-4 mb-3 top-container-div top-container-div-2">
            <h5>Our Technologies</h5>
            <ul className="list-unstyled">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJs</li>
              <li>NodeJs</li>
            </ul>
          </div>

          <div className="col-md-4 mb-3 top-container-div top-container-div-3">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>Social media Marketing</li>
              <li>Web Development & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center border-top pt-3 mt-3">
          <div className="mb-2 mb-md-0 priv-policy">
            <a href="#privacy-plicy" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="#ptermscondition" className="text-white">
              Terms & Conditions
            </a>
          </div>

          {/* Social icons */}
          <div className="social-icons mb-2 mb-md-0">
            <a href="#facebook" className="text-white me-3">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#instagram" className="text-white me-3">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#twitter" className="text-white me-3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#linkedin" className="text-white">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          <div className="designed-by mt-2">
            <a href="https://www.linkedin.com/in/thisuripeiris/">
              <small>Designed By Thisuri Peiris</small>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

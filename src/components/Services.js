import React from "react";
import webDevIcon from "../assets/web-dev-icon.png";
import strategyIcon from "../assets/strategy-icon.png";
import "../styles/Services.css";
import "../../src/App.css";

function Services() {
  const containers = document.querySelectorAll(".container");

  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="service-container-1 service-container">
          <div className="serv-icon">
            <img src={webDevIcon} alt="Web Dev" className="mb-3 serv-icon-1" />
          </div>
          <div className="serv-body">
            <h3>Web & Mobile App Development</h3>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <a href="#" className="btn btn-warning">
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="service-container-2 service-container">
          <div className="serv-icon">
            <img
              src={strategyIcon}
              alt="Strategy"
              className="mb-3 serv-icon-2"
            />
          </div>
          <div className="serv-body">
            <h3>Digital Strategy Consulting</h3>
            <p>
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <a href="#" className="btn btn-warning">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

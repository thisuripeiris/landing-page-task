import React from "react";
import heroImage from "../assets/Hero.png";
import "../styles/Hero.css";
import "../../src/App.css";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        color: "#fff",
        marginTop: "56px", // space below fixed navbar
        position: "relative",
      }}
    >
      <div className="hero-text-box p-4">
        <h1 className="fw-bold">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <a href="#" className="btn hero-btn mt-3">
          GET FREE CONSULTATION
        </a>
      </div>
    </section>
  );
}

export default Hero;

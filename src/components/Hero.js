import React from "react";
import heroImage from "../assets/Hero.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero background" className="hero-image" />
      </div>
      <div className="hero-text-box">
        <h1 className="hero-title">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <a href="#getstart" className="hero-btn">
          GET FREE CONSULTATION
        </a>
      </div>
    </section>
  );
}

export default Hero;

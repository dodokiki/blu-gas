import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section id="home" className="hero-banner">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-image-container">
        <img src="/Banner.png" alt="Blu Gas Banner" className="hero-banner-image" />
      </div>
    </section>
  );
};

export default HeroBanner;


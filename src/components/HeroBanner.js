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
        <img 
          src="/Banner.png" 
          alt="บลูแกส - บริการแก๊สคุณภาพสูง ปลอดภัย ครบวงจร แก๊สอุตสาหกรรม แก๊สครัวเรือน" 
          className="hero-banner-image" 
        />
      </div>
    </section>
  );
};

export default HeroBanner;


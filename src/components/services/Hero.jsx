import React from 'react';
import './Hero.css';

const Hero = () => {
  const servicesList = "CAD-Design, Printing, Casting, Tumbling, Jeweler, Pre-polish, Diamond Supply, Setting, Complete Polish, Quality Control, Photo/Render Services and Ready Pickup.";

  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-heading">
          CUSTOM JEWELRY SERVICES & MANUFACTURING
        </h1>
        
        <div className="hero-intro">
          <p className="intro-paragraph">
            Denova Casting is a full-service wholesale jewelry manufacturer dedicated to providing exceptional quality and craftsmanship for retailer jewelers. We combine cutting-edge technology with traditional artistry to deliver custom jewelry solutions that meet the highest standards of excellence.
          </p>
        </div>

        <div className="hero-services">
          <h2 className="services-subtitle">Our services for retailer jewelers</h2>
          <p className="services-list">{servicesList}</p>
        </div>

        <a href="#services-grid" className="scroll-indicator">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#B8860B" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="scroll-arrow"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;











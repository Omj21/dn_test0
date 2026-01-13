import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Denova Casting jewelry manufacturing video"
        >
          <source src="/Who-We-Are-Homepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-heading">
            Denova Casting Unparalleled Jewelry Manufacturing
          </h1>
          <h2 className="hero-subheading">
            Discover quality wholesale jewelry manufacturing anew with unique custom jewelry designs.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;










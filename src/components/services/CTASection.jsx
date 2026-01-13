import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">Ready to Get Started?</h2>
        <p className="cta-description">
          Explore our individual service pages to learn more about how Denova Casting can help bring your jewelry designs to life. Whether you're looking to open a new account or activate online access to our services, we're here to support your business needs.
        </p>
        <div className="cta-button-group">
          <a href="#contact" className="cta-button cta-button-primary">
            OPEN NEW ACCOUNT
          </a>
          <a href="#activate" className="cta-button cta-button-secondary">
            ACTIVATE ONLINE ACCESS
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;











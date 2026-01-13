import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
  return (
    <section className="top-banner">
      <div className="top-banner-container">
        <a 
          href="https://diamondbyempire.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="top-banner-link"
        >
          <img 
            src="/diamond-by-empire-banner.png" 
            alt="Diamond By Empire Diamond Supplier"
            className="top-banner-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="top-banner-placeholder" style={{ display: 'none' }}>
            Diamond By Empire Diamond Supplier
          </div>
        </a>
      </div>
    </section>
  );
};

export default TopBanner;










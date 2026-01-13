import React from 'react';
import './FairminedSection.css';

const FairminedSection = () => {
  const images = [
    '/Casting-services.jpg',
    '/Fairmined gold for jewelry.jpg',
    '/Diamonds.jpg',
    '/fairmined jewelry gold.jpg'
  ];

  return (
    <section className="fairmined-section section">
      <div className="fairmined-container">
        <h2 className="section-heading">Natural and Reliable Gold</h2>
        <p className="fairmined-description">
          Becoming an environmentally sustainable and ethically responsible jewelry manufacturer is a core 
          commitment at Denova Casting. We proudly source Fairmined gold, which ensures that our 
          precious metals come from artisanal and small-scale mining organizations that meet the highest 
          environmental and social standards. Our dedication to ethical sourcing extends beyond compliance 
          – it reflects our values and commitment to making a positive impact on the communities and 
          environments where our materials originate.
        </p>
        
        <div className="fairmined-images-grid">
          {images.map((image, index) => (
            <div key={index} className="fairmined-image-wrapper">
              <img
                src={image}
                alt={`Fairmined gold and ethical sourcing ${index + 1}`}
                className="fairmined-image"
              />
            </div>
          ))}
        </div>

        <div className="fairmined-cta">
          <a href="/about-fairmined" className="btn-primary">
            ABOUT FAIRMINED
          </a>
        </div>
      </div>
    </section>
  );
};

export default FairminedSection;










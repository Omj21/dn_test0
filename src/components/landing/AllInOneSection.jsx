import React from 'react';
import './AllInOneSection.css';

const AllInOneSection = () => {
  const images = [
    '/cad-design.webp',
    '/Start-to-finish-jewelry-manufacturing.jpg',
    '/cad-design-and-modeling.png'
  ];

  return (
    <section className="all-in-one section">
      <div className="all-in-one-container">
        <h2 className="section-heading">All in One Jewelry Manufacturing</h2>
        <p className="all-in-one-intro">
          Denova Casting offers custom jewelry manufacturing services from concept to completion. 
          Our comprehensive approach ensures that every piece of jewelry meets the highest standards 
          of quality and craftsmanship, whether you need custom designs or wholesale manufacturing solutions.
        </p>
        <div className="all-in-one-images">
          {images.map((image, index) => (
            <div key={index} className="all-in-one-image-wrapper">
              <img
                src={image}
                alt={`Jewelry manufacturing process ${index + 1}`}
                className="all-in-one-image"
              />
            </div>
          ))}
        </div>
        <p className="all-in-one-description">
          Our wholesale jewelry manufacturing is the best choice for businesses seeking reliable, 
          high-quality jewelry production. With state-of-the-art facilities and experienced artisans, 
          we deliver exceptional results for every project.
        </p>
        <div className="all-in-one-cta">
          <a href="/services" className="btn-primary">
            See All Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllInOneSection;










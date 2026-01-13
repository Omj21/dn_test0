import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Unmatched Craftsmanship',
      description: 'Our talented artisans produce earrings that exhibit the ideal balance of accuracy and creativity, ensuring every piece meets the highest standards of quality and design excellence.'
    },
    {
      title: 'Large Selection',
      description: 'Choose from a variety of models of hoops and stud earrings, rings, bracelets, and necklaces with different diamond shapes and patterns to suit every style and preference.'
    },
    {
      title: 'Custom Solutions',
      description: 'Collaborate with our firm to develop one-of-a-kind, custom jewelry models that meet your particular design requirements and bring your unique vision to life.'
    },
    {
      title: 'Ethical Practices',
      description: 'To guarantee that the products are made responsibly, we place a high priority on sustainable jewelry manufacturing and ethical sourcing of materials.'
    },
    {
      title: 'Quick Turnaround',
      description: 'With a large inventory of pre-made models, we can satisfy your business demands more effectively by providing faster delivery times without compromising on quality.'
    }
  ];

  return (
    <section className="why-choose-us section">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-heading">Why Choose Jewelry Manufacturing at Denova Casting</h2>
        
        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              <span className="benefit-icon">★</span>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="why-choose-us-cta">
          <a href="/contact" className="btn-primary">
            GET A QUOTE NOW!
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;










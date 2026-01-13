import React from 'react';
import './ServicesPreview.css';

const ServicesPreview = () => {
  const services = [
    {
      name: 'CAD Design',
      image: '/Jewelry-CAD-Design-Process.webp',
      link: '/services/cad-design'
    },
    {
      name: 'Printing',
      image: '/Jewelry-Printing-Process.webp',
      link: '/services/printing'
    },
    {
      name: 'Casting',
      image: '/Jewelry-Casting-Process.webp',
      link: '/services/casting'
    },
    {
      name: 'Finished',
      image: '/Jewelry-Complete-Polish-Process.webp',
      link: '/services/polished-finished'
    }
  ];

  return (
    <section className="services-preview section">
      <div className="services-preview-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="service-card"
            >
              <div className="service-card-image-container">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-card-image"
                />
                <div className="service-card-overlay"></div>
                <div className="service-card-label">{service.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;










import React from 'react';
import './ServicesGrid.css';

const ServicesGrid = () => {
  const services = [
    {
      name: "CAD Design",
      icon: "cad-design-icon.png",
      description: "Sit with our in house CAD designers & create your ideal jewelry masterpiece by providing us with stone sizes dimensions to help design your idea",
      hasLink: true
    },
    {
      name: "Printing",
      icon: "printing-icon.png",
      description: "Utilize our top of the line Printers available to print your STL files",
      hasLink: true
    },
    {
      name: "Casting",
      icon: "casting-icon.png",
      description: "14K & 18K (Pink, White & Yellow) as well as Platinum",
      hasLink: true
    },
    {
      name: "Tumbling",
      icon: "tumbling-icon.png",
      description: "As per your finish request we tumble & prepolish all pieces prior to setting",
      hasLink: true
    },
    {
      name: "Jeweler",
      icon: "jeweler-icon.png",
      description: "Our team of Polishers ensure your piece(s) are prepared properly before the next step",
      hasLink: true
    },
    {
      name: "Pre-Polish",
      icon: "pre-polish-icon.png",
      description: "Our team of master jewelers ensure your piece(s) is cleaned and assembled to your quality standards",
      hasLink: false
    },
    {
      name: "Diamond Supply",
      icon: "supply-diamond.png",
      description: "Our in house Diamond Concierge can source a center stone or supply your melee & color stone needs",
      hasLink: false
    },
    {
      name: "Setting",
      icon: "setting-icon.png",
      description: "Our team of setters are ready to set a single stone or hundreds",
      hasLink: false
    },
    {
      name: "Complete Polish",
      icon: "complete-polish-icon.png",
      description: "Our polish department ensures your product is polished to perfection",
      hasLink: true
    },
    {
      name: "Quality Control",
      icon: "quality-control.png",
      description: "Once we have completed your product(s) all pieces are run through our white glove service in our QC department to ensure there are no imperfections before completing your job",
      hasLink: false
    },
    {
      name: "Photo/Render Services",
      icon: "photo-render.png",
      description: "Check out all of our creative marketing services www.empirecreativestudio.com",
      hasLink: true
    },
    {
      name: "Ready Pickup",
      icon: "ready-pickup-icon.png",
      description: "Expect an email & Phone call from your preferred pick up location. Thank you for choosing us. We look forward to building your Empire together",
      hasLink: false
    }
  ];

  return (
    <section id="services-grid" className="services-grid-section">
      <div className="services-container">
        <h2 className="section-heading">OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <img 
                  src={`/icons/${service.icon}`} 
                  alt={service.name}
                  className="service-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="service-icon-placeholder" style={{ display: 'none' }}>
                  {service.name.charAt(0)}
                </div>
              </div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              {service.hasLink && (
                <a href={`#${service.name.toLowerCase().replace(/\s+/g, '-').replace('/', '-')}`} className="learn-more-link">
                  LEARN MORE
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="link-icon"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;











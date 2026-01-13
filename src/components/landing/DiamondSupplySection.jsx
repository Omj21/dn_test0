import React from 'react';
import './DiamondSupplySection.css';

const DiamondSupplySection = () => {
  const diamondCards = [
    {
      title: 'Certified Wholesale Natural Diamond Supplier',
      link: '#natural-diamond-shop',
      image: '/natural-diamond.jpg'
    },
    {
      title: 'Certified Wholesale Lab-Grown Diamond Supplier',
      link: '#lab-grown-diamond-shop',
      image: '/lab-grown-diamond.jpg'
    },
    {
      title: 'Diamond By Empire Wholesale Diamond Supplier',
      link: 'https://diamondbyempire.com',
      external: true,
      image: '/diamond-by-empire.jpg'
    }
  ];

  return (
    <section className="diamond-supply section">
      <div className="diamond-supply-container">
        <h2 className="section-heading">Ethical and Certified Diamond Supply</h2>
        <div className="diamond-cards-grid">
          {diamondCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              className="diamond-card"
            >
              <div className="diamond-card-image-wrapper">
                <img
                  src={card.image}
                  alt={card.title}
                  className="diamond-card-image"
                />
                <div className="diamond-card-overlay">
                  <h3 className="diamond-card-title">{card.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="diamond-supply-description">
          <p>
            Denova Casting is dedicated to preserving an ethical approach to diamond sourcing 
            and jewelry manufacturing. We are proud partners with certified suppliers and maintain 
            memberships with industry-leading organizations including <strong>GIA</strong> (Gemological 
            Institute of America), <strong>JBT</strong> (Jewelers Board of Trade), <strong>MJSA</strong> 
            (Manufacturing Jewelers & Suppliers of America), <strong>RAPNET</strong>, and <strong>FAIRMINED</strong>. 
            Our commitment to ethical practices ensures that every diamond we source meets the highest 
            standards of quality, authenticity, and responsible sourcing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiamondSupplySection;










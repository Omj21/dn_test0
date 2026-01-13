import React from 'react';
import './MembershipBadges.css';

const MembershipBadges = () => {
  const memberships = [
    {
      name: 'Fairmined',
      logoUrl: 'https://via.placeholder.com/150x100/2c2c2c/ffffff?text=Fairmined'
    },
    {
      name: 'RapNet',
      logoUrl: 'https://via.placeholder.com/150x100/2c2c2c/ffffff?text=RapNet'
    },
    {
      name: 'Jewelers Board of Trade',
      logoUrl: 'https://via.placeholder.com/200x100/2c2c2c/ffffff?text=JBT'
    },
    {
      name: 'MJSA',
      logoUrl: 'https://via.placeholder.com/150x100/2c2c2c/ffffff?text=MJSA'
    }
  ];

  return (
    <section className="membership-badges-section">
      <div className="container">
        <h3 className="membership-title">WE ARE MEMBER OF</h3>
        <div className="membership-logos">
          {memberships.map((membership, index) => (
            <div key={index} className="membership-logo-wrapper">
              <img 
                src={membership.logoUrl} 
                alt={membership.name}
                className="membership-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipBadges;











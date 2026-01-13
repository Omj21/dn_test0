import React from 'react';
import './MembershipBadges.css';

const MembershipBadges = () => {
  const memberships = [
    { name: 'Fairmined', logo: '/logos/fairmined.png' },
    { name: 'RapNet', logo: '/logos/rapnet.png' },
    { name: 'Jewelers Board of Trade', logo: '/logos/jbt.png' },
    { name: 'MJSA', logo: '/logos/mjsa.png' }
  ];

  return (
    <section className="membership-badges-section">
      <div className="membership-container">
        <h2 className="membership-title">WE ARE MEMBER OF</h2>
        <div className="membership-logos">
          {memberships.map((membership, index) => (
            <div key={index} className="membership-logo-wrapper">
              <img 
                src={membership.logo} 
                alt={membership.name}
                className="membership-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="membership-logo-placeholder" style={{ display: 'none' }}>
                {membership.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipBadges;











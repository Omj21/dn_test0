import React from 'react';
import './MembershipBadges.css';

const MembershipBadges = () => {
  const memberships = [
    { name: 'Fairmined', logo: '/fairmined-logo.png' },
    { name: 'RapNet', logo: '/rapnet-logo.png' },
    { name: 'Jewelers Board of Trade', logo: '/jbt-logo.png' },
    { name: 'MJSA', logo: '/mjsa-logo.png' }
  ];

  return (
    <section className="membership-badges section">
      <div className="membership-badges-container">
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
                  e.target.nextSibling.style.display = 'block';
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










import React from 'react';
import './Header.css';

const Header = () => {
  const navItems = [
    'COLLECTION',
    'E-CATALOG',
    'SERVICES',
    'Diamond',
    'TENNIS',
    'TwistLock™',
    'TOOLS',
    'ABOUT US',
    'CONTACT'
  ];

  return (
    <header className="header" id="header">
      <div className="header-top">
        <div className="header-container">
          <div className="header-logo">
            <img 
              src="/logo.png" 
              alt="Denova Casting Logo" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="logo-text" style={{ display: 'none' }}>
              Denova Casting
            </div>
          </div>
          <div className="header-contact">
            <a href="tel:1-212-869-9525" className="contact-link">
              <span className="contact-icon">📞</span>
              1-212-869-9525
            </a>
            <a href="mailto:admdenova1@gmail.com" className="contact-link">
              <span className="contact-icon">✉</span>
              admdenova1@gmail.com
            </a>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <div className="header-container">
          <ul className="nav-menu">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('™', '')}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;










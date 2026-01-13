import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-container">
          <div className="header-logo">
            <span className="logo-text">Denova Casting</span>
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
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link">
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











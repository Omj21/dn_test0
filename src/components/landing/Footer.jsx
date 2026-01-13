import React from 'react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    'BLOG',
    'SERVICES',
    'COLLECTION',
    'CATALOG',
    'NEW ARRIVALS',
    'COMPANIES',
    'TOOLS',
    'APPLICATION FORMS'
  ];

  const contactInfo = [
    {
      label: 'Showroom',
      value: '47 W 47th St Booth 19/20, New York, NY, 10036',
      linkType: null
    },
    {
      label: 'Factory',
      value: '151 W 46th Street Fourth Floor New York, NY, 10036',
      linkType: null
    },
    {
      label: 'Phone',
      value: '1-212-869-9525',
      linkType: 'tel'
    },
    {
      label: 'Fax',
      value: '1-212-869-9527',
      linkType: null
    },
    {
      label: 'Email',
      value: 'admdenova1@gmail.com',
      linkType: 'mailto'
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: '📘', link: 'https://facebook.com' },
    { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com' },
    { name: 'Instagram', icon: '📷', link: 'https://instagram.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column footer-branding">
            <img
              src="/logo.png"
              alt="Denova Casting Logo"
              className="footer-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="footer-logo-text" style={{ display: 'none' }}>
              Denova Casting
            </div>
          </div>

          <div className="footer-column footer-quick-links">
            <h3 className="footer-column-title">QUICK LINKS</h3>
            <ul className="footer-link-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3 className="footer-column-title">CONTACT US</h3>
            <ul className="footer-contact-list">
              {contactInfo.map((info, index) => (
                <li key={index} className="footer-contact-item">
                  <span className="footer-contact-label">{info.label}:</span>
                  {info.linkType ? (
                    <a
                      href={`${info.linkType}:${info.value}`}
                      className="footer-link footer-contact-value"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="footer-contact-value">{info.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-hours">
            <h3 className="footer-column-title">WORKING HOURS</h3>
            <p className="footer-hours-text">Monday – Friday 9:00 AM – 5:00 PM</p>
          </div>
        </div>

        <div className="footer-social">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={social.name}
            >
              <span className="footer-social-icon">{social.icon}</span>
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <span className="footer-separator">|</span>
            <a href="/terms-conditions" className="footer-link">Terms & Conditions</a>
          </div>
          <p className="footer-copyright">
            2025 © Denova Casting – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;










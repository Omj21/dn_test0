import React, { useState } from 'react';
import '../styles/login.css';

function LoginPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    accountNumber: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          {/* Contact Info - Top Left */}
          <div className="header-contact">
            <a href="tel:1-212-869-9525" className="contact-link">1-212-869-9525</a>
            <a href="mailto:admdenova1@gmail.com" className="contact-link">admdenova1@gmail.com</a>
          </div>

          {/* Logo - Center Left */}
          <div className="header-logo">
            <a href="/" className="logo-link">
              <div className="logo-placeholder">Denova Casting</div>
            </a>
          </div>

          {/* Navigation - Center Right */}
          <nav className="header-nav">
            <ul className="nav-list">
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setCollectionDropdownOpen(true)}
                onMouseLeave={() => setCollectionDropdownOpen(false)}
              >
                <a href="#collection" className="nav-link">COLLECTION</a>
                {collectionDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="#collection-item1">Item 1</a></li>
                    <li><a href="#collection-item2">Item 2</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item"><a href="#e-catalog" className="nav-link">E-CATALOG</a></li>
              <li className="nav-item"><a href="#services" className="nav-link">SERVICES</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">ABOUT US</a></li>
              <li className="nav-item"><a href="#tools" className="nav-link">TOOLS</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">CONTACT</a></li>
              <li className="nav-item"><a href="#account" className="nav-link">MY ACCOUNT</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-list">
              <li><a href="#collection">COLLECTION</a></li>
              <li><a href="#e-catalog">E-CATALOG</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#tools">TOOLS</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <li><a href="#account">MY ACCOUNT</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Login</span>
          </nav>

          {/* Heading */}
          <h1 className="page-heading">Login to your account</h1>

          {/* Description */}
          <p className="page-description">
            Denova Casting is dedicated to exceptional service and effortless collaboration. 
            Through our online portal, you can manage your account, browse our catalog, and connect easily with our team. 
            Your business matters to us, and we're here to support your jewelry casting journey every step of the way.
          </p>

          {/* Login Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="accountNumber" className="form-label">
                Account# <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="form-input"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password <span className="required-asterisk">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="checkbox-input"
                />
                <span>Remember me</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">Log in</button>
              <a href="/my/passwords/new" className="link-forgot">Forgot your password?</a>
            </div>
          </form>

          {/* Secondary Actions */}
          <div className="secondary-actions">
            <a href="/my/profiles/new" className="secondary-link">
              Already Customer, Activate Your Account
            </a>
            <a href="/application-forms" className="secondary-link uppercase">
              NEW APPLICATION FORM
            </a>
          </div>

          {/* Google Maps Section */}
          <section className="maps-section">
            <h2 className="maps-heading">Location</h2>
            <div className="maps-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04450208459418!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Statue of Liberty Location"
                className="maps-iframe"
              ></iframe>
              <div className="maps-info">
                <p className="maps-address">Statue of Liberty</p>
                <p className="maps-address-detail">Liberty Island, New York, NY 10004</p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Statue+of+Liberty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-directions-link"
                >
                  Directions
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Branding Column */}
            <div className="footer-column">
              <div className="footer-logo">
                <div className="logo-placeholder">Denova Casting</div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h4 className="footer-title">QUICK LINKS</h4>
              <ul className="footer-links">
                <li><a href="/">HOME</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="#collection">COLLECTION</a></li>
                <li><a href="/catalog">CATALOG</a></li>
                <li><a href="#about">ABOUT US</a></li>
                <li><a href="#companies">COMPANIES</a></li>
                <li><a href="#tools">TOOLS</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="/application-forms">APPLICATION FORMS</a></li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="footer-column">
              <h4 className="footer-title">CONTACT US</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Showroom</strong>
                  <p>47 W 47th St Booth 19/20, New York, NY, 10036</p>
                </div>
                <div className="contact-item">
                  <strong>Factory</strong>
                  <p>151 W 46th Street Fourth Floor New York, NY, 10036</p>
                </div>
                <div className="contact-item">
                  <strong>Phone</strong>
                  <p>1-212-869-9525</p>
                </div>
                <div className="contact-item">
                  <strong>Fax</strong>
                  <p>1-212-869-9527</p>
                </div>
                <div className="contact-item">
                  <strong>Email</strong>
                  <p>admdenova1@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Working Hours Column */}
            <div className="footer-column">
              <h4 className="footer-title">WORKING HOURS</h4>
              <p className="working-hours">Mon - Fri 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>2025 © Denova Casting – All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;




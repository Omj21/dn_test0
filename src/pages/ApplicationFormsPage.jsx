import React, { useState } from 'react';
import '../styles/application-forms.css';

function ApplicationFormsPage() {
  const [formData, setFormData] = useState({
    businessPhone: '',
    contactEmail: '',
    businessName: '',
    website: '',
    mailingStreet: '',
    mailingCityStateZip: '',
    shippingStreet: '',
    shippingCityStateZip: '',
    operateUnderOtherNames: '',
    otherNames: '',
    ownerName: '',
    taxId: '',
    buyingGroup: '',
    amlCompliance: '',
    businessType: '',
    previousAccount: '',
    references: [
      { name: '', phone: '', accountNo: '', address: '', cityStateZip: '' },
      { name: '', phone: '', accountNo: '', address: '', cityStateZip: '' },
      { name: '', phone: '', accountNo: '', address: '', cityStateZip: '' },
      { name: '', phone: '', accountNo: '', address: '', cityStateZip: '' }
    ],
    cardType: '',
    otherCardType: '',
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    signedBy: '',
    date: '',
    title: '',
    captchaAnswer: ''
  });

  const [captcha] = useState({ num1: 9, num2: 13, answer: 22 });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('reference')) {
      const [, index, field] = name.split('-');
      setFormData(prev => ({
        ...prev,
        references: prev.references.map((ref, i) =>
          i === parseInt(index) ? { ...ref, [field]: value } : ref
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.captchaAnswer) !== captcha.answer) {
      alert('Please solve the captcha correctly.');
      return;
    }
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-top-bar">
          <div className="header-logo">
            <a href="/" className="logo-link">Denova Casting</a>
          </div>
          <div className="header-contact">
            <a href="tel:1-212-869-9525" className="contact-link">1-212-869-9525</a>
            <a href="mailto:admdenova1@gmail.com" className="contact-link">admdenova1@gmail.com</a>
          </div>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="#collection" className="nav-link">COLLECTION</a></li>
            <li><a href="/catalog" className="nav-link">E-CATALOG</a></li>
            <li><a href="/services" className="nav-link">SERVICES</a></li>
            <li><a href="#about" className="nav-link">ABOUT US</a></li>
            <li><a href="#contact" className="nav-link">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Page Title */}
          <h1 className="page-title">APPLICATION FORMS</h1>

          {/* Welcome Message */}
          <div className="welcome-message">
            <p>
              Welcome to Denova Casting. We are delighted that you are interested in establishing a business relationship with us. 
              Please complete the application form below and submit it electronically, or download the printable forms and email them to{' '}
              <a href="mailto:admdenova1@gmail.com" className="email-link">admdenova1@gmail.com</a>.
            </p>
          </div>

          {/* Application Form */}
          <form className="application-form" onSubmit={handleSubmit}>
            <h2 className="form-title">APPLICATION FOR NEW ACCOUNT</h2>
            <p className="form-subtitle">Legal Agreement</p>

            {/* Contact Information */}
            <div className="form-section">
              <h3 className="section-title">Contact Information</h3>
              <div className="form-group">
                <label htmlFor="businessPhone" className="form-label">BUSINESS PHONE</label>
                <input
                  type="tel"
                  id="businessPhone"
                  name="businessPhone"
                  className="form-input"
                  value={formData.businessPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail" className="form-label">CONTACT E-MAIL:</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="form-input"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="businessName" className="form-label">NAME OF BUSINESS:</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  className="form-input"
                  value={formData.businessName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="website" className="form-label">WEBSITE:</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="form-input"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Addresses */}
            <div className="form-section">
              <h3 className="section-title">Addresses</h3>
              <div className="address-row">
                <div className="address-group">
                  <label htmlFor="mailingStreet" className="form-label">ADDRESS (MAILING):</label>
                  <input
                    type="text"
                    id="mailingStreet"
                    name="mailingStreet"
                    className="form-input"
                    placeholder="Street Address"
                    value={formData.mailingStreet}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="mailingCityStateZip"
                    name="mailingCityStateZip"
                    className="form-input"
                    placeholder="City, State, Zip Code"
                    value={formData.mailingCityStateZip}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="address-group">
                  <label htmlFor="shippingStreet" className="form-label">ADDRESS (SHIPPING):</label>
                  <input
                    type="text"
                    id="shippingStreet"
                    name="shippingStreet"
                    className="form-input"
                    placeholder="Street Address"
                    value={formData.shippingStreet}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="shippingCityStateZip"
                    name="shippingCityStateZip"
                    className="form-input"
                    placeholder="City, State, Zip Code"
                    value={formData.shippingCityStateZip}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="form-section">
              <h3 className="section-title">Business Details</h3>
              <div className="form-group">
                <label className="form-label">DO YOU OPERATE UNDER OTHER NAMES?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="operateUnderOtherNames"
                      value="yes"
                      checked={formData.operateUnderOtherNames === 'yes'}
                      onChange={handleInputChange}
                    />
                    YES
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="operateUnderOtherNames"
                      value="no"
                      checked={formData.operateUnderOtherNames === 'no'}
                      onChange={handleInputChange}
                    />
                    NO
                  </label>
                </div>
                {formData.operateUnderOtherNames === 'yes' && (
                  <input
                    type="text"
                    name="otherNames"
                    className="form-input"
                    placeholder="Please specify"
                    value={formData.otherNames}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="ownerName" className="form-label">NAME OF OWNER / PRINCIPLE(S):</label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  className="form-input"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group half-width">
                <label htmlFor="taxId" className="form-label">TAX IDENTIFICATION NO:</label>
                <input
                  type="text"
                  id="taxId"
                  name="taxId"
                  className="form-input"
                  value={formData.taxId}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Compliance Section */}
            <div className="form-section">
              <h3 className="section-title">Compliance Information</h3>
              <div className="form-group">
                <label htmlFor="buyingGroup" className="form-label">PLEASE STATE IF YOU ARE A MEMBER OF A BUYING GROUP:</label>
                <input
                  type="text"
                  id="buyingGroup"
                  name="buyingGroup"
                  className="form-input"
                  value={formData.buyingGroup}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">IS THIS COMPANY COMPLIANT WITH AML?</label>
                <div className="radio-group vertical">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="amlCompliance"
                      value="compliant"
                      checked={formData.amlCompliance === 'compliant'}
                      onChange={handleInputChange}
                    />
                    Yes, We are in compliance with the PATRIOT Act
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="amlCompliance"
                      value="not-compliant"
                      checked={formData.amlCompliance === 'not-compliant'}
                      onChange={handleInputChange}
                    />
                    No, We are not in compliance with the PATRIOT Act
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="amlCompliance"
                      value="exempt"
                      checked={formData.amlCompliance === 'exempt'}
                      onChange={handleInputChange}
                    />
                    Yes, We are exempt from the PATRIOT Act
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">CHECK ONE:</label>
                <div className="radio-group vertical">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="businessType"
                      value="individual"
                      checked={formData.businessType === 'individual'}
                      onChange={handleInputChange}
                    />
                    INDIVIDUAL (PROPRIETORSHIP)
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="businessType"
                      value="partnership"
                      checked={formData.businessType === 'partnership'}
                      onChange={handleInputChange}
                    />
                    PARTNERSHIP
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="businessType"
                      value="corporation"
                      checked={formData.businessType === 'corporation'}
                      onChange={handleInputChange}
                    />
                    CORPORATION
                  </label>
                </div>
              </div>
            </div>

            {/* Trade References */}
            <div className="form-section">
              <h3 className="section-title">PLEASE GIVE NAMES & ADDRESSES OF LAST FOUR ACTIVE JEWELRY TRADE REFERENCES</h3>
              {formData.references.map((ref, index) => (
                <div key={index} className="reference-group">
                  <h4 className="reference-number">Reference {index + 1}</h4>
                  <div className="form-row">
                    <div className="form-group half-width">
                      <label htmlFor={`reference-${index}-name`} className="form-label">NAME</label>
                      <input
                        type="text"
                        id={`reference-${index}-name`}
                        name={`reference-${index}-name`}
                        className="form-input"
                        value={ref.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group half-width">
                      <label htmlFor={`reference-${index}-phone`} className="form-label">PHONE</label>
                      <input
                        type="tel"
                        id={`reference-${index}-phone`}
                        name={`reference-${index}-phone`}
                        className="form-input"
                        value={ref.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group half-width">
                    <label htmlFor={`reference-${index}-accountNo`} className="form-label">ACCOUNT NO:</label>
                    <input
                      type="text"
                      id={`reference-${index}-accountNo`}
                      name={`reference-${index}-accountNo`}
                      className="form-input"
                      value={ref.accountNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`reference-${index}-address`} className="form-label">ADDRESS:</label>
                    <input
                      type="text"
                      id={`reference-${index}-address`}
                      name={`reference-${index}-address`}
                      className="form-input"
                      value={ref.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`reference-${index}-cityStateZip`} className="form-label">CITY, STATE AND ZIP CODE:</label>
                    <input
                      type="text"
                      id={`reference-${index}-cityStateZip`}
                      name={`reference-${index}-cityStateZip`}
                      className="form-input"
                      value={ref.cityStateZip}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Credit Card Authorization */}
            <div className="form-section">
              <h3 className="section-title">CREDIT CARD AUTHORIZATION</h3>
              <div className="form-group">
                <label className="form-label">CARD TYPE</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="cardType"
                      value="mastercard"
                      checked={formData.cardType === 'mastercard'}
                      onChange={handleInputChange}
                    />
                    MasterCard
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="cardType"
                      value="visa"
                      checked={formData.cardType === 'visa'}
                      onChange={handleInputChange}
                    />
                    VISA
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="cardType"
                      value="discover"
                      checked={formData.cardType === 'discover'}
                      onChange={handleInputChange}
                    />
                    Discover
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="cardType"
                      value="amex"
                      checked={formData.cardType === 'amex'}
                      onChange={handleInputChange}
                    />
                    AMEX
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="cardType"
                      value="other"
                      checked={formData.cardType === 'other'}
                      onChange={handleInputChange}
                    />
                    Other
                  </label>
                </div>
                {formData.cardType === 'other' && (
                  <input
                    type="text"
                    name="otherCardType"
                    className="form-input"
                    placeholder="Please specify"
                    value={formData.otherCardType}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="cardholderName" className="form-label">NAME & SURNAME</label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  className="form-input"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber" className="form-label">CARD NUMBER:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="form-input"
                  maxLength="19"
                  placeholder="0000 0000 0000 0000"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group third-width">
                  <label htmlFor="expirationDate" className="form-label">EXPIRATION DATE (MM/YY)</label>
                  <input
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    className="form-input"
                    maxLength="5"
                    placeholder="MM/YY"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group third-width">
                  <label htmlFor="cvv" className="form-label">CVV CODE:</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    className="form-input"
                    maxLength="4"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="form-section">
              <h3 className="section-title">Signature</h3>
              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="signedBy" className="form-label">SIGNED BY</label>
                  <input
                    type="text"
                    id="signedBy"
                    name="signedBy"
                    className="form-input"
                    value={formData.signedBy}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group half-width">
                  <label htmlFor="date" className="form-label">DATE:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group half-width">
                <label htmlFor="title" className="form-label">TITLE:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-input"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Captcha */}
            <div className="form-group captcha-group">
              <label className="form-label">
                {captcha.num1} + {captcha.num2} =
              </label>
              <input
                type="number"
                name="captchaAnswer"
                className="form-input captcha-input"
                value={formData.captchaAnswer}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">SEND IT</button>
          </form>

          {/* Legal Disclaimer */}
          <div className="legal-disclaimer">
            <p>
              By submitting this application, you agree to the terms and conditions set forth by Denova Casting. 
              You understand that credit approval is subject to verification and approval by our credit department. 
              Terms of sale are net 30 days, and accounts that become delinquent will be subject to delinquency charges 
              and collection costs as allowed by law. This agreement shall be governed by the laws of the State of New York.
            </p>
            <p className="bold-text">
              This application must be signed by an owner or principal of the business.
            </p>
            <p className="italic-text">
              By typing your name in the signature field and submitting this form, you acknowledge that this electronic 
              signature has the same legal effect as a handwritten signature and you agree to be bound by all terms and 
              conditions stated herein.
            </p>
          </div>

          {/* Divider */}
          <div className="section-divider"></div>

          {/* Printable Forms Section */}
          <div className="printable-forms-section">
            <h3 className="section-title">PRINTABLE FORMS</h3>
            <p className="intro-text">
              If you prefer to submit your application via mail or email, please follow these steps:
            </p>
            <ol className="instructions-list">
              <li>Click on the form link below to open the PDF</li>
              <li>Fill out all required fields in the form</li>
              <li>Download the completed form to your computer</li>
              <li>Sign the form by hand</li>
              <li>Scan the signed form and email it to{' '}
                <a href="mailto:admdenova1@gmail.com" className="email-link">admdenova1@gmail.com</a>
              </li>
            </ol>
            <ul className="download-links">
              <li><a href="#" className="pdf-link">01-Patriot-Act-Form-Fillable</a></li>
              <li><a href="#" className="pdf-link">02-Tax-Exemption-Fillable</a></li>
              <li><a href="#" className="pdf-link">03-Application-For-Credit-Fillable</a></li>
              <li><a href="#" className="pdf-link">04-Credit Card Authorization Form</a></li>
            </ul>
            <p className="closing-message">
              We look forward to working together. Have a great day.
            </p>
          </div>

          {/* Membership Badges */}
          <div className="membership-badges-section">
            <h3 className="section-title">WE ARE MEMBER OF</h3>
            <div className="badges-grid">
              <div className="badge-item">
                <div className="badge-placeholder">FAIRMINED</div>
              </div>
              <div className="badge-item">
                <div className="badge-placeholder">RAPNET</div>
              </div>
              <div className="badge-item">
                <div className="badge-placeholder">JBT</div>
              </div>
              <div className="badge-item">
                <div className="badge-placeholder">MJSA</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Logo Column */}
            <div className="footer-column">
              <div className="footer-logo">Denova Casting</div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h4 className="footer-title">QUICK LINKS</h4>
              <ul className="footer-links">
                <li><a href="#blog">BLOG</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="#collection">COLLECTION</a></li>
                <li><a href="/catalog">CATALOG</a></li>
                <li><a href="#new-arrivals">NEW ARRIVALS</a></li>
                <li><a href="#companies">COMPANIES</a></li>
                <li><a href="/application-forms">APPLICATION FORMS</a></li>
              </ul>
            </div>

            {/* Contact Us Column */}
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
                  <p><a href="tel:1-212-869-9525">1-212-869-9525</a></p>
                </div>
                <div className="contact-item">
                  <strong>Fax</strong>
                  <p>1-212-869-9527</p>
                </div>
                <div className="contact-item">
                  <strong>Email</strong>
                  <p><a href="mailto:admdenova1@gmail.com">admdenova1@gmail.com</a></p>
                </div>
              </div>
            </div>

            {/* Working Hours Column */}
            <div className="footer-column">
              <h4 className="footer-title">WORKING HOURS</h4>
              <p className="working-hours">Monday – Friday 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="social-media">
            <a href="#facebook" className="social-link" aria-label="Facebook">
              <span>Facebook</span>
            </a>
            <a href="#linkedin" className="social-link" aria-label="LinkedIn">
              <span>LinkedIn</span>
            </a>
            <a href="#instagram" className="social-link" aria-label="Instagram">
              <span>Instagram</span>
            </a>
          </div>

          {/* Legal Links and Copyright */}
          <div className="footer-bottom">
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator"> </span>
              <a href="#terms">Terms & Conditions</a>
            </div>
            <div className="copyright">
              2025 © Denova Casting – All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ApplicationFormsPage;




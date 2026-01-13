import React from 'react';
import '../styles/services.css';
import Header from '../components/services/Header';
import Hero from '../components/services/Hero';
import ServicesGrid from '../components/services/ServicesGrid';
import DetailedContent from '../components/services/DetailedContent';
import CTASection from '../components/services/CTASection';
import MembershipBadges from '../components/services/MembershipBadges';
import Footer from '../components/services/Footer';

function ServicesPage() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServicesGrid />
      <DetailedContent />
      <CTASection />
      <MembershipBadges />
      <Footer />
    </div>
  );
}

export default ServicesPage;




import React from 'react';
import '../styles/catalog.css';
import Header from '../components/catalog/Header';
import Hero from '../components/catalog/Hero';
import CatalogGrid from '../components/catalog/CatalogGrid';
import CTAButtons from '../components/catalog/CTAButtons';
import ContentSections from '../components/catalog/ContentSections';
import MembershipBadges from '../components/catalog/MembershipBadges';
import Footer from '../components/catalog/Footer';

function CatalogPage() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CatalogGrid />
      <CTAButtons />
      <ContentSections />
      <MembershipBadges />
      <Footer />
    </div>
  );
}

export default CatalogPage;




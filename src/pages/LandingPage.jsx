import React from 'react';
import '../styles/landing.css';
import Header from '../components/landing/Header';
import TopBanner from '../components/landing/TopBanner';
import Hero from '../components/landing/Hero';
import ServicesPreview from '../components/landing/ServicesPreview';
import AllInOneSection from '../components/landing/AllInOneSection';
import DiamondSupplySection from '../components/landing/DiamondSupplySection';
import CustomJewelrySection from '../components/landing/CustomJewelrySection';
import JewelryCollections from '../components/landing/JewelryCollections';
import ProductsSection from '../components/landing/ProductsSection';
import ManufacturingProducts from '../components/landing/ManufacturingProducts';
import FairminedSection from '../components/landing/FairminedSection';
import WhyChooseUs from '../components/landing/WhyChooseUs';
import ReviewsSection from '../components/landing/ReviewsSection';
import MembershipBadges from '../components/landing/MembershipBadges';
import Footer from '../components/landing/Footer';

function LandingPage() {
  return (
    <div className="app">
      <Header />
      <TopBanner />
      <Hero />
      <ServicesPreview />
      <AllInOneSection />
      <DiamondSupplySection />
      <CustomJewelrySection />
      <JewelryCollections />
      <ProductsSection />
      <ManufacturingProducts />
      <FairminedSection />
      <WhyChooseUs />
      <ReviewsSection />
      <MembershipBadges />
      <Footer />
    </div>
  );
}

export default LandingPage;




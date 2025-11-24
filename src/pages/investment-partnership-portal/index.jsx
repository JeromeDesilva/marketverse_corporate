import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PartnershipModels from './components/PartnershipModels';
import ROICalculator from './components/ROICalculator';
import MarketOpportunity from './components/MarketOpportunity';
import SuccessStories from './components/SuccessStories';
import InvestmentProcess from './components/InvestmentProcess';
import ComplianceSection from './components/ComplianceSection';
import CTASection from './components/CTASection';

const InvestmentPartnershipPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Investment Partnership Portal - Marketverse | Strategic Investment Opportunities</title>
        <meta 
          name="description" 
          content="Partner with India's premier marketing powerhouse. Explore equity partnerships, revenue share models, and market entry opportunities with proven 400-600% ROI. Join 50+ successful investors." 
        />
        <meta name="keywords" content="marketing investment, India market entry, equity partnership, revenue share, ROI calculator, strategic investment, international brands India" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="main-content">
          <HeroSection />
          <PartnershipModels />
          <ROICalculator />
          <MarketOpportunity />
          <SuccessStories />
          <InvestmentProcess />
          <ComplianceSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default InvestmentPartnershipPortal;
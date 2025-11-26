import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JobListings from './components/JobListings';
import CultureShowcase from './components/CultureShowcase';
import BenefitsPerks from './components/BenefitsPerks';
import CareerGrowth from './components/CareerGrowth';
import EmployeeSpotlight from './components/EmployeeSpotlight';
import ApplicationProcess from './components/ApplicationProcess';
import CTASection from './components/CTASection';
import Footer from '../../pages/homepage/components/Footer';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection />
        <JobListings />
        <CultureShowcase />
        <BenefitsPerks />
        <CareerGrowth />
        <EmployeeSpotlight />
        <ApplicationProcess />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
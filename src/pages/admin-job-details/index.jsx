import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import RoleOverview from './components/RoleOverview';
import ResponsibilitiesSection from './components/ResponsibilitiesSection';
import RequirementsSection from './components/RequirementsSection';
import CompensationBenefits from './components/CompensationBenefits';
import ApplicationProcess from './components/ApplicationProcess';
import CareerProgression from './components/CareerProgression';
import TeamIntegration from './components/TeamIntegration';
import WorkEnvironment from './components/WorkEnvironment';
import RelatedPositions from './components/RelatedPositions';
import CTASection from './components/CTASection';
import Footer from '../../pages/homepage/components/Footer';

const AdminJobDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection />
        <RoleOverview />
        <ResponsibilitiesSection />
        <RequirementsSection />
        <CompensationBenefits />
        <ApplicationProcess />
        <CareerProgression />
        <TeamIntegration />
        <WorkEnvironment />
        <RelatedPositions />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AdminJobDetails;
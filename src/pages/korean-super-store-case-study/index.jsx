import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ClientOverview from './components/ClientOverview';
import StrategySection from './components/StrategySection';
import ResultsMetrics from './components/ResultsMetrics';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import TimelineVisualization from './components/TimelineVisualization';
import TestimonialSection from './components/TestimonialSection';
import ServicesDelivered from './components/ServicesDelivered';
import KeyLearnings from './components/KeyLearnings';
import RelatedCaseStudies from './components/RelatedCaseStudies';
import CTASection from './components/CTASection';
import DownloadSection from './components/DownloadSection';
import SocialShare from './components/SocialShare';

const KoreanSuperStoreCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Korean Super Store Case Study - 300% Revenue Growth | Marketverse";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection />
        <ClientOverview />
        <StrategySection />
        <ResultsMetrics />
        <BeforeAfterComparison />
        <TimelineVisualization />
        <TestimonialSection />
        <ServicesDelivered />
        <KeyLearnings />
        <DownloadSection />
        <RelatedCaseStudies />
        <CTASection />
        <SocialShare />
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} Marketverse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KoreanSuperStoreCaseStudy;
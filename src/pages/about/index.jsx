import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import VisionMissionSection from './components/VisionMissionSection';
import TeamSection from './components/TeamSection';
import RecognitionSection from './components/RecognitionSection';
import CultureSection from './components/CultureSection';
import CTASection from './components/CTASection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />
      <main className="main-content">
        <HeroSection />
        <StorySection />
        <VisionMissionSection />
        <TeamSection />
        <RecognitionSection />
        <CultureSection />
        <CTASection />
      </main>
      <footer className="bg-[var(--color-foreground)] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-white/70">
            &copy; {new Date()?.getFullYear()} Marketverse. All rights reserved. | Making growth inevitable through marketing excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
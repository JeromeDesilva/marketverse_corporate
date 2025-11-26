import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import BookingHero from './components/BookingHero';
import CalendarSection from './components/CalendarSection';
import ConsultationTypes from './components/ConsultationTypes';
import BookingSummary from './components/BookingSummary';

const BookConsultation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <BookingHero />
        
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultationTypes />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CalendarSection />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookingSummary />
          </div>
        </section>
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; {new Date()?.getFullYear()} Marketverse. All rights reserved.</p>
            <p className="mt-2">Transforming brands through strategic marketing excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookConsultation;
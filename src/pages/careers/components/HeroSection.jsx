import React from 'react';
import { Briefcase } from 'lucide-react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Build Your Career at
            <span className="text-primary block mt-2">Marketverse</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our dynamic team of marketing professionals, strategists, and innovators. 
            Shape the future of digital marketing while advancing your career.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Search"
              iconPosition="left"
              onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Open Positions
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Users"
              iconPosition="left"
              onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Culture
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: '150+', label: 'Team Members' },
              { number: '20+', label: 'Open Positions' },
              { number: '95%', label: 'Employee Satisfaction' },
              { number: '4.8/5', label: 'Glassdoor Rating' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat?.number}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { MapPin, Clock, Briefcase, Users, TrendingUp } from 'lucide-react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Strategy Department</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Marketing Strategist
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Drive data-driven campaign development and brand positioning excellence through strategic planning, market research analysis, and innovative marketing solutions within Marketverse's dynamic ecosystem
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">Remote / Chennai</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Type</p>
                <p className="text-sm font-medium text-foreground">Full-time</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Team Size</p>
                <p className="text-sm font-medium text-foreground">8-12 Members</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="text-sm font-medium text-foreground">5+ Years</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const applicationSection = document.getElementById('application-process');
                applicationSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/careers'}
            >
              View All Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import Icon from '../../../components/AppIcon';

const BookingHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Calendar" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Schedule Your Success</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Book Your <span className="text-primary">Free Consultation</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with our marketing experts to discuss your goals, challenges, and opportunities. 
            Choose your preferred meeting platform and schedule a time that works best for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground text-center">
                Pick a time that fits your calendar with real-time availability
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Video" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Your Choice of Platform</h3>
              <p className="text-sm text-muted-foreground text-center">
                Meet via Google Meet or Zoom - whatever you prefer
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No Commitment Required</h3>
              <p className="text-sm text-muted-foreground text-center">
                Free consultation with no obligation - just valuable insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingHero;
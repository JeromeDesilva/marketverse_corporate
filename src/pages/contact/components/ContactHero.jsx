import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-innovation py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon name="MessageSquare" size={20} color="#E8B931" />
            <span className="text-sm font-medium text-white">Let's Build Something Great Together</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Start Your Growth Journey
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Whether you're launching a new brand, entering the Indian market, or scaling your business, our team of marketing experts is ready to transform your vision into measurable results.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} color="#E8B931" />
              <span className="text-sm">24-Hour Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} color="#E8B931" />
              <span className="text-sm">100+ Man-Years Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} color="#E8B931" />
              <span className="text-sm">Proven Track Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
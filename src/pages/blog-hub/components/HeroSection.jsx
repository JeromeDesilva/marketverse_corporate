import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-innovation/10 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Icon name="BookOpen" size={18} />
            <span className="text-sm font-semibold">Insights & Industry Knowledge</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Marketverse <span className="text-primary">Blog Hub</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Your source for cutting-edge marketing strategies, market intelligence, and industry insights. 
            Stay ahead with expert analysis and proven methodologies from India's premier marketing powerhouse.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="TrendingUp" size={20} className="text-primary" />
              </div>
              <span className="text-muted-foreground">Weekly Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-innovation/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={20} className="text-innovation" />
              </div>
              <span className="text-muted-foreground">Expert Authors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="Award" size={20} className="text-success" />
              </div>
              <span className="text-muted-foreground">Case Studies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
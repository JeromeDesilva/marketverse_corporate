import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-innovation overflow-hidden">
      <div className="geometric-pattern absolute inset-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Icon name="TrendingUp" size={20} color="#E8B931" />
              <span className="text-sm font-medium text-white">Strategic Investment Opportunities</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Partner with India's Premier Marketing Powerhouse
            </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Join forces with Marketverse to unlock exponential growth in India's ₹2.5 trillion consumer market. Our proven track record and 100+ man-years of expertise deliver measurable ROI for international brands and strategic investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Schedule Strategy Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Download Market Report
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-secondary">₹500Cr+</div>
                <div className="text-sm text-white/80 mt-1">Market Value Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">85%</div>
                <div className="text-sm text-white/80 mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-white/80 mt-1">Active Partnerships</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Investment Calculator</h3>
                <Icon name="Calculator" size={24} color="var(--color-primary)" />
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Investment Amount</div>
                  <div className="text-2xl font-bold text-primary">₹50,00,000</div>
                </div>
                
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="text-sm text-success mb-1">Projected 3-Year ROI</div>
                  <div className="text-2xl font-bold text-success">₹2,25,00,000</div>
                  <div className="text-xs text-success/80 mt-1">450% Return</div>
                </div>
              </div>

              <Button variant="default" size="default" fullWidth iconName="ArrowRight" iconPosition="right">
                Calculate Your ROI
              </Button>
            </div>

            <div className="absolute -top-6 -right-6 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-innovation/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
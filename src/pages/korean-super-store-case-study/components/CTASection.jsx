import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-innovation relative overflow-hidden">
      <div className="geometric-pattern absolute inset-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Let Marketverse create your success story. Whether you're entering the Indian market or scaling your existing business, we have the expertise to make growth inevitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
              <Icon name="Target" size={24} color="#E8B931" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Strategic Planning</h3>
            <p className="text-white/80 leading-relaxed">
              Comprehensive market research and brand positioning strategies tailored to your unique business goals.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
              <Icon name="Rocket" size={24} color="#E8B931" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Execution Excellence</h3>
            <p className="text-white/80 leading-relaxed">
              End-to-end implementation from brand identity to digital platforms and marketing campaigns.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
              <Icon name="TrendingUp" size={24} color="#E8B931" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Measurable Results</h3>
            <p className="text-white/80 leading-relaxed">
              Data-driven optimization and continuous improvement to maximize ROI and sustainable growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Schedule Consultation
            </Button>
          </Link>

          <Link to="/investment-partnership-portal">
            <Button
              variant="outline"
              size="lg"
              iconName="Handshake"
              iconPosition="left"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Partnership
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} color="#E8B931" />
            <span className="font-medium">100+ Man-Years Expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} color="#E8B931" />
            <span className="font-medium">5+ Years Track Record</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} color="#E8B931" />
            <span className="font-medium">Proven ROI Models</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
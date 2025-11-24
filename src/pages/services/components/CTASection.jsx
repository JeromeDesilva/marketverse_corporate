import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const benefits = [
    {
      icon: "Users",
      title: "Expert Team",
      description: "100+ man-years of combined marketing expertise"
    },
    {
      icon: "Target",
      title: "Proven Results",
      description: "Measurable ROI across 50+ successful projects"
    },
    {
      icon: "Globe",
      title: "Cultural Insight",
      description: "Deep understanding of Indian and international markets"
    },
    {
      icon: "Zap",
      title: "Fast Execution",
      description: "Agile processes that deliver results quickly"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1B365D] via-[#2E4A7C] to-[#7C3AED] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B931] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join 100+ successful brands that have accelerated their growth with Marketverse. Let's discuss how we can make your marketing goals inevitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits?.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={32} color="#FFFFFF" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit?.title}</h3>
              <p className="text-sm text-white/80">{benefit?.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="secondary" size="lg" iconName="Calendar" iconPosition="right">
              Book Free Consultation
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1B365D]" iconName="FileText" iconPosition="right">
              View Success Stories
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} color="#2E8B57" />
            <span>No long-term contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} color="#2E8B57" />
            <span>Flexible engagement models</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} color="#2E8B57" />
            <span>Transparent pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
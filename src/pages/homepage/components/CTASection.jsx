import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const ctaOptions = [
    {
      icon: "Calendar",
      title: "Book Free Consultation",
      description: "Get expert marketing advice tailored to your business goals",
      action: () => navigate('/contact'),
      buttonText: "Schedule Call",
      color: "from-secondary to-warning"
    },
    {
      icon: "Briefcase",
      title: "Explore Partnership",
      description: "Discover investment opportunities in marketing excellence",
      action: () => navigate('/investment-partnership-portal'),
      buttonText: "View Opportunities",
      color: "from-primary to-innovation"
    },
    {
      icon: "FileText",
      title: "View Case Studies",
      description: "See how we\'ve transformed brands into market leaders",
      action: () => navigate('/case-studies'),
      buttonText: "Read Stories",
      color: "bg-gradient-to-br from-trustlight to-successdark"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-innovation relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,185,49,0.1),transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Join 50+ ambitious brands that chose Marketverse as their growth partner. Let's make your success inevitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions?.map((option, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all card-hover"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${option?.color} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon name={option?.icon} size={32} color="#FFFFFF" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{option?.title}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">{option?.description}</p>
              <Button
                variant="default"
                size="default"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={option?.action}
                fullWidth
                className="bg-white text-primary hover:bg-white/90"
              >
                {option?.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Start Your Growth Journey Today
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                No long-term contracts. No hidden fees. Just transparent, results-driven marketing that transforms your brand into a market leader.
              </p>
              <div className="space-y-3">
                {[
                  "Free initial consultation",
                  "Custom strategy proposal",
                  "Transparent pricing",
                  "Dedicated account manager"
                ]?.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} color="#E8B931" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => navigate('/contact')}
                fullWidth
                className="bg-accent text-white hover:bg-accent/90"
              >
                Call Us Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => navigate('/contact')}
                fullWidth
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Send Inquiry
              </Button>
              <div className="text-center text-white/70 text-sm pt-4">
                <p>Available Mon-Sat, 9:00 AM - 7:00 PM IST</p>
                <p className="mt-1">Response within 24 hours guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
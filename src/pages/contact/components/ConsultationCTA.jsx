import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationCTA = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: 'Target',
      title: 'Strategic Planning',
      description: 'Comprehensive market analysis and growth roadmap'
    },
    {
      icon: 'TrendingUp',
      title: 'Growth Acceleration',
      description: 'Proven strategies to scale your business faster'
    },
    {
      icon: 'Users',
      title: 'Expert Guidance',
      description: '100+ man-years of marketing expertise at your service'
    },
    {
      icon: 'Award',
      title: 'Measurable Results',
      description: 'Clear KPIs and ROI tracking from day one'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-innovation relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our marketing experts. No obligations, just valuable insights for your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={28} color="var(--color-secondary-foreground)" />
              </div>
              <h3 className="font-bold text-white mb-2">{benefit?.title}</h3>
              <p className="text-sm text-white/80">{benefit?.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Book Free Consultation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+919876543210'}
            className="bg-white/10 text-white border-white/30 hover:bg-white/20"
          >
            Call Us Now
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            Or explore our{' '}
            <button
              onClick={() => navigate('/services')}
              className="text-secondary font-semibold hover:underline"
            >
              services
            </button>
            {' '}and{' '}
            <button
              onClick={() => navigate('/case-studies')}
              className="text-secondary font-semibold hover:underline"
            >
              case studies
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: "Target",
      title: "Brand Strategy & Positioning",
      description: "Transform your brand identity into a market-dominating force with strategic positioning that resonates with your target audience.",
      features: ["Market Analysis", "Brand Architecture", "Positioning Strategy"],
      color: "from-primary to-innovation"
    },
    {
      id: 2,
      icon: "Handshake",
      title: "Brand Promotion & Partnership",
      description: "Build powerful strategic alliances and promotional campaigns that amplify brand reach through collaborative partnerships and co-marketing initiatives.",
      features: ["Partnership Development", "Co-Marketing Campaigns", "Brand Collaboration"],
      color: "from-accent to-secondary"
    },
    {
      id: 3,
      icon: "Globe",
      title: "Market Entry Solutions",
      description: "Navigate complex market landscapes with expert guidance for international brands entering Indian markets and vice versa.",
      features: ["Market Research", "Entry Strategy", "Local Partnerships"],
      color: "from-trust to-success"
    },
    {
      id: 4,
      icon: "Package",
      title: "Product Launch Excellence",
      description: "End-to-end product launch strategies that create market buzz and drive immediate adoption through integrated campaigns.",
      features: ["Launch Strategy", "PR & Media", "Influencer Marketing"],
      color: "from-partnership to-accent"
    },
    {
      id: 5,
      icon: "ShoppingCart",
      title: "E-commerce Growth",
      description: "Scale your online presence with comprehensive e-commerce strategies covering marketplace optimization to direct-to-consumer excellence.",
      features: ["Marketplace Strategy", "Conversion Optimization", "Customer Retention"],
      color: "from-secondary to-warning"
    },
    {
      id: 6,
      icon: "TrendingUp",
      title: "Growth Consulting",
      description: "Strategic business consulting that identifies growth opportunities and implements scalable systems for sustainable expansion.",
      features: ["Growth Strategy", "Business Development", "Scalability Planning"],
      color: "from-innovation to-primary"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-4">
            <Icon name="Sparkles" size={20} color="var(--color-primary)" />
            <span className="text-primary text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Marketing Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide end-to-end marketing services that transform ambitious brands into market leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group bg-card rounded-2xl p-6 sm:p-7 border border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service?.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon name={service?.icon} size={28} color="#FFFFFF" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                {service?.title}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
                {service?.description}
              </p>

              <div className="space-y-2 mb-5">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('/services')}
                className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => navigate('/services')}
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
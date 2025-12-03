import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const navigate = useNavigate();

  // map keys -> full Tailwind classes (Tailwind sees these at build time)
  const gradientMap = {
    'brand': 'bg-gradient-to-br from-primary to-innovation',
    'promotion': 'bg-gradient-to-br from-secondary to-warning',
    'market-entry': 'bg-gradient-to-br from-trustlight to-successdark',
    'product-launch': 'bg-gradient-to-br from-partnership to-accent',
    'ecommerce': 'bg-gradient-to-br from-secondary to-warning',
    'growth': 'bg-gradient-to-br from-innovation to-primary'
  };

  const services = [
    {
      id: 1,
      icon: "Target",
      title: "Brand Strategy & Positioning",
      description: "Transform your brand identity into a market-dominating force...",
      features: ["Market Analysis", "Brand Architecture", "Positioning Strategy"],
      color: "brand" // key, not the raw classes
    },
    {
      id: 2,
      icon: "Handshake",
      title: "Brand Promotion & Partnership",
      description: "Build powerful strategic alliances and promotional campaigns...",
      features: ["Partnership Development", "Co-Marketing Campaigns", "Brand Collaboration"],
      color: "promotion"
    },
    {
      id: 3,
      icon: "Globe",
      title: "Market Entry Solutions",
      description: "Navigate complex market landscapes with expert guidance...",
      features: ["Market Research", "Entry Strategy", "Local Partnerships"],
      color: "market-entry"
    },
    {
      id: 4,
      icon: "Package",
      title: "Product Launch Excellence",
      description: "End-to-end product launch strategies that create market buzz...",
      features: ["Launch Strategy", "PR & Media", "Influencer Marketing"],
      color: "product-launch"
    },
    {
      id: 5,
      icon: "ShoppingCart",
      title: "E-commerce Growth",
      description: "Scale your online presence with comprehensive e-commerce strategies...",
      features: ["Marketplace Strategy", "Conversion Optimization", "Customer Retention"],
      color: "ecommerce"
    },
    {
      id: 6,
      icon: "TrendingUp",
      title: "Growth Consulting",
      description: "Strategic business consulting that identifies growth opportunities...",
      features: ["Growth Strategy", "Business Development", "Scalability Planning"],
      color: "growth"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Icon name="Sparkles" size={20} color="var(--color-primary)" />
            <span className="text-primary text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Marketing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end marketing services that transform ambitious brands into market leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div
                // use the map here — classes are static strings so Tailwind includes them
                className={`${gradientMap[service.color] || 'bg-muted'} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon name={service?.icon} size={32} color="#FFFFFF" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service?.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service?.description}
              </p>

              <div className="space-y-2 mb-6">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
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

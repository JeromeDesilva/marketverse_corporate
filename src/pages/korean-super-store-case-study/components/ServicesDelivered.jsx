import React from 'react';
import Icon from '../../../components/AppIcon';

const ServicesDelivered = () => {
  const services = [
    {
      title: "Brand Strategy & Positioning",
      icon: "Target",
      color: "primary",
      deliverables: [
        "Comprehensive market research and competitive analysis",
        "Brand positioning framework: 'Authentic Korea, Accessible India'",
        "Customer persona development and journey mapping",
        "Value proposition and messaging architecture"
      ]
    },
    {
      title: "Visual Identity & Design",
      icon: "Palette",
      color: "secondary",
      deliverables: [
        "Complete brand identity system (logo, colors, typography)",
        "Bilingual design system (English/Korean)",
        "Store interior design and visual merchandising guidelines",
        "Packaging design for private label products"
      ]
    },
    {
      title: "Digital Platform Development",
      icon: "Globe",
      color: "innovation",
      deliverables: [
        "E-commerce website with integrated inventory management",
        "Mobile app for iOS and Android platforms",
        "Customer loyalty program with gamification",
        "CRM system for customer relationship management"
      ]
    },
    {
      title: "Marketing Campaign Execution",
      icon: "Megaphone",
      color: "accent",
      deliverables: [
        "Multi-channel launch campaign strategy",
        "Social media content creation and management",
        "Influencer partnership program",
        "Performance marketing across Google and Meta platforms"
      ]
    },
    {
      title: "Content Creation & Storytelling",
      icon: "FileText",
      color: "success",
      deliverables: [
        "Korean culture and lifestyle content series",
        "Product photography and videography",
        "Blog articles and SEO-optimized content",
        "Email marketing campaigns and newsletters"
      ]
    },
    {
      title: "Import & Supply Chain Management",
      icon: "Package",
      color: "primary",
      deliverables: [
        "Import licensing and regulatory compliance",
        "Supplier relationship management in Korea",
        "Inventory optimization and demand forecasting",
        "Quality control and product authentication systems"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Services Delivered
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive suite of marketing and business development services that transformed Korean Super Store from concept to market leader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className={`w-14 h-14 rounded-xl bg-${service?.color}/10 flex items-center justify-center mb-4`}>
                <Icon name={service?.icon} size={28} color={`var(--color-${service?.color})`} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">{service?.title}</h3>

              <ul className="space-y-3">
                {service?.deliverables?.map((deliverable, delIndex) => (
                  <li key={delIndex} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={18} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-accent/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Sparkles" size={24} color="var(--color-accent)" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">End-to-End Partnership</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Marketverse served as Korean Super Store's complete marketing and business development partner, handling everything from brand strategy to operational execution. This comprehensive approach ensured consistency across all touchpoints and enabled rapid scaling without compromising quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">50+ Deliverables Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">100% On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Ongoing Support & Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDelivered;
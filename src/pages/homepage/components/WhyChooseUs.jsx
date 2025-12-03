import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseUs = () => {

   // map keys -> full Tailwind classes
  const gradientMap = {
    'excellence': 'bg-gradient-to-br from-primary to-innovation',
    'results': 'bg-gradient-to-br from-secondary to-warning',
    'market-intel': 'bg-gradient-to-br from-trustlight to-successdark',
    'solutions': 'bg-gradient-to-br from-partnership to-accent',
    'partnership': 'bg-gradient-to-br from-secondary to-warning',
    'track-record': 'bg-gradient-to-br from-innovation to-primary',
  };

  const reasons = [
    {
      icon: "Award",
      title: "Data-Driven Excellence",
      description: "Advanced analytics and market intelligence combined with creative expertise to deliver campaigns designed to meet and exceed industry standards.",
      color: "excellence"
    },
    {
      icon: "Target",
      title: "Measurable Results Focus",
      description: "Every campaign is tracked, analyzed, and optimized for return on investment. We focus on delivering data-backed outcomes aligned with your business goals.",
      color: "results"
    },
    {
      icon: "Globe",
      title: "Cultural Market Intelligence",
      description: "Understanding of Indian market dynamics combined with global best practices to help achieve authentic local resonance.",
      color: "market-intel"
    },
    {
      icon: "Zap",
      title: "End-to-End Solutions",
      description: "From strategy to execution, we handle every aspect of your marketing journey with integrated, comprehensive services tailored to your needs.",
      color: "solutions"
    },
    {
      icon: "Users",
      title: "Collaborative Partnership",
      description: "You're not just a client—you're a partner. We work closely with your teams and provide dedicated support to help achieve your marketing objectives.",
      color: "partnership"
    },
    {
      icon: "TrendingUp",
      title: "Proven Experience",
      description: "50+ brands served with demonstrated growth results and high client satisfaction across diverse industries and marketing campaigns.",
      color: "track-record"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <Icon name="Star" size={20} color="var(--color-success)" />
            <span className="text-success text-sm font-semibold">Why Marketverse</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Marketing Partnership You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We help build strong brands and deliver strategic campaigns that drive business growth and enhance market presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all card-hover"
            >
             {/* <div className={`w-16 h-16 bg-gradient-to-br ${reason?.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon name={reason?.icon} size={32} color="#FFFFFF" />
              </div>*/}

              <div className={`w-16 h-16 ${gradientMap[reason.color] || 'bg-muted'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon name={reason.icon} size={32} color="#FFFFFF" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-innovation/5 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Great Products Deserve Strategic Marketing
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your product is exceptional. Your marketing should effectively showcase that value. Let's work together toward sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Flexible Contracts Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Clear, Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Dedicated Support</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Excellence</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Brands Served</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-success mb-2">2-5x</div>
                <div className="text-sm text-muted-foreground">Typical Growth Range</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
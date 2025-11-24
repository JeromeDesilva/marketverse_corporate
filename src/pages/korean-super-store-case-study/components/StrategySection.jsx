import React from 'react';
import Icon from '../../../components/AppIcon';

const StrategySection = () => {
  const strategies = [
    {
      phase: "Phase 1",
      title: "Market Research & Brand Positioning",
      duration: "3 Months",
      icon: "Search",
      color: "primary",
      activities: [
        "Conducted comprehensive consumer surveys across 5 major Indian cities",
        "Analyzed competitor landscape and identified market gaps",
        "Developed unique value proposition: 'Authentic Korea, Accessible India'",
        "Created detailed customer personas and journey maps"
      ]
    },
    {
      phase: "Phase 2",
      title: "Brand Identity & Digital Presence",
      duration: "2 Months",
      icon: "Palette",
      color: "secondary",
      activities: [
        "Designed bilingual brand identity system (English/Korean)",
        "Built e-commerce platform with cultural storytelling elements",
        "Created social media strategy targeting K-culture enthusiasts",
        "Developed content calendar featuring Korean lifestyle content"
      ]
    },
    {
      phase: "Phase 3",
      title: "Launch Campaign & Store Openings",
      duration: "4 Months",
      icon: "Rocket",
      color: "accent",
      activities: [
        "Executed multi-channel launch campaign with influencer partnerships",
        "Organized grand opening events with Korean cultural performances",
        "Implemented loyalty program with gamification elements",
        "Launched targeted digital advertising across Google, Meta, and Instagram"
      ]
    },
    {
      phase: "Phase 4",
      title: "Growth & Expansion Strategy",
      duration: "9 Months",
      icon: "TrendingUp",
      color: "success",
      activities: [
        "Expanded to 12 locations across Mumbai, Delhi, Bangalore, and Pune",
        "Introduced subscription boxes for Korean snacks and beauty products",
        "Developed B2B partnerships with restaurants and cafes",
        "Implemented data-driven inventory optimization system"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Strategic Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive 18-month roadmap that transformed market entry challenges into sustainable competitive advantages.
          </p>
        </div>

        <div className="space-y-8">
          {strategies?.map((strategy, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl bg-${strategy?.color}/10 flex items-center justify-center`}>
                    <Icon name={strategy?.icon} size={32} color={`var(--color-${strategy?.color})`} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                        {strategy?.phase}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                        {strategy?.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm font-medium">{strategy?.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {strategy?.activities?.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
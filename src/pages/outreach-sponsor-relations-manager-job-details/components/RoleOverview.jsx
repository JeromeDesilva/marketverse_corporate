import React from 'react';
import { Target, Handshake, TrendingUp, Globe } from 'lucide-react';

const RoleOverview = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Partnership Development',
      description: 'Build and nurture high-value sponsor relationships that drive mutual growth and brand visibility',
      alt: 'Target icon representing strategic partnership goals and objectives'
    },
    {
      icon: Handshake,
      title: 'Sponsor Relationship Management',
      description: 'Maintain long-term partnerships through consistent communication and value delivery',
      alt: 'Handshake icon representing collaboration and sponsor relationships'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused Outreach',
      description: 'Design and execute innovative outreach campaigns that expand brand presence and market reach',
      alt: 'Trending up graph icon representing growth and expansion metrics'
    },
    {
      icon: Globe,
      title: 'Brand Ambassador Network',
      description: 'Cultivate a network of brand ambassadors and influencers to amplify marketing initiatives',
      alt: 'Globe icon representing global brand ambassador network reach'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Role Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As the Outreach & Sponsor Relations Manager, you'll be the driving force behind Marketverse's partnership ecosystem, creating meaningful collaborations that elevate our brand and deliver exceptional value to our sponsors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {highlights?.map((highlight, index) => {
              const IconComponent = highlight?.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" aria-label={highlight?.alt} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {highlight?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight?.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">
              Position Impact
            </h3>
            <p className="text-muted-foreground">
              This role is critical to Marketverse's expansion strategy. You'll directly influence revenue growth through strategic partnerships, enhance brand credibility through sponsor associations, and create networking opportunities that open doors to new markets and client segments. Your success will be measured by partnership acquisition rates, sponsor satisfaction scores, and the overall contribution to company growth objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
import React from 'react';
import { FileText, Megaphone, Shield, Users } from 'lucide-react';

const RoleOverview = () => {
  const highlights = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Media Relations',
      description: 'Build and maintain relationships with journalists, influencers, and media outlets across print, digital, and broadcast channels'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Content Creation',
      description: 'Craft compelling press releases, media kits, and brand stories that resonate with target audiences and media professionals'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Crisis Management',
      description: 'Develop and execute crisis communication strategies to protect brand reputation during challenging situations'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Stakeholder Communication',
      description: 'Coordinate messaging across internal teams and external stakeholders to ensure consistent brand voice'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Role Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As a Public Relations Specialist at Marketverse, you'll be the voice of our brand, creating strategic communication campaigns that enhance our reputation and visibility in the marketing ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights?.map((highlight, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {highlight?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {highlight?.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight?.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Impact & Growth
            </h3>
            <p className="text-muted-foreground mb-6">
              Your work will directly influence how Marketverse is perceived across Indian and international markets. You'll have the opportunity to work on high-profile campaigns, manage media relationships with top-tier publications, and develop your expertise in strategic communications within a fast-growing marketing technology company.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Media Partnerships</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Press Releases Annually</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Positive Media Sentiment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
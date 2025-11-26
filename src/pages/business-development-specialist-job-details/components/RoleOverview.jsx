import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const RoleOverview = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Growth Focus',
      description: 'Lead generation and market expansion initiatives that drive measurable business growth'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client Relations',
      description: 'Build and maintain long-term strategic partnerships with key clients and stakeholders'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Impact',
      description: 'Directly contribute to revenue targets through strategic sales and partnership development'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Industry Leadership',
      description: 'Position yourself as a thought leader in competitive marketing and business development'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Position Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              This growth-focused position attracts ambitious professionals passionate about expanding Marketverse's market presence and building a thriving client portfolio
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">About the Role</h3>
            <p className="text-muted-foreground mb-6">
              As a Business Development Specialist, you'll be at the forefront of Marketverse's growth strategy, identifying new market opportunities, cultivating strategic relationships, and driving revenue expansion. This role combines strategic thinking with hands-on execution, requiring both analytical prowess and exceptional interpersonal skills.
            </p>
            <p className="text-muted-foreground">
              You'll work closely with our marketing, sales, and strategy teams to develop and execute comprehensive business development plans that align with our ambitious growth objectives. Your contributions will directly impact our market position and revenue trajectory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights?.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {item?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item?.title}</h3>
                <p className="text-muted-foreground">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
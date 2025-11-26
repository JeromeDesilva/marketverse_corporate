import React from 'react';
import { Users, MessageSquare, Calendar, Lightbulb } from 'lucide-react';

const TeamIntegration = () => {
  const teamStructure = {
    reportsTo: 'Director of Marketing',
    teamSize: '5-7 marketing professionals',
    collaborations: [
      {
        team: 'Marketing Team',
        interaction: 'Daily collaboration on campaign strategies and brand messaging',
        icon: Users,
        alt: 'Users icon representing marketing team collaboration'
      },
      {
        team: 'Sales Team',
        interaction: 'Weekly alignment on sponsor leads and partnership opportunities',
        icon: MessageSquare,
        alt: 'Message bubble icon representing communication with sales team'
      },
      {
        team: 'Creative Team',
        interaction: 'Regular sessions for sponsor presentation materials and campaign assets',
        icon: Lightbulb,
        alt: 'Lightbulb icon representing creative brainstorming and ideation'
      },
      {
        team: 'Executive Leadership',
        interaction: 'Monthly strategic reviews and major partnership presentations',
        icon: Calendar,
        alt: 'Calendar icon representing scheduled leadership meetings'
      }
    ]
  };

  const workingStyle = [
    {
      aspect: 'Communication',
      details: 'Open communication culture with daily stand-ups, weekly team meetings, and monthly all-hands',
      frequency: 'Daily interaction'
    },
    {
      aspect: 'Collaboration',
      details: 'Cross-functional project teams for major initiatives with shared goals and accountability',
      frequency: 'Weekly sprints'
    },
    {
      aspect: 'Autonomy',
      details: 'High degree of independence in managing sponsor relationships and outreach strategies',
      frequency: 'Self-directed work'
    },
    {
      aspect: 'Support',
      details: 'Access to mentorship, resources, and leadership guidance when needed',
      frequency: 'On-demand support'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Team Integration & Collaboration
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding your role within the Marketverse team structure
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Reporting Structure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Reports To</p>
                <p className="text-lg font-semibold text-foreground">{teamStructure?.reportsTo}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Team Size</p>
                <p className="text-lg font-semibold text-foreground">{teamStructure?.teamSize}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Key Collaborations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teamStructure?.collaborations?.map((collab, index) => {
                const IconComponent = collab?.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" aria-label={collab?.alt} />
                      </div>
                      <h4 className="font-bold text-foreground">{collab?.team}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{collab?.interaction}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Working Style & Culture</h3>
            <div className="space-y-4">
              {workingStyle?.map((style, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-foreground">{style?.aspect}</h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {style?.frequency}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{style?.details}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Team Culture Highlights</h3>
            <p className="text-muted-foreground mb-4">
              Our team values collaboration, innovation, and results. We believe in empowering individuals to take ownership while providing the support needed to succeed. You'll work in a fast-paced environment where your contributions directly impact company growth and sponsor satisfaction.
            </p>
            <ul className="grid md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Results-driven mindset
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Collaborative spirit
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Continuous learning
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Work-life balance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntegration;
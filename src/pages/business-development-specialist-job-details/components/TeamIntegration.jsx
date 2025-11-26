import React from 'react';
import { Users, Target, MessageSquare, Award } from 'lucide-react';

const TeamIntegration = () => {
  const teamCollaboration = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Sales & Marketing Alignment',
      description: 'Work closely with marketing teams to develop targeted campaigns and lead generation strategies',
      interactions: ['Weekly strategy meetings', 'Campaign collaboration', 'Lead handoff processes']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategy Team Coordination',
      description: 'Partner with strategists to understand client needs and develop compelling proposals',
      interactions: ['Client discovery sessions', 'Proposal development', 'Account planning']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Cross-Functional Support',
      description: 'Collaborate with operations, finance, and delivery teams for seamless client onboarding',
      interactions: ['Contract coordination', 'Client transition planning', 'Revenue forecasting']
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Leadership Engagement',
      description: 'Regular touchpoints with executive team for strategic guidance and deal support',
      interactions: ['Quarterly business reviews', 'Strategic account planning', 'Executive deal support']
    }
  ];

  const territories = [
    { region: 'Primary Territory', focus: 'Midwest USA (Chicago, Detroit, Milwaukee)', target: '60% of activity' },
    { region: 'Secondary Markets', focus: 'Northeast Corridor (NYC, Boston, Philadelphia)', target: '30% of activity' },
    { region: 'Strategic Accounts', focus: 'National enterprise opportunities', target: '10% of activity' }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Team Integration & Territory Focus
            </h2>
            <p className="text-lg text-muted-foreground">
              Collaborative environment with defined territories and market expansion targets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {teamCollaboration?.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {item?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item?.title}</h3>
                <p className="text-muted-foreground mb-4">{item?.description}</p>
                <ul className="space-y-2">
                  {item?.interactions?.map((interaction, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{interaction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Territory & Market Focus</h3>
            <div className="space-y-4">
              {territories?.map((territory, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-foreground">{territory?.region}</h4>
                      <span className="text-sm text-primary font-medium">{territory?.target}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{territory?.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntegration;
import React from 'react';
import { Users, Target, MessageCircle, TrendingUp } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const TeamIntegration = () => {
  const integrationAspects = [
    {
      icon: Users,
      title: 'Supportive Team Structure',
      description: 'Work within a collaborative administrative team environment',
      details: [
        'Close collaboration with 3-5 team members',
        'Regular team meetings and coordination',
        'Cross-training opportunities',
        'Peer support and knowledge sharing'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Mentorship Program',
      description: 'Benefit from structured guidance and professional development',
      details: [
        'Assigned mentor for first 6 months',
        'Regular one-on-one coaching sessions',
        'Skill development workshops',
        'Career guidance and feedback'
      ]
    },
    {
      icon: Target,
      title: 'Clear Performance Goals',
      description: 'Work towards well-defined objectives and success metrics',
      details: [
        'Weekly task priorities and goals',
        'Monthly performance reviews',
        'Skill development milestones',
        'Recognition for achievements'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Access continuous learning and advancement pathways',
      details: [
        'Internal training programs',
        'Skill certification opportunities',
        'Clear promotion criteria',
        'Professional development support'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Team Integration & Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join a supportive team environment with mentorship programs and clear growth pathways
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationAspects?.map((aspect, index) => {
              const Icon = aspect?.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {aspect?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {aspect?.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {aspect?.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntegration;
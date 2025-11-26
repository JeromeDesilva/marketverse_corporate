import React from 'react';
import { Users, Palette, BarChart3, Handshake } from 'lucide-react';

const TeamIntegration = () => {
  const integrations = [
    {
      icon: Palette,
      title: 'Creative Team',
      description: 'Collaborate on campaign concepts and executions',
      details: [
        'Develop creative briefs and strategic direction',
        'Review concepts for strategic alignment',
        'Guide messaging and positioning strategies',
        'Ensure brand consistency across touchpoints'
      ],
      alt: 'Creative team collaboration icon'
    },
    {
      icon: BarChart3,
      title: 'Analytics Team',
      description: 'Data-driven insights and performance optimization',
      details: [
        'Define KPIs and measurement frameworks',
        'Analyze campaign performance data',
        'Generate insights for strategy optimization',
        'Develop predictive models and forecasts'
      ],
      alt: 'Analytics team data collaboration icon'
    },
    {
      icon: Handshake,
      title: 'Client Service Team',
      description: 'Strategic client partnership and communication',
      details: [
        'Present strategic recommendations to clients',
        'Participate in client strategy sessions',
        'Provide strategic guidance for account growth',
        'Support new business pitch development'
      ],
      alt: 'Client service team partnership icon'
    },
    {
      icon: Users,
      title: 'Cross-Functional Teams',
      description: 'Agency-wide strategic collaboration',
      details: [
        'Lead cross-functional strategy workshops',
        'Collaborate with media planning teams',
        'Support content and social media strategies',
        'Integrate digital and traditional approaches'
      ],
      alt: 'Cross-functional team collaboration icon'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Team Integration
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Work at the intersection of creativity, data, and strategy, collaborating with diverse teams to deliver integrated marketing solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {integrations?.map((integration, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <integration.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {integration?.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-4">
                      {integration?.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 ml-16">
                  {integration?.details?.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Strategic Collaboration Culture
            </h3>
            <p className="text-muted-foreground mb-4">
              As a Marketing Strategist at Marketverse, you'll be a key driver of integrated solutions. You'll have the opportunity to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Lead strategic planning sessions with cross-functional teams
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Present insights and recommendations to senior leadership
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Mentor junior team members in strategic thinking
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Shape the strategic direction of major campaigns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntegration;
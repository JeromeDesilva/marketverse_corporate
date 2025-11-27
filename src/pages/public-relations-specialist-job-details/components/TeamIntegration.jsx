import React from 'react';
import { Users, Target, Zap, MessageSquare } from 'lucide-react';

const TeamIntegration = () => {
  const collaborations = [
    {
      icon: <Users className="w-6 h-6" />,
      team: 'Marketing Team',
      description: 'Coordinate PR efforts with marketing campaigns for integrated brand messaging',
      interactions: [
        'Align PR strategy with marketing objectives',
        'Coordinate product launch communications',
        'Support content marketing initiatives',
        'Collaborate on brand positioning'
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      team: 'Social Media Team',
      description: 'Integrate traditional PR with digital channels for maximum reach',
      interactions: [
        'Amplify press coverage on social platforms',
        'Coordinate influencer relations',
        'Manage social media crisis response',
        'Support brand advocacy programs'
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      team: 'Executive Leadership',
      description: 'Support executive positioning and thought leadership initiatives',
      interactions: [
        'Prepare executives for media interviews',
        'Develop executive communication materials',
        'Coordinate speaking opportunities',
        'Manage reputation and visibility strategies'
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      team: 'Client Services',
      description: 'Leverage client success stories for media and PR opportunities',
      interactions: [
        'Identify client case study opportunities',
        'Coordinate client testimonials',
        'Support client PR initiatives',
        'Develop partnership announcements'
      ]
    }
  ];

  const teamCulture = [
    'Weekly PR team strategy sessions',
    'Monthly cross-functional collaboration meetings',
    'Quarterly media training workshops',
    'Annual PR industry conference participation',
    'Regular media relationship building events',
    'Collaborative crisis response simulations'
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Team Integration & Collaboration
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Work closely with marketing, social media, and leadership teams to create cohesive brand communications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {collaborations?.map((collab, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {collab?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {collab?.team}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {collab?.description}
                </p>
                <ul className="space-y-2">
                  {collab?.interactions?.map((interaction, interactionIndex) => (
                    <li key={interactionIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{interaction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Team Culture & Collaboration
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {teamCulture?.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
              <h4 className="font-semibold text-foreground mb-3">
                What Our PR Team Says
              </h4>
              <p className="text-muted-foreground italic">
                "The collaborative environment at Marketverse allows us to create integrated campaigns that amplify our brand across all channels. Working with talented professionals from marketing, social media, and leadership teams makes every PR initiative more impactful."
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                — Sarah Johnson, Senior PR Specialist
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Cross-functional Teams</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Weekly</div>
              <p className="text-sm text-muted-foreground">Collaboration Sessions</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Team Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntegration;
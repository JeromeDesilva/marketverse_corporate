import React from 'react';
import { Users, MessageSquare, Calendar, FileText } from 'lucide-react';

const TeamIntegration = () => {
  const teamCollaboration = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Cross-Department Support',
      description: 'Work with all departments providing administrative assistance and coordination',
      interactions: ['Marketing team support', 'Operations coordination', 'Finance documentation']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Communication Hub',
      description: 'Serve as central point for internal communications and scheduling',
      interactions: ['Meeting coordination', 'Email management', 'Information distribution']
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Event Coordination',
      description: 'Plan and execute company events, meetings, and team activities',
      interactions: ['Team meeting setup', 'Event planning', 'Vendor coordination']
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Documentation Management',
      description: 'Maintain organized systems for all company documents and records',
      interactions: ['Filing systems', 'Record keeping', 'Document preparation']
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Team Integration & Collaboration
            </h2>
            <p className="text-lg text-muted-foreground">
              Central role supporting all departments and facilitating smooth operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default TeamIntegration;
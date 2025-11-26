import React from 'react';
import { Laptop, Clock, Coffee, Lightbulb } from 'lucide-react';

const WorkEnvironment = () => {
  const environment = [
    {
      icon: Laptop,
      title: 'Flexible Work Model',
      description: 'Choose the environment that maximizes your strategic thinking',
      features: [
        'Fully remote or hybrid work options',
        'Collaborative office spaces in Chennai, Mumbai, Bangalore, Delhi, Hyderabad',
        'Modern technology and tools provided',
        'Flexible hours to accommodate deep work'
      ],
      alt: 'Flexible remote and hybrid work environment'
    },
    {
      icon: Clock,
      title: 'Strategic Work Culture',
      description: 'Balance collaboration with focused strategy time',
      features: [
        'Dedicated focus time for strategic development',
        'Collaborative strategy sessions and workshops',
        'Flexible scheduling around client meetings',
        'Work-life balance emphasis'
      ],
      alt: 'Strategic work culture and time management'
    },
    {
      icon: Coffee,
      title: 'Innovation Environment',
      description: 'Foster creativity and strategic excellence',
      features: [
        'Access to industry research and tools',
        'Regular strategy team brainstorming sessions',
        'Innovation lab for testing new approaches',
        'Continuous learning culture'
      ],
      alt: 'Innovation and creative thinking environment'
    },
    {
      icon: Lightbulb,
      title: 'Growth & Learning',
      description: 'Continuous professional development opportunities',
      features: [
        'Access to marketing strategy courses',
        'Attendance at industry conferences',
        'Peer learning and knowledge sharing',
        'Guest speaker series with industry leaders'
      ],
      alt: 'Professional growth and learning opportunities'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Work Environment
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Experience a dynamic workplace designed to foster strategic thinking, innovation, and collaboration.
          </p>

          <div className="space-y-6">
            {environment?.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item?.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item?.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {item?.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-card border border-primary/30 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Team Dynamics
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Collaborative Culture</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Work with a diverse team of strategists, creatives, and analysts who challenge and inspire each other.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Regular strategy team meetups</p>
                  <p>• Cross-team collaboration opportunities</p>
                  <p>• Supportive feedback culture</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Strategic Resources</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Access cutting-edge tools, research databases, and technology to enhance your strategic work.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Premium market research access</p>
                  <p>• Advanced analytics platforms</p>
                  <p>• AI-powered strategy tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
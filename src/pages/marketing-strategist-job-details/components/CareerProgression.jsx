import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const CareerProgression = () => {
  const pathways = [
    {
      level: 'Mid',
      title: 'Marketing Strategist',
      duration: '0-2 years',
      responsibilities: [
        'Lead strategy development for multiple clients',
        'Conduct market research and competitive analysis',
        'Develop campaign strategies and frameworks',
        'Collaborate with creative and analytics teams'
      ],
      alt: 'Mid-level marketing strategist position'
    },
    {
      level: 'Senior',
      title: 'Senior Marketing Strategist',
      duration: '2-4 years',
      responsibilities: [
        'Manage complex, high-value client accounts',
        'Mentor junior strategists and guide projects',
        'Present strategic recommendations to C-suite',
        'Drive innovation in strategic methodologies'
      ],
      alt: 'Senior marketing strategist role'
    },
    {
      level: 'Lead',
      title: 'Lead Strategist / Strategy Director',
      duration: '4-6 years',
      responsibilities: [
        'Oversee strategy department operations',
        'Develop agency-wide strategic frameworks',
        'Lead new business pitch strategies',
        'Build and manage strategy team'
      ],
      alt: 'Lead strategist director position'
    },
    {
      level: 'Executive',
      title: 'VP of Strategy / Chief Strategy Officer',
      duration: '6+ years',
      responsibilities: [
        'Define strategic vision for the agency',
        'Lead business development initiatives',
        'Represent agency at industry events',
        'Drive thought leadership and innovation'
      ],
      alt: 'Executive VP/CSO leadership role'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Career Progression
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Clear advancement pathways from strategist to senior marketing leadership with opportunities for specialization and growth.
          </p>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-6">
              {pathways?.map((pathway, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {pathway?.level}
                      </span>
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {pathway?.title}
                    </h3>
                    
                    <p className="text-sm text-primary font-medium mb-4">
                      {pathway?.duration}
                    </p>
                    
                    <ul className="space-y-2">
                      {pathway?.responsibilities?.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {index < pathways?.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-20">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Strategic Development Opportunities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Industry Specialization:</strong> Develop expertise in specific verticals (tech, healthcare, retail)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Advanced Training:</strong> Access to strategic planning frameworks and methodologies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Thought Leadership:</strong> Opportunities to speak at conferences and publish insights
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Team Building:</strong> Grow into management roles leading strategy departments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProgression;
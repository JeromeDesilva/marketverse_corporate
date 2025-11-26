import React from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const CareerProgression = () => {
  const progressionPath = [
    {
      level: 'Administrative Specialist',
      duration: '1-2 years',
      icon: <Briefcase className="w-6 h-6" />,
      responsibilities: [
        'Master core administrative functions and office systems',
        'Build strong relationships across departments',
        'Develop proficiency in all office software and tools',
        'Demonstrate reliability and process improvement skills'
      ]
    },
    {
      level: 'Senior Administrative Coordinator',
      duration: '2-3 years',
      icon: <TrendingUp className="w-6 h-6" />,
      responsibilities: [
        'Lead special projects and process improvement initiatives',
        'Mentor junior administrative staff',
        'Handle complex executive support tasks',
        'Manage vendor relationships and contracts'
      ]
    },
    {
      level: 'Office Manager',
      duration: '3-4 years',
      icon: <Users className="w-6 h-6" />,
      responsibilities: [
        'Oversee all administrative operations',
        'Manage administrative team and budgets',
        'Develop and implement operational policies',
        'Serve as key liaison for facilities and vendors'
      ]
    },
    {
      level: 'Operations Director',
      duration: 'Long-term',
      icon: <Award className="w-6 h-6" />,
      responsibilities: [
        'Strategic leadership of operational functions',
        'Cross-departmental coordination and planning',
        'Budget management and resource allocation',
        'Process optimization at organizational level'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career Progression Framework
            </h2>
            <p className="text-lg text-muted-foreground">
              Clear growth path from specialist to leadership positions
            </p>
          </div>

          <div className="space-y-6">
            {progressionPath?.map((stage, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {stage?.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{stage?.level}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {stage?.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {stage?.responsibilities?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < progressionPath?.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="w-px h-8 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProgression;
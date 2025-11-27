import React from 'react';
import { TrendingUp, Award, Users, Target } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const CareerProgression = () => {
  const careerPath = [
    {
      level: 'Entry Level',
      title: 'Administrative Specialist',
      duration: '0-2 years',
      icon: Target,
      responsibilities: [
        'Master fundamental administrative tasks',
        'Develop proficiency in office systems',
        'Build organizational skills',
        'Learn company procedures'
      ],
      skills: [
        'Basic data entry and filing',
        'Email and calendar management',
        'Document preparation',
        'Customer service basics'
      ]
    },
    {
      level: 'Intermediate',
      title: 'Senior Administrative Specialist',
      duration: '2-4 years',
      icon: Award,
      responsibilities: [
        'Handle complex administrative projects',
        'Train new team members',
        'Improve office processes',
        'Support multiple departments'
      ],
      skills: [
        'Advanced MS Office proficiency',
        'Project coordination',
        'Process improvement',
        'Team mentorship'
      ]
    },
    {
      level: 'Advanced',
      title: 'Administrative Coordinator',
      duration: '4-6 years',
      icon: Users,
      responsibilities: [
        'Coordinate department activities',
        'Manage administrative team',
        'Develop operational procedures',
        'Strategic planning support'
      ],
      skills: [
        'Team leadership',
        'Budget management',
        'Strategic planning',
        'Cross-functional coordination'
      ]
    },
    {
      level: 'Leadership',
      title: 'Administrative Manager',
      duration: '6+ years',
      icon: TrendingUp,
      responsibilities: [
        'Lead administrative operations',
        'Strategic decision making',
        'Department budget oversight',
        'Executive support management'
      ],
      skills: [
        'Leadership excellence',
        'Strategic operations',
        'Financial management',
        'Change management'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career Development Pathways
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Clear advancement opportunities with structured progression from specialist to senior administrative roles
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {careerPath?.map((stage, index) => {
                const Icon = stage?.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-primary font-medium">{stage?.level}</div>
                            <h3 className="text-xl font-bold text-foreground">{stage?.title}</h3>
                            <div className="text-sm text-muted-foreground">{stage?.duration}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {stage?.responsibilities?.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Skills Developed:</h4>
                            <div className="flex flex-wrap gap-2">
                              {stage?.skills?.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold z-10">
                      {index + 1}
                    </div>
                    
                    <div className="w-full md:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProgression;
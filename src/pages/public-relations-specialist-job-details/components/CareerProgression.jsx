import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';

const CareerProgression = () => {
  const careerPath = [
    {
      level: 'Public Relations Specialist',
      duration: '0-2 years',
      focus: 'Foundation Building',
      responsibilities: [
        'Execute PR campaigns and media outreach',
        'Write press releases and media materials',
        'Build media relationships',
        'Monitor media coverage and sentiment'
      ],
      skills: [
        'Media relations fundamentals',
        'PR writing excellence',
        'Campaign coordination',
        'Media monitoring tools'
      ]
    },
    {
      level: 'Senior PR Specialist',
      duration: '2-4 years',
      focus: 'Strategic Leadership',
      responsibilities: [
        'Lead complex PR campaigns',
        'Manage crisis communications',
        'Mentor junior PR team members',
        'Develop strategic media relationships'
      ],
      skills: [
        'Advanced media strategy',
        'Crisis management',
        'Team leadership',
        'Stakeholder communication'
      ]
    },
    {
      level: 'PR Manager',
      duration: '4-6 years',
      focus: 'Team & Strategy Management',
      responsibilities: [
        'Oversee PR team operations',
        'Develop comprehensive PR strategies',
        'Manage agency relationships',
        'Drive executive positioning programs'
      ],
      skills: [
        'Team management',
        'Strategic planning',
        'Budget management',
        'Executive communications'
      ]
    },
    {
      level: 'Senior PR Manager / Director',
      duration: '6+ years',
      focus: 'Brand Communication Leadership',
      responsibilities: [
        'Lead brand communication strategy',
        'Executive advisory on reputation management',
        'Oversee integrated marketing communications',
        'Shape organizational narrative'
      ],
      skills: [
        'Strategic leadership',
        'Corporate communications',
        'Crisis leadership',
        'Executive presence'
      ]
    }
  ];

  const developmentAreas = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Skills Development',
      items: [
        'Advanced PR certifications (APR, PRCA)',
        'Media training workshops',
        'Crisis communication courses',
        'Digital PR and social media integration'
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Career Milestones',
      items: [
        'First major media placement',
        'Crisis management leadership',
        'Industry speaking engagement',
        'Award-winning campaign'
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career Progression
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Clear advancement path from PR Specialist to senior brand communication leadership roles
            </p>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden lg:block" />
            
            <div className="space-y-8">
              {careerPath?.map((stage, index) => (
                <div
                  key={index}
                  className="relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ml-0 lg:ml-20"
                >
                  <div className="absolute -left-12 top-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hidden lg:flex">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {stage?.level}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {stage?.duration}
                      </span>
                    </div>
                    <p className="text-primary font-semibold">{stage?.focus}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {stage?.responsibilities?.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Required Skills
                      </h4>
                      <ul className="space-y-2">
                        {stage?.skills?.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {developmentAreas?.map((area, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {area?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {area?.title}
                </h3>
                <ul className="space-y-2">
                  {area?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
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

export default CareerProgression;
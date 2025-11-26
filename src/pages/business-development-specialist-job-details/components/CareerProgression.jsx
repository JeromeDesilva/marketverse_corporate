import React from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const CareerProgression = () => {
  const progressionPath = [
    {
      level: 'Business Development Specialist',
      duration: '1-2 years',
      icon: <Briefcase className="w-6 h-6" />,
      responsibilities: [
        'Build client pipeline and exceed revenue targets',
        'Develop expertise in consultative selling',
        'Master CRM and sales enablement tools',
        'Establish industry network and partnerships'
      ]
    },
    {
      level: 'Senior Business Development Manager',
      duration: '2-3 years',
      icon: <TrendingUp className="w-6 h-6" />,
      responsibilities: [
        'Lead strategic account acquisition initiatives',
        'Mentor junior business development team members',
        'Develop market expansion strategies',
        'Drive high-value enterprise deals'
      ]
    },
    {
      level: 'Director of Business Development',
      duration: '3+ years',
      icon: <Users className="w-6 h-6" />,
      responsibilities: [
        'Oversee business development department',
        'Define growth strategy and revenue targets',
        'Build and manage high-performing sales teams',
        'Establish key partnerships and alliances'
      ]
    },
    {
      level: 'VP of Partnerships / Revenue',
      duration: 'Long-term',
      icon: <Award className="w-6 h-6" />,
      responsibilities: [
        'Executive leadership role in company growth',
        'Strategic partnership development at C-level',
        'Revenue optimization across all channels',
        'Market expansion and M&A opportunities'
      ]
    }
  ];

  const growthMetrics = [
    { metric: 'Revenue Growth', target: '150-200% year-over-year', icon: <TrendingUp className="w-5 h-5" /> },
    { metric: 'Client Acquisition', target: '20-30 new accounts/year', icon: <Users className="w-5 h-5" /> },
    { metric: 'Deal Size', target: '$50K-$500K average', icon: <Award className="w-5 h-5" /> },
    { metric: 'Relationship Building', target: 'C-suite network growth', icon: <Briefcase className="w-5 h-5" /> }
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
              Clear advancement path from specialist to senior leadership roles
            </p>
          </div>

          <div className="space-y-6 mb-12">
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

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Performance Metrics & Standards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {growthMetrics?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {item?.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item?.metric}</h4>
                    <p className="text-muted-foreground text-sm">{item?.target}</p>
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

export default CareerProgression;
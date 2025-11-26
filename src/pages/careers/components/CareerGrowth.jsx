import React from 'react';
import { TrendingUp, Target, Award, Users } from 'lucide-react';

const CareerGrowth = () => {
  const pathways = [
    {
      level: 'Entry Level',
      roles: ['Marketing Coordinator', 'Junior Specialist'],
      duration: '0-1 years',
      skills: ['Campaign basics', 'Tool proficiency', 'Team collaboration'],
      alt: 'Entry-level marketing professional learning campaign management tools'
    },
    {
      level: 'Mid Level',
      roles: ['Marketing Specialist', 'Account Manager'],
      duration: '1-3 years',
      skills: ['Campaign management', 'Client relations', 'Data analysis'],
      alt: 'Mid-level specialist presenting campaign results to client team'
    },
    {
      level: 'Senior Level',
      roles: ['Senior Strategist', 'Team Lead'],
      duration: '3-5 years',
      skills: ['Strategy development', 'Team leadership', 'Business growth'],
      alt: 'Senior strategist leading team meeting with growth charts'
    },
    {
      level: 'Leadership',
      roles: ['Director', 'VP of Marketing'],
      duration: '5+ years',
      skills: ['Dept. oversight', 'P&L management', 'Vision setting'],
      alt: 'Marketing director presenting strategic vision to executive team'
    }
  ];

  const developmentPrograms = [
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Access to premium courses, certifications, and training programs tailored to your career goals.',
      alt: 'Professional completing online certification course on laptop'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'One-on-one mentorship with senior leaders who invest in your growth and success.',
      alt: 'Senior mentor coaching junior team member in meeting room'
    },
    {
      icon: Award,
      title: 'Performance Reviews',
      description: 'Regular feedback sessions, clear goals, and structured advancement opportunities.',
      alt: 'Manager conducting performance review with growth plan documents'
    },
    {
      icon: TrendingUp,
      title: 'Career Planning',
      description: 'Personalized career roadmaps with defined milestones and achievement tracking.',
      alt: 'Career development roadmap with milestone markers and achievement badges'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Career Growth Pathways
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear advancement opportunities with structured pathways from entry-level to leadership positions
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways?.map((pathway, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 relative"
              >
                {index < pathways?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pathway?.level}
                </h3>
                <div className="text-sm text-primary font-medium mb-4">
                  {pathway?.duration}
                </div>
                <div className="space-y-3 mb-4">
                  {pathway?.roles?.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className="text-sm font-medium text-foreground bg-muted/50 px-3 py-2 rounded-lg"
                    >
                      {role}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-2">Key Skills:</div>
                  <ul className="space-y-1">
                    {pathway?.skills?.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-background rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Professional Development Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {developmentPrograms?.map((program, index) => {
              const IconComponent = program?.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {program?.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {program?.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGrowth;
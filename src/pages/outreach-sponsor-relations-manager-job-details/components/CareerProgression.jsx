import React from 'react';
import { TrendingUp, Award, Users, Target } from 'lucide-react';

const CareerProgression = () => {
  const progressionPath = [
    {
      level: 'Current Position',
      title: 'Outreach & Sponsor Relations Manager',
      timeline: 'Years 0-2',
      focus: 'Build foundational sponsor relationships and develop outreach expertise',
      metrics: ['10+ active sponsor partnerships', '85%+ sponsor satisfaction', '₹500K+ annual partnership revenue'],
      icon: Target,
      alt: 'Target icon representing current position goals and objectives'
    },
    {
      level: 'Next Step',
      title: 'Senior Sponsor Relations Manager',
      timeline: 'Years 2-4',
      focus: 'Lead major partnerships, mentor junior team members, and drive strategic initiatives',
      metrics: ['20+ enterprise-level partnerships', 'Team leadership responsibilities', '₹1M+ partnership portfolio'],
      icon: TrendingUp,
      alt: 'Trending up graph icon representing career advancement'
    },
    {
      level: 'Leadership Track',
      title: 'Director of Partnerships',
      timeline: 'Years 4-6',
      focus: 'Oversee entire partnership ecosystem and develop organizational partnership strategy',
      metrics: ['Manage partnership team (5-7 people)', 'National partnership expansion', 'C-suite stakeholder management'],
      icon: Users,
      alt: 'Users icon representing team leadership and management role'
    },
    {
      level: 'Executive Level',
      title: 'VP of Strategic Partnerships',
      timeline: 'Years 6+',
      focus: 'Executive leadership defining company-wide partnership vision and global strategy',
      metrics: ['Executive team member', 'International expansion', 'Multi-million dollar portfolio management'],
      icon: Award,
      alt: 'Award icon representing executive achievement and recognition'
    }
  ];

  const developmentOpportunities = [
    {
      category: 'Skill Development',
      opportunities: [
        'Advanced negotiation and contract management workshops',
        'Leadership and people management training programs',
        'Strategic business development certifications',
        'Industry-specific partnership courses'
      ]
    },
    {
      category: 'Growth Pathways',
      opportunities: [
        'Cross-functional project leadership opportunities',
        'International partnership expansion projects',
        'Speaking engagements at industry conferences',
        'Mentorship from C-level executives'
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career Progression & Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              Clear advancement pathways and development opportunities at Marketverse
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            
            <div className="space-y-8">
              {progressionPath?.map((stage, index) => {
                const IconComponent = stage?.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center relative z-10">
                        <IconComponent className="w-8 h-8 text-primary" aria-label={stage?.alt} />
                      </div>
                      
                      <div className="flex-1 bg-card border border-border rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {stage?.level}
                          </span>
                          <span className="text-sm text-muted-foreground">{stage?.timeline}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {stage?.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {stage?.focus}
                        </p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Success Metrics:</h4>
                          <ul className="space-y-1">
                            {stage?.metrics?.map((metric, metricIndex) => (
                              <li key={metricIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {developmentOpportunities?.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {section?.category}
                </h3>
                <ul className="space-y-2">
                  {section?.opportunities?.map((opportunity, oppIndex) => (
                    <li key={oppIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{opportunity}</span>
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
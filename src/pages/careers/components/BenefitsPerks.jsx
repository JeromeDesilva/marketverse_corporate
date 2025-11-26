import React from 'react';
import { Heart, Briefcase, GraduationCap, Plane, Home, Coffee, Gift, Shield } from 'lucide-react';

const BenefitsPerks = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Dental and vision coverage',
        'Mental health support',
        'Gym membership reimbursement'
      ],
      alt: 'Healthcare benefits card and wellness program materials on desk'
    },
    {
      icon: Briefcase,
      title: 'Competitive Compensation',
      items: [
        'Above-market salaries',
        'Performance bonuses',
        'Equity options',
        'Annual salary reviews'
      ],
      alt: 'Financial compensation package documents and bonus structure chart'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      items: [
        'Training budget per employee',
        'Conference attendance',
        'Online course subscriptions',
        'Mentorship programs'
      ],
      alt: 'Professional development resources including online courses and conference materials'
    },
    {
      icon: Plane,
      title: 'Time Off & Flexibility',
      items: [
        'Unlimited PTO policy',
        'Flexible work hours',
        'Remote work options',
        'Paid parental leave'
      ],
      alt: 'Vacation planning calendar with flexible schedule options'
    },
    {
      icon: Home,
      title: 'Work Environment',
      items: [
        'Modern office spaces',
        'Latest tech equipment',
        'Standing desks available',
        'Collaborative workspaces'
      ],
      alt: 'Modern office interior with ergonomic furniture and collaborative spaces'
    },
    {
      icon: Coffee,
      title: 'Daily Perks',
      items: [
        'Free meals and snacks',
        'Premium coffee bar',
        'Team outings',
        'Happy hour events'
      ],
      alt: 'Office break room with gourmet coffee station and refreshments'
    },
    {
      icon: Gift,
      title: 'Additional Benefits',
      items: [
        'Employee referral bonuses',
        'Commuter benefits',
        'Pet-friendly offices',
        'Birthday celebrations'
      ],
      alt: 'Gift box with employee appreciation items and celebration decorations'
    },
    {
      icon: Shield,
      title: 'Security & Planning',
      items: [
        '401(k) with company match',
        'Life insurance',
        'Disability coverage',
        'Financial planning support'
      ],
      alt: 'Retirement planning documents and financial security symbols'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefits & Perks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We invest in our team's success with comprehensive benefits and perks that support your professional and personal life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits?.map((benefit, index) => {
            const IconComponent = benefit?.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {benefit?.title}
                </h3>
                <ul className="space-y-2">
                  {benefit?.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            And That's Not All!
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're constantly evolving our benefits package based on team feedback. Have an idea for a new perk? 
            We're always listening and looking to improve our team experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPerks;
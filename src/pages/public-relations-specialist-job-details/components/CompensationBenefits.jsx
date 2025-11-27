import React from 'react';
import { IndianRupee, TrendingUp, Gift, Heart, GraduationCap, Users } from 'lucide-react';

const CompensationBenefits = () => {
  const compensation = {
    salary: {
      range: '₹6,00,000 - ₹10,00,000',
      description: 'Competitive base salary based on experience and qualifications'
    },
    bonus: {
      range: '10-20%',
      description: 'Performance bonus tied to media coverage metrics and campaign success'
    }
  };

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      items: [
        'Comprehensive health insurance (self + family)',
        'Annual health check-ups',
        'Mental health support programs',
        'Wellness allowance for fitness activities'
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Professional Development',
      items: [
        'PR certification sponsorship (APR, PRCA)',
        'Media training workshops and conferences',
        'Writing and communication skills development',
        'Industry networking event sponsorship'
      ]
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Work-Life Balance',
      items: [
        'Flexible work hours and remote options',
        '25 paid time off days annually',
        'Paid parental leave (maternity/paternity)',
        'Festival bonuses and celebrations'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Career Growth',
      items: [
        'Clear progression to Senior PR Manager',
        'Opportunity to build media network',
        'Leadership training programs',
        'Cross-functional project opportunities'
      ]
    }
  ];

  const perks = [
    'Access to premium PR tools and platforms',
    'Media relationship building allowance',
    'Press event coordination budget',
    'Professional portfolio development support',
    'Industry publication subscriptions',
    'Networking event participation'
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compensation & Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Competitive package with performance incentives and comprehensive benefits supporting your PR career growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Base Salary</h3>
                  <p className="text-2xl font-bold text-primary">{compensation?.salary?.range}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{compensation?.salary?.description}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Performance Bonus</h3>
                  <p className="text-2xl font-bold text-primary">{compensation?.bonus?.range}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{compensation?.bonus?.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {benefit?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit?.title}
                </h3>
                <ul className="space-y-2">
                  {benefit?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Additional Perks & Benefits
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {perks?.map((perk, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Statutory Benefits</h4>
                <p className="text-sm text-muted-foreground">
                  All positions include mandatory benefits: Provident Fund (PF), Employee State Insurance (ESI), Gratuity, and compliance with Indian labor laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompensationBenefits;
import React from 'react';
import { DollarSign, Heart, Briefcase, TrendingUp } from 'lucide-react';

const CompensationBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: '₹6,00,000 - ₹90,00,000 annually based on experience',
      details: [
        'Performance-based bonuses tied to campaign success',
        'Annual merit increases and promotions',
        'Profit-sharing opportunities',
        'Competitive market-rate salary in INR'
      ],
      alt: 'Dollar sign icon representing competitive compensation package'
    },
    {
      icon: Heart,
      title: 'Comprehensive Benefits',
      description: 'Health and wellness support',
      details: [
        'Premium medical, dental, and vision insurance',
        'Provident Fund (PF) and Employee State Insurance (ESI)',
        'Gratuity and performance incentives',
        'Life and disability insurance'
      ],
      alt: 'Heart icon symbolizing comprehensive health benefits'
    },
    {
      icon: Briefcase,
      title: 'Professional Growth',
      description: 'Invest in your strategic career',
      details: [
        'Professional development budget ($3,000/year)',
        'Industry conference and workshop attendance',
        'Advanced certification support',
        'Mentorship from senior strategists'
      ],
      alt: 'Briefcase icon representing professional development opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Clear path to leadership',
      details: [
        'Structured promotion pathway to senior roles',
        'Leadership development programs',
        'Opportunity to lead strategic initiatives',
        'Access to executive mentorship'
      ],
      alt: 'Growth chart icon showing career advancement trajectory'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Compensation & Benefits
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            We offer competitive compensation and unique growth opportunities that reflect our commitment to marketing excellence and strategic innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit?.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {benefit?.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {benefit?.details?.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
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

export default CompensationBenefits;
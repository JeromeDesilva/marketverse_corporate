import React from 'react';
import { DollarSign, Heart, GraduationCap, Calendar } from 'lucide-react';

const CompensationBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: '₹3,00,000 - ₹6,00,000 annually based on experience',
      details: [
        'Performance-based bonuses',
        'Annual merit increases and promotions',
        'Festival bonuses and incentives',
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
      icon: GraduationCap,
      title: 'Professional Growth',
      description: 'Training and development opportunities to advance your career',
      details: ['Skills training workshops', 'Certification sponsorship', 'Career development programs']
    },
    {
      icon: Calendar,
      title: 'Work-Life Balance',
      description: 'Flexible arrangements and generous time-off policies',
      details: ['Hybrid work schedule', '15 days PTO + holidays', 'Flexible hours available']
    }
  ];

  const additionalBenefits = [
    '401(k) retirement plan with 3% company match',
    'Paid parental leave',
    'Employee assistance program',
    'Professional development budget',
    'Company events and team outings',
    'Commuter benefits or parking',
    'Technology and office equipment provided',
    'Casual dress code and modern office environment'
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compensation & Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive package supporting your professional and personal life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {benefit?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit?.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit?.description}</p>
                <ul className="space-y-2">
                  {benefit?.details?.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Additional Perks</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalBenefits?.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompensationBenefits;
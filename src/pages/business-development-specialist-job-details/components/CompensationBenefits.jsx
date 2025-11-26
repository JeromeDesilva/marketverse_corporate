import React from 'react';
import { DollarSign, TrendingUp, Award, Users, Heart } from 'lucide-react';

const CompensationBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: '₹7,00,000 - ₹12,00,000 annually based on experience',
      details: [
        'Performance-based bonuses tied to business growth',
        'Commission structure for new client acquisitions',
        'Annual merit increases and promotions',
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
      icon: TrendingUp,
      title: 'Performance Bonuses',
      description: 'Additional incentives for exceeding revenue targets and securing strategic accounts',
      details: ['Target achievement bonuses', 'Deal closure incentives', 'Annual performance rewards']
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Comprehensive training and certification support to enhance your skills',
      details: ['Sales training workshops', 'Industry certification sponsorship', 'Conference attendance opportunities']
    },
    {
      icon: Users,
      title: 'Networking & Events',
      description: 'Exclusive access to industry events and networking opportunities',
      details: ['Industry conference access', 'VIP networking events', 'Client entertainment budget']
    }
  ];

  const additionalBenefits = [
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements (hybrid model available)',
    'Professional development stipend ($3,000/year)',
    'Company-sponsored certifications and training',
    '401(k) retirement plan with company matching',
    'Paid time off and holiday schedule',
    'Latest technology and tools for business development',
    'Collaborative team environment with growth opportunities'
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
              Rewarding performance with competitive compensation and growth opportunities
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
            <h3 className="text-2xl font-bold text-foreground mb-6">Additional Benefits</h3>
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
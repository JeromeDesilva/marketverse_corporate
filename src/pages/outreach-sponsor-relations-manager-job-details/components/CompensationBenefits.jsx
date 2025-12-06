import React from 'react';
import { IndianRupee, TrendingUp, Heart, Lightbulb, Plane, Home } from 'lucide-react';

const CompensationBenefits = () => {
  const compensation = {
    salary: {
      base: '₹65,000 - ₹85,000',
      details: 'Competitive base salary based on experience and qualifications'
    },
    bonus: {
      structure: 'Performance-based incentives',
      details: 'Quarterly bonuses tied to partnership acquisition and revenue targets'
    },
    commission: {
      structure: 'Partnership commission structure',
      details: 'Earn additional commission on new sponsor deals and contract renewals'
    }
  };

  const benefits = [
    {
      icon: IndianRupee,
      title: 'Competitive Compensation',
      description: '₹5,00,000 - ₹9,00,000 annually based on experience',
      details: [
        'Performance-based bonuses tied to sponsorship deals',
        'Annual merit increases and promotions',
        'Incentives for successful partnerships',
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
      icon: Lightbulb,
      category: 'Professional Development',
      items: [
        'Annual learning and development budget (₹2,000)',
        'Industry conference attendance opportunities',
        'Professional certification support',
        'Mentorship program with senior leadership'
      ],
      alt: 'Lightbulb icon representing professional development and learning opportunities'
    },
    {
      icon: Plane,
      category: 'Time Off & Flexibility',
      items: [
        '20 days paid vacation plus holidays',
        'Flexible work schedule with remote options',
        'Paid parental leave (12 weeks)',
        'Sabbatical opportunities after 5 years'
      ],
      alt: 'Airplane icon representing vacation time and travel benefits'
    },
    {
      icon: Home,
      category: 'Unique Perks',
      items: [
        'Home office setup stipend (₹1,500)',
        'Company-sponsored team events and retreats',
        'Exclusive access to industry networking events',
        'Employee referral bonus program'
      ],
      alt: 'Home icon representing remote work benefits and home office perks'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compensation & Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Competitive package designed to attract and retain top talent
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-primary" aria-label="Dollar sign icon representing base salary" />
                  <h3 className="font-bold text-foreground">Base Salary</h3>
                </div>
                <p className="text-2xl font-bold text-primary mb-1">
                  {compensation?.salary?.base}
                </p>
                <p className="text-sm text-muted-foreground">
                  {compensation?.salary?.details}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" aria-label="Trending up icon representing performance bonuses" />
                  <h3 className="font-bold text-foreground">Performance Bonus</h3>
                </div>
                <p className="text-2xl font-bold text-primary mb-1">
                  {compensation?.bonus?.structure}
                </p>
                <p className="text-sm text-muted-foreground">
                  {compensation?.bonus?.details}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" aria-label="Trending up icon representing commission earnings" />
                  <h3 className="font-bold text-foreground">Commission</h3>
                </div>
                <p className="text-2xl font-bold text-primary mb-1">
                  {compensation?.commission?.structure}
                </p>
                <p className="text-sm text-muted-foreground">
                  {compensation?.commission?.details}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits?.map((benefit, index) => {
              const IconComponent = benefit?.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" aria-label={benefit?.alt} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {benefit?.title || benefit?.category}
                    </h3>
                  </div>
                  {benefit?.description && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {benefit?.description}
                    </p>
                  )}
                  {benefit?.details && (
                    <ul className="space-y-2">
                      {benefit?.details?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {benefit?.items && (
                    <ul className="space-y-2">
                      {benefit?.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompensationBenefits;
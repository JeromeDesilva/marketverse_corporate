import React from 'react';
import { IndianRupee, TrendingUp, Heart, GraduationCap, Calendar, Shield } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const CompensationBenefits = () => {
  const benefits = [
    {
      icon: IndianRupee,
      title: 'Competitive Entry-Level Salary',
      description: '₹2,40,000 - ₹3,60,000 per annum',
      details: [
        'Regular performance reviews',
        'Annual salary increments based on performance',
        'Transparent compensation structure',
        'Timely salary disbursement'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performance Incentives',
      description: 'Performance-based increases and bonuses',
      details: [
        'Quarterly performance bonuses',
        'Annual excellence awards',
        'Skill development bonuses',
        'Attendance and punctuality rewards'
      ]
    },
    {
      icon: Shield,
      title: 'Statutory Benefits',
      description: 'Comprehensive statutory coverage',
      details: [
        'Provident Fund (PF) contribution',
        'Employee State Insurance (ESI)',
        'Gratuity benefits',
        'Leave encashment options'
      ]
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Basic health coverage and wellness programs',
      details: [
        'Group health insurance coverage',
        'Annual health check-ups',
        'Wellness program access',
        'Mental health support resources'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description: 'Structured learning and career growth opportunities',
      details: [
        'Comprehensive onboarding program',
        'Skills training workshops',
        'Computer proficiency training',
        'Professional development courses'
      ]
    },
    {
      icon: Calendar,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling and leave benefits',
      details: [
        'Paid time off and sick leave',
        'Festival holidays',
        'Flexible working arrangements',
        'Supportive team environment'
      ]
    }
  ];

  return (
    <section id="compensation" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compensation & Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Competitive entry-level package with foundational benefits supporting career development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits?.map((benefit, index) => {
              const Icon = benefit?.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {benefit?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit?.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {benefit?.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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
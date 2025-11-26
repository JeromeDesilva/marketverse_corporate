import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationTypes = () => {
  const [selectedType, setSelectedType] = useState('strategy');

  const consultationTypes = [
    {
      id: 'discovery',
      icon: 'Search',
      title: '30-Min Discovery Call',
      duration: '30 minutes',
      description: 'Perfect for initial conversations and quick questions about your marketing needs',
      features: [
        'Quick assessment of your current situation',
        'Identify immediate opportunities',
        'Understand our services and approach',
        'Get answers to your questions'
      ],
      recommended: false
    },
    {
      id: 'strategy',
      icon: 'Lightbulb',
      title: '60-Min Strategy Session',
      duration: '60 minutes',
      description: 'Deep dive into your marketing challenges with actionable recommendations',
      features: [
        'Comprehensive marketing audit',
        'Custom strategy recommendations',
        'Competitive analysis insights',
        'ROI projection and timeline',
        'Q&A with senior strategist'
      ],
      recommended: true
    },
    {
      id: 'comprehensive',
      icon: 'Briefcase',
      title: '90-Min Comprehensive Review',
      duration: '90 minutes',
      description: 'Detailed consultation for complex marketing transformations',
      features: [
        'Full brand and marketing assessment',
        'Multi-channel strategy development',
        'Team structure recommendations',
        'Technology and tools evaluation',
        'Detailed implementation roadmap',
        'Executive presentation deck'
      ],
      recommended: false
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Choose Your Consultation Type
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Select the session that best fits your needs. All consultations are completely free with no obligation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {consultationTypes?.map((type) => (
          <div
            key={type?.id}
            className={`relative p-6 rounded-xl border-2 transition-all cursor-pointer ${
              selectedType === type?.id
                ? 'border-primary bg-primary/5 shadow-lg scale-105'
                : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
            }`}
            onClick={() => setSelectedType(type?.id)}
          >
            {type?.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  RECOMMENDED
                </span>
              </div>
            )}

            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                selectedType === type?.id ? 'bg-primary' : 'bg-primary/10'
              }`}>
                <Icon 
                  name={type?.icon} 
                  size={24} 
                  className={selectedType === type?.id ? 'text-primary-foreground' : 'text-primary'}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground mb-1">{type?.title}</h3>
                <p className="text-sm text-muted-foreground">{type?.duration}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{type?.description}</p>

            <ul className="space-y-2 mb-6">
              {type?.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={selectedType === type?.id ? 'default' : 'outline'}
              fullWidth
              onClick={() => setSelectedType(type?.id)}
            >
              {selectedType === type?.id ? 'Selected' : 'Select This Session'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationTypes;
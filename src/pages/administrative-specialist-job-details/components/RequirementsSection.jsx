import React from 'react';
import { GraduationCap, Award, Languages, Laptop, CheckCircle2 } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const RequirementsSection = () => {
  const requirements = {
    essential: [
      {
        icon: GraduationCap,
        title: 'Education',
        items: [
          'High school diploma or equivalent required',
          'Associate degree or diploma in office administration preferred',
          'Basic business education or relevant coursework'
        ]
      },
      {
        icon: Laptop,
        title: 'Technical Skills',
        items: [
          'Basic proficiency in MS Office Suite (Word, Excel, PowerPoint)',
          'Comfortable with email and calendar management tools',
          'Ability to learn new software systems quickly',
          'Basic data entry and typing skills (40+ WPM preferred)'
        ]
      },
      {
        icon: Award,
        title: 'Core Competencies',
        items: [
          'Strong organizational and time management abilities',
          'Attention to detail and accuracy in work',
          'Professional communication skills (written and verbal)',
          'Ability to work independently and as part of a team'
        ]
      }
    ],
    preferred: [
      {
        icon: Languages,
        title: 'Additional Qualifications',
        items: [
          'Prior experience in office or administrative environment',
          'Familiarity with basic office equipment and procedures',
          'Customer service or reception experience',
          'Multilingual abilities (especially Hindi, English)'
        ]
      }
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualifications & Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Essential skills and qualifications for entry-level administrative success
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Essential Requirements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {requirements?.essential?.map((category, index) => {
                  const Icon = category?.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {category?.title}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {category?.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Preferred Qualifications</h3>
              <div className="grid md:grid-cols-1 gap-6">
                {requirements?.preferred?.map((category, index) => {
                  const Icon = category?.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {category?.title}
                        </h4>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {category?.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
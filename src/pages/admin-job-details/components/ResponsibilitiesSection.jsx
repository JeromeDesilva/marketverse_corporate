import React from 'react';
import { CheckCircle } from 'lucide-react';

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      category: 'Office Management',
      items: [
        'Maintain organized filing systems for documents, contracts, and records',
        'Manage office supplies inventory and vendor relationships',
        'Coordinate office maintenance and facility management',
        'Oversee mail distribution and package handling'
      ]
    },
    {
      category: 'Executive Support',
      items: [
        'Provide administrative support to executives and department heads',
        'Manage calendars, schedule meetings, and coordinate travel arrangements',
        'Prepare meeting agendas, take minutes, and track action items',
        'Handle confidential information with discretion and professionalism'
      ]
    },
    {
      category: 'Communication & Coordination',
      items: [
        'Serve as primary point of contact for internal and external communications',
        'Screen and direct phone calls, emails, and visitor inquiries',
        'Coordinate team meetings, events, and company gatherings',
        'Manage company-wide communications and announcements'
      ]
    },
    {
      category: 'Documentation & Reporting',
      items: [
        'Create, format, and maintain professional documents and presentations',
        'Process expense reports and manage administrative budgets',
        'Generate regular operational reports and metrics',
        'Maintain database accuracy and update records as needed'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Responsibilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential duties that keep our organization running smoothly
            </p>
          </div>

          <div className="space-y-8">
            {responsibilities?.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  {section?.category}
                </h3>
                <ul className="space-y-3">
                  {section?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
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

export default ResponsibilitiesSection;
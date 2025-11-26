import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      category: 'Partnership Development',
      items: [
        'Identify and research potential sponsor partners aligned with Marketverse brand values and target audience',
        'Develop comprehensive sponsor packages and customized partnership proposals',
        'Lead negotiations and close high-value sponsorship deals that meet revenue targets',
        'Create partnership frameworks that ensure mutual value delivery and long-term collaboration',
        'Build strategic alliances with industry influencers and brand ambassadors'
      ]
    },
    {
      category: 'Relationship Management',
      items: [
        'Serve as primary contact for all sponsor communications and relationship maintenance',
        'Conduct regular sponsor check-ins and performance reviews to ensure satisfaction',
        'Develop sponsor retention strategies and implement loyalty programs',
        'Resolve sponsor concerns promptly and maintain high satisfaction scores',
        'Coordinate sponsor deliverables and ensure contract fulfillment'
      ]
    },
    {
      category: 'Outreach Campaigns',
      items: [
        'Design and execute multi-channel outreach campaigns to expand brand presence',
        'Develop content strategies for sponsor engagement and brand ambassador programs',
        'Manage outreach budgets and optimize campaign ROI',
        'Track campaign performance metrics and provide data-driven insights',
        'Collaborate with marketing team on integrated campaign initiatives'
      ]
    },
    {
      category: 'Strategic Planning',
      items: [
        'Contribute to annual partnership strategy and revenue forecasting',
        'Analyze market trends and identify new partnership opportunities',
        'Develop competitive intelligence reports on sponsor landscape',
        'Create scalable processes for partnership management and growth',
        'Present partnership performance reports to leadership team'
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Responsibilities
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of your day-to-day activities and strategic initiatives
            </p>
          </div>
          
          <div className="space-y-8">
            {responsibilities?.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {section?.category}
                </h3>
                <ul className="space-y-3">
                  {section?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-label="Checkmark indicating completed responsibility item" />
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
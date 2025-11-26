import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      category: 'Strategic Development',
      items: [
        'Conduct comprehensive market research and competitive analysis',
        'Develop integrated marketing strategies aligned with client business objectives',
        'Create strategic frameworks for brand positioning and market entry',
        'Define target audience segments and develop customer personas'
      ]
    },
    {
      category: 'Campaign Planning & Execution',
      items: [
        'Design multi-channel marketing campaigns across digital and traditional platforms',
        'Develop campaign messaging, creative briefs, and content strategies',
        'Establish KPIs and measurement frameworks for campaign success',
        'Optimize campaigns based on performance data and insights'
      ]
    },
    {
      category: 'Analytics & Reporting',
      items: [
        'Analyze campaign performance metrics and generate actionable insights',
        'Prepare strategic recommendations based on data analysis',
        'Create comprehensive reports for stakeholders and clients',
        'Monitor market trends and identify opportunities for innovation'
      ]
    },
    {
      category: 'Client & Team Collaboration',
      items: [
        'Present strategic recommendations to clients and senior leadership',
        'Collaborate with creative teams to ensure strategy alignment',
        'Mentor junior strategists and provide strategic guidance',
        'Facilitate cross-functional workshops and strategy sessions'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Core Responsibilities
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Your role will encompass strategic thinking, analytical rigor, and collaborative excellence across all aspects of marketing strategy development and execution.
          </p>

          <div className="space-y-8">
            {responsibilities?.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 md:p-8"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {section?.category}
                </h3>
                <ul className="space-y-3">
                  {section?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
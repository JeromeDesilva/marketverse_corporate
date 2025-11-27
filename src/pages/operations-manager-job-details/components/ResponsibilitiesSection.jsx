import React from 'react';
import { CheckCircle } from 'lucide-react';

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      category: 'Operational Strategy & Planning',
      items: [
        'Develop and implement comprehensive operational strategies aligned with business objectives',
        'Design and optimize business processes to improve efficiency and reduce operational costs',
        'Create and maintain standard operating procedures (SOPs) for all key operations',
        'Conduct regular operational audits and implement improvement initiatives'
      ]
    },
    {
      category: 'Performance Management',
      items: [
        'Monitor and analyze key performance indicators (KPIs) across all departments',
        'Develop metrics and dashboards to track operational efficiency',
        'Implement data-driven strategies to achieve performance targets',
        'Prepare comprehensive operational reports for senior management'
      ]
    },
    {
      category: 'Team Leadership & Coordination',
      items: [
        'Lead cross-functional operations team and coordinate activities',
        'Manage resource allocation and workforce planning',
        'Provide training and development for operations staff',
        'Foster collaborative environment across departments'
      ]
    },
    {
      category: 'Process Improvement & Innovation',
      items: [
        'Identify bottlenecks and implement process improvement solutions',
        'Research and integrate new technologies to enhance operational efficiency',
        'Lead automation initiatives and digital transformation projects',
        'Continuously evaluate and refine operational workflows'
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Responsibilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Drive operational excellence through strategic planning, process optimization, and team leadership
            </p>
          </div>

          <div className="space-y-8">
            {responsibilities?.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {section?.category}
                </h3>
                <ul className="space-y-4">
                  {section?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
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
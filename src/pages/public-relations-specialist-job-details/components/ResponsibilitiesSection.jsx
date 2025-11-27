import React from 'react';
import { CheckCircle } from 'lucide-react';

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      category: 'Media Relations & Outreach',
      items: [
        'Develop and maintain relationships with key journalists, bloggers, and industry influencers',
        'Pitch story ideas and secure media coverage in relevant publications',
        'Organize and coordinate press events, media briefings, and journalist interviews',
        'Monitor media coverage and maintain comprehensive media contact database'
      ]
    },
    {
      category: 'Content Development',
      items: [
        'Write and distribute press releases, media advisories, and fact sheets',
        'Create compelling media kits and backgrounders for company announcements',
        'Develop thought leadership content for executive positioning',
        'Collaborate with content team on brand storytelling initiatives'
      ]
    },
    {
      category: 'Brand Management',
      items: [
        'Monitor brand mentions and sentiment across media channels',
        'Develop crisis communication protocols and response strategies',
        'Ensure consistent messaging across all external communications',
        'Track and analyze PR metrics to measure campaign effectiveness'
      ]
    },
    {
      category: 'Strategic Planning',
      items: [
        'Contribute to PR strategy development aligned with business objectives',
        'Identify media opportunities and emerging industry trends',
        'Coordinate PR activities with marketing and social media campaigns',
        'Support executive team with speaking opportunities and media training'
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
              Your role encompasses strategic media relations, compelling content creation, and proactive brand reputation management
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
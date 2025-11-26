import React from 'react';
import { CheckCircle } from 'lucide-react';

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      category: 'Lead Generation & Prospecting',
      items: [
        'Identify and qualify new business opportunities through market research and networking',
        'Develop targeted prospecting strategies to reach decision-makers in key industries',
        'Maintain a robust pipeline of qualified leads using CRM tracking systems',
        'Conduct outreach campaigns via multiple channels (email, phone, social media, events)'
      ]
    },
    {
      category: 'Client Relationship Management',
      items: [
        'Build and maintain strategic relationships with clients and key stakeholders',
        'Conduct needs assessments and consultative sales conversations',
        'Present tailored solutions that address client business challenges',
        'Ensure high levels of client satisfaction and retention through ongoing engagement'
      ]
    },
    {
      category: 'Market Expansion',
      items: [
        'Research and analyze market trends, competitor activities, and industry developments',
        'Identify new market segments and expansion opportunities',
        'Develop go-to-market strategies for new products and services',
        'Collaborate with marketing teams to create compelling value propositions'
      ]
    },
    {
      category: 'Revenue Growth',
      items: [
        'Meet and exceed monthly/quarterly revenue targets and KPIs',
        'Negotiate contracts and close deals aligned with company profitability goals',
        'Track and report on sales metrics, conversion rates, and revenue forecasts',
        'Identify upselling and cross-selling opportunities within existing accounts'
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
              Drive business growth through strategic initiatives and relationship building
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
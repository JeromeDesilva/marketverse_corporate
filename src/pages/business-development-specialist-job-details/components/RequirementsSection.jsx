import React from 'react';
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const RequirementsSection = () => {
  const requirements = {
    essential: [
      '4+ years of proven business development or B2B sales experience',
      'Strong track record of meeting and exceeding sales targets',
      'Excellent communication, negotiation, and presentation skills',
      'Proficiency with CRM systems (Salesforce, HubSpot, or similar)',
      'Deep understanding of sales methodologies and consultative selling',
      'Strong analytical skills with ability to interpret market data',
      'Self-motivated with ability to work independently and as part of a team'
    ],
    preferred: [
      'Bachelor\'s degree in Business, Marketing, or related field',
      'Experience in marketing services or agency environment',
      'Industry certifications (e.g., Certified Business Development Professional)',
      'Proven experience with account-based marketing (ABM) strategies',
      'Strong networking skills with established industry connections',
      'Experience with contract negotiation and deal structuring',
      'Proficiency in data analysis and reporting tools'
    ],
    skills: [
      { icon: <GraduationCap className="w-5 h-5" />, title: 'Sales Acumen', description: 'Strategic sales expertise and deal closing ability' },
      { icon: <Briefcase className="w-5 h-5" />, title: 'Business Insight', description: 'Market analysis and opportunity identification' },
      { icon: <Award className="w-5 h-5" />, title: 'Industry Knowledge', description: 'Marketing services and competitive landscape understanding' },
      { icon: <Users className="w-5 h-5" />, title: 'Relationship Building', description: 'Strategic partnership development and management' }
    ]
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Requirements & Qualifications
            </h2>
            <p className="text-lg text-muted-foreground">
              What we're looking for in our ideal candidate
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Essential Requirements</h3>
              <ul className="space-y-3">
                {requirements?.essential?.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Preferred Qualifications</h3>
              <ul className="space-y-3">
                {requirements?.preferred?.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {requirements?.skills?.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {skill?.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{skill?.title}</h4>
                <p className="text-muted-foreground text-sm">{skill?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
import React from 'react';
import { Award, GraduationCap, Star } from 'lucide-react';

const RequirementsSection = () => {
  const requirements = {
    essential: [
      '4+ years of experience in outreach, partnership management, or sponsor relations',
      'Proven track record of acquiring and managing high-value sponsorships or partnerships',
      'Strong networking abilities and relationship-building skills',
      'Excellent verbal and written communication skills',
      'Experience with CRM systems and partnership management tools',
      'Demonstrated success in negotiations and closing deals',
      'Data-driven approach to campaign optimization and performance tracking',
      'Ability to work independently and manage multiple partnerships simultaneously'
    ],
    preferred: [
      'Bachelor\'s degree in Marketing, Business, Communications, or related field',
      'Experience in marketing agency or B2B marketing environment',
      'Industry certifications (Digital Marketing, Sales, Partnership Management)',
      'Familiarity with marketing automation and analytics platforms',
      'Experience with event sponsorship and brand activation',
      'Public speaking and presentation skills',
      'Understanding of contract law and partnership agreements',
      'Multilingual capabilities (English + additional language)'
    ],
    skills: [
      {
        category: 'Communication',
        items: ['Presentation Skills', 'Negotiation', 'Stakeholder Management', 'Public Speaking']
      },
      {
        category: 'Business Acumen',
        items: ['Strategic Planning', 'Revenue Forecasting', 'Market Analysis', 'Competitive Intelligence']
      },
      {
        category: 'Technical',
        items: ['CRM Platforms', 'Analytics Tools', 'Project Management Software', 'Content Management']
      },
      {
        category: 'Personal',
        items: ['Self-Motivation', 'Adaptability', 'Problem-Solving', 'Time Management']
      }
    ]
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Requirements & Qualifications
            </h2>
            <p className="text-lg text-muted-foreground">
              What we're looking for in an ideal candidate
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-600" aria-label="Award icon indicating essential requirements" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Essential Requirements</h3>
              </div>
              <ul className="space-y-2">
                {requirements?.essential?.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" aria-label="Graduation cap icon representing preferred qualifications" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Preferred Qualifications</h3>
              </div>
              <ul className="space-y-2">
                {requirements?.preferred?.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-600" aria-label="Star icon highlighting key skills" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Key Skills</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {requirements?.skills?.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-2">{skillGroup?.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup?.items?.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
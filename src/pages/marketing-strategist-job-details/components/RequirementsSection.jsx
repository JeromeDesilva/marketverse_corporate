import React from 'react';
import { GraduationCap, Award, Zap } from 'lucide-react';

const RequirementsSection = () => {
  const requirements = {
    required: [
      'Bachelor\'s degree in Marketing, Business, or related field',
      '5+ years of marketing strategy experience in agency or corporate environment',
      'Proven track record of developing successful marketing strategies',
      'Strong analytical skills with proficiency in data analysis tools',
      'Excellent presentation and communication skills',
      'Experience with digital marketing platforms and analytics tools',
      'Strategic thinking with creative problem-solving abilities'
    ],
    preferred: [
      'MBA or Master\'s degree in Marketing or Business Strategy',
      'Certification in digital marketing (Google Analytics, HubSpot, etc.)',
      'Experience in B2B and B2C marketing strategy',
      'Knowledge of marketing automation platforms',
      'Portfolio demonstrating strategic campaign successes',
      'Experience managing cross-functional teams',
      'Familiarity with AI-powered marketing tools'
    ],
    skills: [
      'Strategic planning',
      'Data analysis & insights',
      'Market research',
      'Campaign development',
      'Brand positioning',
      'ROI optimization',
      'Stakeholder management',
      'Creative thinking'
    ]
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Requirements & Qualifications
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            We're seeking analytical minds with strategic vision who can combine data-driven insights with creative marketing excellence.
          </p>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Required Qualifications
                </h3>
              </div>
              <ul className="space-y-3">
                {requirements?.required?.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Preferred Qualifications
                </h3>
              </div>
              <ul className="space-y-3">
                {requirements?.preferred?.map((pref, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary/50 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{pref}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Key Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {requirements?.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
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
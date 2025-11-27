import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const RequirementsSection = () => {
  const requirements = {
    education: [
      'Bachelor\'s degree in Communications, Public Relations, Journalism, or related field',
      'Advanced degree in Communications or Marketing (preferred)',
      'Professional PR certifications (APR, PRCA, or equivalent) highly valued'
    ],
    experience: [
      'Minimum 3+ years of PR or communications experience',
      'Proven track record of securing media coverage in tier-1 and tier-2 publications',
      'Experience managing media relationships and press event coordination',
      'Background in technology, marketing, or B2B PR preferred',
      'Crisis communication experience highly desirable'
    ],
    skills: [
      'Exceptional writing and editing skills with ability to craft compelling narratives',
      'Strong media relations skills with established journalist contacts',
      'Excellent verbal communication and presentation abilities',
      'Strategic thinking with ability to align PR with business objectives',
      'Proficiency in PR tools (Cision, Meltwater, or similar platforms)',
      'Understanding of SEO and digital media landscape',
      'Crisis management and issues response capabilities',
      'Project management and ability to handle multiple priorities'
    ]
  };

  const preferredQualifications = [
    'Portfolio demonstrating successful media placements and PR campaigns',
    'Experience with influencer relations and social media amplification',
    'Knowledge of Indian and international media landscape',
    'Bilingual capabilities (English + Hindi/regional language)',
    'Background in agency or in-house PR roles',
    'Event planning and execution experience'
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualifications & Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're looking for experienced PR professionals with strong media relationships and excellent storytelling abilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              <ul className="space-y-3">
                {requirements?.education?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Experience</h3>
              </div>
              <ul className="space-y-3">
                {requirements?.experience?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Required Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {requirements?.skills?.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Preferred Qualifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {preferredQualifications?.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
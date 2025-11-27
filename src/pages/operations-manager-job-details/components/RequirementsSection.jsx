import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const RequirementsSection = () => {
  const requirements = {
    education: [
      'Bachelor\'s degree in Business Administration, Operations Management, or related field',
      'MBA or Master\'s degree in Operations Management preferred',
      'Professional certifications (Six Sigma, PMP, Lean) highly valued'
    ],
    experience: [
      'Minimum 5+ years of operations management experience',
      'Proven track record of process optimization and efficiency improvements',
      'Experience managing cross-functional teams and projects',
      'Background in technology or marketing services industry preferred',
      'Demonstrated success in scaling operations for growing organizations'
    ],
    skills: [
      'Strong analytical and problem-solving abilities',
      'Excellent project management and organizational skills',
      'Data-driven decision making with proficiency in analytics tools',
      'Leadership skills with ability to motivate and develop teams',
      'Process improvement methodologies (Lean, Six Sigma, Agile)',
      'Budget management and financial planning capabilities',
      'Excellent communication and stakeholder management',
      'Proficiency in operations management software and tools'
    ]
  };

  const preferredQualifications = [
    'Experience with digital transformation and automation initiatives',
    'Knowledge of CRM and project management platforms',
    'Background in managing remote and distributed teams',
    'Change management certification or experience',
    'Understanding of marketing agency operations',
    'Experience with vendor and supplier management'
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
              We're looking for experienced operations leaders with strong analytical skills and proven track record in process optimization
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
import React from 'react';
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const RequirementsSection = () => {
  const requirements = {
    essential: [
      '3+ years of administrative or office management experience',
      'Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)',
      'Excellent written and verbal communication skills',
      'Strong organizational and multitasking abilities',
      'High attention to detail and accuracy',
      'Ability to maintain confidentiality and handle sensitive information',
      'Professional demeanor and customer service orientation'
    ],
    preferred: [
      'Associate\'s or Bachelor\'s degree in Business Administration or related field',
      'Experience with project management or collaboration tools (Asana, Slack, etc.)',
      'Familiarity with document management systems',
      'Experience in marketing agency or creative environment',
      'Knowledge of basic accounting and budget management',
      'Event planning and coordination experience',
      'Bilingual language skills (Spanish, Mandarin, etc.)'
    ],
    skills: [
      { icon: <GraduationCap className="w-5 h-5" />, title: 'Technical Proficiency', description: 'MS Office, G Suite, and admin software expertise' },
      { icon: <Briefcase className="w-5 h-5" />, title: 'Organization', description: 'Multi-tasking and priority management skills' },
      { icon: <Award className="w-5 h-5" />, title: 'Communication', description: 'Professional written and verbal communication' },
      { icon: <Users className="w-5 h-5" />, title: 'Interpersonal Skills', description: 'Team collaboration and customer service focus' }
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
              Essential skills and experience for success in this role
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
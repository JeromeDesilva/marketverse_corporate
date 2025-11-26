import React from 'react';
import { FileText, Users, MessageCircle, CheckCircle } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Apply online with your resume, cover letter, and portfolio (if applicable). Our team reviews every application carefully.',
      timeline: 'Day 1',
      alt: 'Online job application form with resume upload interface'
    },
    {
      icon: Users,
      title: 'Initial Screening',
      description: 'Our HR team will reach out for a brief phone screening to discuss your experience and career goals.',
      timeline: 'Week 1',
      alt: 'HR recruiter conducting phone screening interview at desk'
    },
    {
      icon: MessageCircle,
      title: 'Team Interview',
      description: 'Meet with the hiring manager and team members to discuss the role, projects, and culture fit.',
      timeline: 'Week 2',
      alt: 'Candidate interviewing with team members in conference room'
    },
    {
      icon: CheckCircle,
      title: 'Final Decision',
      description: 'Receive your offer and join our team! We\'ll guide you through onboarding and set you up for success.',
      timeline: 'Week 3',
      alt: 'New employee signing offer letter and celebrating with team'
    }
  ];

  const tips = [
    {
      title: 'Showcase Your Work',
      description: 'Include relevant portfolio pieces or campaign examples that demonstrate your skills and impact.'
    },
    {
      title: 'Be Authentic',
      description: 'We value genuine personalities. Be yourself and let your passion for marketing shine through.'
    },
    {
      title: 'Ask Questions',
      description: 'Interviews are a two-way street. Ask about team culture, growth opportunities, and day-to-day work.'
    },
    {
      title: 'Prepare Examples',
      description: 'Have specific examples ready of challenges you\'ve faced, solutions you\'ve implemented, and results achieved.'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Application Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A straightforward, transparent process designed to find the perfect mutual fit
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps?.map((step, index) => {
              const IconComponent = step?.icon;
              return (
                <div key={index} className="relative">
                  {index < steps?.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary/20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40" />
                    </div>
                  )}
                  <div className="bg-card border border-border rounded-xl p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">
                      {step?.timeline}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {step?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-background rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Tips for Success
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tips?.map((tip, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      {tip?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {tip?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
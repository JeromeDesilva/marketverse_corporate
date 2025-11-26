import React from 'react';
import { ArrowRight, Send, Phone } from 'lucide-react';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const handleApplyNow = () => {
    const applicationSection = document.getElementById('application-process');
    applicationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickActions = [
    {
      icon: Send,
      title: 'Apply Now',
      description: 'Submit your application and join our team',
      action: handleApplyNow,
      buttonText: 'Start Application',
      variant: 'default',
      alt: 'Send icon for submitting job application'
    },
    {
      icon: Phone,
      title: 'Have Questions?',
      description: 'Contact our HR team for more information',
      action: () => window.location.href = '/contact',
      buttonText: 'Contact HR',
      variant: 'outline',
      alt: 'Phone icon for contacting HR department'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join Marketverse?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the next step in your career and become part of a team that's transforming the marketing landscape. We're excited to hear from you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {quickActions?.map((action, index) => {
              const IconComponent = action?.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-primary" aria-label={action?.alt} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {action?.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {action?.description}
                  </p>
                  <Button
                    variant={action?.variant}
                    size="lg"
                    onClick={action?.action}
                    className="w-full"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {action?.buttonText}
                  </Button>
                </div>
              );
            })}
          </div>
          
          <div className="bg-card border border-primary/20 rounded-xl p-8 text-center">
            <p className="text-muted-foreground mb-4">
              Not the right position for you? Explore all our open positions on the careers page.
            </p>
            <Button
              variant="outline"
              size="default"
              onClick={() => window.location.href = '/careers'}
            >
              View All Positions
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Marketverse is an equal opportunity employer committed to diversity and inclusion. 
              We encourage applications from candidates of all backgrounds and experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
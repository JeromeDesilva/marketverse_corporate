import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const benefits = [
    'Entry-level position with clear growth path',
    'Comprehensive training and mentorship',
    'Competitive INR salary with benefits',
    'Flexible work arrangements',
    'Supportive team environment'
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Administrative Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Marketverse as an Administrative Specialist and build your professional foundation with opportunities for growth
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
            {benefits?.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const applicationSection = document.getElementById('application-process');
                applicationSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact HR Team
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Questions about the role? Reach out to our HR team at{' '}
            <a href="mailto:careers@marketverse.com" className="text-primary hover:underline">
              careers@marketverse.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
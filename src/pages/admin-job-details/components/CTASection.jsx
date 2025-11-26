import React from 'react';
import { Send, MessageCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Administrative Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be the organizational backbone that keeps Marketverse running smoothly. Apply today or reach out to learn more about this essential role.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const applicationSection = document.getElementById('application-process');
                applicationSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              iconName="Send"
              iconPosition="right"
            >
              Apply for This Position
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/contact'}
              iconName="MessageCircle"
              iconPosition="right"
            >
              Contact HR Team
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about the role?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:careers@marketverse.com" className="text-primary hover:underline">
                careers@marketverse.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a href="tel:+15555551234" className="text-primary hover:underline">
                +1 (555) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import React from 'react';
import { Send, ArrowUp } from 'lucide-react';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToApplication = () => {
    const applicationSection = document.getElementById('application-process');
    applicationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Shape Marketing Excellence?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Join our strategy team and drive innovative marketing solutions for leading brands. Apply today and become part of a culture that values strategic thinking, data-driven insights, and creative innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="default"
              size="lg"
              iconName="Send"
              iconPosition="right"
              onClick={handleScrollToApplication}
            >
              Apply for This Position
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/careers'}
            >
              Explore Other Roles
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about this role or want to discuss strategic opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a
                href="/contact"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Contact Strategy Team →
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a
                href="/careers"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                View All Positions →
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <button
                onClick={handleScrollToTop}
                className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center justify-center gap-1"
              >
                Back to Top <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
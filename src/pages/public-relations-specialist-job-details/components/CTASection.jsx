import React from 'react';
import { Send, FileText, HelpCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Shape Brand Stories?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our PR team and help establish Marketverse as a leading voice in the marketing technology industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Apply Now</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Submit your application with portfolio and writing samples
              </p>
              <Button
                variant="default"
                size="sm"
                onClick={() => window.location.href = '/contact'}
                className="w-full"
              >
                Start Application
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Download JD</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get complete job description and requirements
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert('Job description download initiated')}
                className="w-full"
              >
                Download PDF
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Have Questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with our recruitment team
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = '/contact'}
                className="w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Not Ready to Apply Yet?
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our careers newsletter to stay updated on PR opportunities and industry insights
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                variant="default"
                size="default"
                type="submit"
                onClick={(e) => {
                  e?.preventDefault();
                  alert('Thank you for subscribing!');
                }}
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Marketverse is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
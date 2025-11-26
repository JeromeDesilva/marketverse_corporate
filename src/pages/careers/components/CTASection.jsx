import React from 'react';
import { Mail } from 'lucide-react';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't see a perfect match? Send us your resume and tell us about your career aspirations. We're always looking for talented individuals to join our growing team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Search"
                iconPosition="left"
                onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-white/90"
              >
                Browse Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => window.location.href = 'mailto:careers@marketverse.com'}
                className="border-white text-white hover:bg-white/10"
              >
                Send Us Your Resume
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 mb-4">
                Questions about careers at Marketverse?
              </p>
              <a
                href="mailto:careers@marketverse.com"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-white/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                careers@marketverse.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
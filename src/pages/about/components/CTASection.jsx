import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-innovation)] to-[var(--color-primary)] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-[var(--color-innovation)] opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Brand?
        </h2>

        <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
          Join the brands that trust Marketverse to make their growth inevitable.
          Let's discuss how our 100+ man-years of expertise can accelerate your success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => navigate('/contact')}
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90"
          >
            Book Consultation
          </Button>

          <Button
            variant="outline"
            size="lg"
            iconName="FileText"
            iconPosition="left"
            onClick={() => navigate('/case-studies')}
            className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
          >
            View Case Studies
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} color="#E8B931" className="mb-3" />
              <div className="text-white/70 text-sm mb-1">Email Us</div>
              <a href="mailto:hello@marketverse.co.in" className="text-white font-semibold hover:text-[var(--color-secondary)] transition-colors">
                hello@marketverse.in
              </a>
            </div>

            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} color="#E8B931" className="mb-3" />
              <div className="text-white/70 text-sm mb-1">Call Us</div>
              <a href="tel:+919876543210" className="text-white font-semibold hover:text-[var(--color-secondary)] transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} color="#E8B931" className="mb-3" />
              <div className="text-white/70 text-sm mb-1">Visit Us</div>
              <div className="text-white font-semibold">Chennai, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

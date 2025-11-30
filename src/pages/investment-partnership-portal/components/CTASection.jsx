import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+91 86628 41456',
      description: 'Mon-Sat, 9:00 AM - 7:00 PM IST',
      action: 'Call Now'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'invest@marketverse.co.in',
      description: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: 'MapPin',
      title: 'Visit Office',
      value: 'Chennai, India',
      description: 'By appointment only',
      action: 'Get Directions'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-innovation relative overflow-hidden">
      <div className="geometric-pattern absolute inset-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Partner with India's Marketing Leader?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Join 50+ successful investors who have achieved exceptional returns through strategic partnerships with Marketverse
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods?.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Icon name={method?.icon} size={24} color="#FFFFFF" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{method?.title}</h3>
              <p className="text-xl font-bold text-secondary mb-2">{method?.value}</p>
              <p className="text-sm text-white/80 mb-4">{method?.description}</p>
              <button className="text-sm font-semibold text-white hover:text-secondary transition-colors flex items-center gap-2">
                {method?.action}
                <Icon name="ArrowRight" size={16} color="currentColor" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Schedule Your Strategy Discussion</h3>
              <p className="text-muted-foreground mb-6">
                Book a confidential consultation with our investment team to explore partnership opportunities tailored to your goals
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Personalized Investment Strategy</p>
                    <p className="text-sm text-muted-foreground">Customized partnership model based on your goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Detailed ROI Projections</p>
                    <p className="text-sm text-muted-foreground">Data-driven return estimates with market analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Complete Documentation Review</p>
                    <p className="text-sm text-muted-foreground">Access to all legal and compliance documents</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} color="var(--color-success)" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} color="var(--color-success)" />
                  <span>No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} color="var(--color-success)" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 lg:p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Range</label>
                  <select className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>₹10L - ₹50L</option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹5Cr</option>
                    <option>₹5Cr+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Partnership Model</label>
                  <select className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Equity Partnership</option>
                    <option>Revenue Share</option>
                    <option>Project Co-Investment</option>
                    <option>Market Entry Partnership</option>
                    <option>Not Sure - Need Guidance</option>
                  </select>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Schedule Consultation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/90 mb-4">Trusted by leading investors and international brands</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="text-white font-bold text-lg">Seoul Investment Group</div>
            <div className="text-white font-bold text-lg">Mumbai Angels Network</div>
            <div className="text-white font-bold text-lg">Health Ventures India</div>
            <div className="text-white font-bold text-lg">Global Trade Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
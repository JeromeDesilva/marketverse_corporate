import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DownloadSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      window.open('/assets/korean-super-store-case-study.pdf', '_blank');
    }, 1000);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Icon name="FileText" size={16} color="var(--color-primary)" />
                <span className="text-sm font-semibold text-primary">Detailed Case Study PDF</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Download Complete Case Study
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Get the comprehensive 24-page case study document featuring detailed analysis, additional metrics, implementation frameworks, and exclusive insights from the Korean Super Store transformation journey.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Detailed financial analysis and ROI breakdown</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Complete marketing strategy documentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Implementation timeline and resource allocation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Replicable frameworks for market entry success</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="FileText" size={16} />
                  <span>24 Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Download" size={16} />
                  <span>PDF Format</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Lock" size={16} />
                  <span>Secure Download</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      label="Full Name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData?.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      placeholder="your.email@company.com"
                      value={formData?.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      label="Company Name"
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      value={formData?.company}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Case Study
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By downloading, you agree to receive occasional updates from Marketverse. We respect your privacy and never share your information.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle2" size={32} color="var(--color-success)" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Download Starting...</h3>
                  <p className="text-muted-foreground mb-6">
                    Your case study PDF will download automatically. If it doesn't start, click the button below.
                  </p>
                  <Button
                    variant="outline"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => window.open('/assets/korean-super-store-case-study.pdf', '_blank')}
                  >
                    Download Again
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
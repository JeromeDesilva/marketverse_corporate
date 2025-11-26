import React, { useState } from 'react';
import { Send, Upload, FileText } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ApplicationProcess = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolioUrl: '',
    coverLetter: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target || {};
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    alert('Application submitted successfully! Our strategy team will review your portfolio and contact you soon.');
  };

  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete the application form with your portfolio and strategic thinking samples',
      alt: 'Application submission with portfolio'
    },
    {
      number: 2,
      title: 'Portfolio Review',
      description: 'Our strategy team evaluates your work samples and strategic approach (3-5 business days)',
      alt: 'Portfolio and work sample evaluation'
    },
    {
      number: 3,
      title: 'Case Study Assessment',
      description: 'Complete a strategic marketing case study to demonstrate problem-solving abilities',
      alt: 'Strategic case study challenge'
    },
    {
      number: 4,
      title: 'Interview Process',
      description: 'Phone screening, strategy presentation, and team interviews with senior strategists',
      alt: 'Multi-stage interview process'
    },
    {
      number: 5,
      title: 'Offer & Onboarding',
      description: 'Receive offer package and begin strategic onboarding program',
      alt: 'Job offer and strategic onboarding'
    }
  ];

  return (
    <section id="application-process" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Application Process
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Our comprehensive hiring process ensures we find strategists who combine analytical excellence with creative innovation.
          </p>

          <div className="mb-12">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {steps?.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm relative z-10">
                      {step?.number}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Submit Your Application
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData?.fullName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Years of Strategy Experience"
                  name="experience"
                  type="number"
                  placeholder="5"
                  value={formData?.experience}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Input
                label="Portfolio URL (Required)"
                name="portfolioUrl"
                type="url"
                placeholder="https://yourportfolio.com"
                value={formData?.portfolioUrl}
                onChange={handleInputChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cover Letter & Strategic Approach
                </label>
                <textarea
                  name="coverLetter"
                  rows="6"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Describe your strategic approach, key campaign successes, and why you're interested in this role..."
                  value={formData?.coverLetter}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">Upload Resume & Work Samples (PDF)</p>
                <p className="text-sm text-muted-foreground mb-4">Include case studies or campaign examples</p>
                <input
                  type="file"
                  accept=".pdf"
                  multiple
                  className="hidden"
                  id="documents-upload"
                />
                <label
                  htmlFor="documents-upload"
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  Choose Files
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the processing of my personal data and confirm that all information provided is accurate
                </label>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="right"
                className="w-full"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
import React, { useState } from 'react';
import { Upload, FileText, Send, CheckCircle2 } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ApplicationProcess = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolioUrl: '',
    yearsExperience: '',
    currentCompany: '',
    expectedSalary: '',
    availabilityDate: '',
    coverLetter: '',
    referralSource: ''
  });

  const [files, setFiles] = useState({
    resume: null,
    portfolio: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, fileType) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Application submitted:', { formData, files });
    alert('Application submitted successfully! We\'ll review your application and get back to you within 5-7 business days.');
  };

  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete the form below with your details and upload required documents',
      icon: Send,
      alt: 'Send icon representing application submission step'
    },
    {
      number: 2,
      title: 'Initial Screening',
      description: 'Our team reviews your application and experience (2-3 business days)',
      icon: FileText,
      alt: 'Document icon representing application screening process'
    },
    {
      number: 3,
      title: 'Interview Process',
      description: 'Phone screen, video interview with hiring manager, and final team meeting',
      icon: CheckCircle2,
      alt: 'Checkmark icon representing successful interview completion'
    },
    {
      number: 4,
      title: 'Offer & Onboarding',
      description: 'Receive offer letter and begin comprehensive onboarding program',
      icon: CheckCircle2,
      alt: 'Checkmark icon representing offer acceptance and onboarding'
    }
  ];

  return (
    <section id="application-process" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow our streamlined hiring process and join the Marketverse team
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {steps?.map((step) => {
              const IconComponent = step?.icon;
              return (
                <div key={step?.number} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" aria-label={step?.alt} />
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                    {step?.number}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step?.title}</h3>
                  <p className="text-sm text-muted-foreground">{step?.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Submit Your Application</h3>
            
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
                
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="LinkedIn Profile"
                  name="linkedIn"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData?.linkedIn}
                  onChange={handleInputChange}
                />
                
                <Input
                  label="Years of Experience"
                  name="yearsExperience"
                  type="number"
                  placeholder="5"
                  value={formData?.yearsExperience}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="Current Company"
                  name="currentCompany"
                  type="text"
                  placeholder="Current Employer"
                  value={formData?.currentCompany}
                  onChange={handleInputChange}
                />
                
                <Input
                  label="Expected Salary"
                  name="expectedSalary"
                  type="text"
                  placeholder="$70,000"
                  value={formData?.expectedSalary}
                  onChange={handleInputChange}
                />
                
                <Input
                  label="Availability Date"
                  name="availabilityDate"
                  type="date"
                  value={formData?.availabilityDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Input
                label="Portfolio URL (Optional)"
                name="portfolioUrl"
                type="url"
                placeholder="https://yourportfolio.com"
                value={formData?.portfolioUrl}
                onChange={handleInputChange}
              />
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  value={formData?.coverLetter}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="referralSource"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData?.referralSource}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="indeed">Indeed</option>
                  <option value="company-website">Company Website</option>
                  <option value="referral">Employee Referral</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Resume/CV (Required)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'resume')}
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                    >
                      <Upload className="w-5 h-5 text-muted-foreground" aria-label="Upload icon for resume submission" />
                      <span className="text-sm text-muted-foreground">
                        {files?.resume ? files?.resume?.name : 'Upload Resume'}
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Portfolio/Work Samples (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.zip"
                      onChange={(e) => handleFileChange(e, 'portfolio')}
                      className="hidden"
                      id="portfolio-upload"
                    />
                    <label
                      htmlFor="portfolio-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                    >
                      <Upload className="w-5 h-5 text-muted-foreground" aria-label="Upload icon for portfolio submission" />
                      <span className="text-sm text-muted-foreground">
                        {files?.portfolio ? files?.portfolio?.name : 'Upload Portfolio'}
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX, or ZIP (Max 10MB)</p>
                </div>
              </div>
              
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  By submitting this application, you agree to our data processing practices as outlined in our Privacy Policy. We'll keep your information confidential and use it solely for recruitment purposes.
                </p>
              </div>
              
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
              >
                Submit Application
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Questions about the position? <a href="/contact" className="text-primary hover:underline">Contact our HR team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
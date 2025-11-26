import React, { useState } from 'react';
import { FileText, Users, Target, Award, Send } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ApplicationProcess = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    coverLetter: ''
  });

  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Submit Application',
      description: 'Complete the application form with your resume, portfolio, and cover letter',
      duration: '15-20 minutes'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Initial Screening',
      description: 'Phone interview with our HR team to assess cultural fit and basic qualifications',
      duration: '30 minutes'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Sales Assessment',
      description: 'Present a business development strategy and participate in role-play scenarios',
      duration: '1-2 hours'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Final Interview',
      description: 'Meet with leadership team and discuss growth strategies and commission structure',
      duration: '1 hour'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    window.location.href = '/contact';
  };

  return (
    <section id="application-process" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Multi-stage evaluation with sales assessments and growth strategy presentations
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {steps?.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  {step?.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {index + 1}. {step?.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{step?.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{step?.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Apply Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="fullName"
                  label="Full Name"
                  placeholder="John Doe"
                  value={formData?.fullName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="tel"
                  name="phone"
                  label="Phone Number"
                  placeholder="+1 (555) 000-0000"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="url"
                  name="portfolio"
                  label="LinkedIn Profile / Portfolio"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData?.portfolio}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cover Letter / Why You're a Great Fit
                </label>
                <textarea
                  name="coverLetter"
                  rows="6"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Tell us about your business development experience and why you're excited about this opportunity..."
                  value={formData?.coverLetter}
                  onChange={handleInputChange}
                  required
                />
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
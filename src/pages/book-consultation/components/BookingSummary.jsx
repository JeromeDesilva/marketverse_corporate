import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BookingSummary = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectScope: '',
    budgetRange: '',
    challenges: '',
    additionalNotes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e?.target || {};
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectScope: '',
        budgetRange: '',
        challenges: '',
        additionalNotes: ''
      });
    }, 3000);
  };

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={40} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Consultation Booked Successfully!
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          We've sent a confirmation email with meeting details and a calendar invitation. 
          Looking forward to speaking with you!
        </p>
        <div className="bg-primary/10 rounded-lg p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-2">
            <strong className="text-foreground">What's Next?</strong>
          </p>
          <ul className="text-left space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              Check your email for meeting link and calendar invitation
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              Prepare any questions or materials you'd like to discuss
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              Need to reschedule? Use the link in your confirmation email
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Complete Your Booking
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tell us a bit about yourself and your marketing needs so we can prepare for a productive conversation.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="bg-card rounded-xl border border-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="User" size={24} className="text-primary" />
                Contact Information
              </h3>
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData?.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="john@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company Name
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData?.company}
                onChange={handleInputChange}
                placeholder="Your Company"
              />
            </div>

            {/* Project Details */}
            <div className="md:col-span-2 mt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Briefcase" size={24} className="text-primary" />
                Project Details
              </h3>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="projectScope" className="block text-sm font-medium text-foreground mb-2">
                Project Scope *
              </label>
              <textarea
                id="projectScope"
                name="projectScope"
                value={formData?.projectScope}
                onChange={handleInputChange}
                placeholder="Briefly describe what you're looking to achieve with your marketing..."
                rows={4}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>

            <div>
              <label htmlFor="budgetRange" className="block text-sm font-medium text-foreground mb-2">
                Budget Range *
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData?.budgetRange}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              >
                <option value="">Select budget range</option>
                {budgetRanges?.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="challenges" className="block text-sm font-medium text-foreground mb-2">
                Main Marketing Challenges
              </label>
              <Input
                id="challenges"
                name="challenges"
                type="text"
                value={formData?.challenges}
                onChange={handleInputChange}
                placeholder="e.g., Low conversion rates, brand awareness"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-foreground mb-2">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData?.additionalNotes}
                onChange={handleInputChange}
                placeholder="Any specific topics or questions you'd like to cover during the consultation?"
                rows={3}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>
          </div>

          {/* Booking Summary */}
          <div className="mt-8 p-6 bg-primary/10 rounded-lg">
            <h4 className="font-semibold text-foreground mb-3">Booking Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Consultation Type:</span>
                <span className="font-medium text-foreground">60-Min Strategy Session</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium text-foreground">
                  {new Date()?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="font-medium text-foreground">2:00 PM (Your Local Time)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platform:</span>
                <span className="font-medium text-foreground">Google Meet</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              iconName="Calendar"
              iconPosition="left"
            >
              Confirm Booking
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => window.history?.back()}
            >
              Go Back
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            By booking, you agree to our{' '}
            <a href="/terms-of-service" className="text-primary hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingSummary;
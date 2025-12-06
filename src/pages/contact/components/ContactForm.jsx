import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    budget: '',
    message: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inquiryTypeOptions = [
    { value: 'brand-building', label: 'Brand Building & Strategy' },
    { value: 'digital-marketing', label: 'Digital Marketing Services' },
    { value: 'market-entry', label: 'Market Entry & Expansion' },
    { value: 'import-sourcing', label: 'Import & Sourcing Solutions' },
    { value: 'investment', label: 'Investment Partnership' },
    { value: 'career', label: 'Career Opportunities' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const budgetOptions = [
    { value: 'under-5l', label: 'Under ₹5 Lakhs' },
    { value: '5l-10l', label: '₹5-10 Lakhs' },
    { value: '10l-25l', label: '₹10-25 Lakhs' },
    { value: '25l-50l', label: '₹25-50 Lakhs' },
    { value: 'above-50l', label: 'Above ₹50 Lakhs' },
    { value: 'flexible', label: 'Flexible / To Be Discussed' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors?.[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) newErrors.fullName = 'Full name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.email))
      newErrors.email = 'Please enter a valid email address';

    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData?.phone?.replace(/\s/g, '')))
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';

    if (!formData?.inquiryType)
      newErrors.inquiryType = 'Please select an inquiry type';

    if (!formData?.message?.trim()) newErrors.message = 'Please provide details about your inquiry';
    else if (formData?.message?.trim()?.length < 20)
      newErrors.message = 'Please provide at least 20 characters';

    if (!formData?.agreeToTerms)
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        budget: '',
        message: '',
        agreeToTerms: false
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle2" size={40} color="var(--color-success)" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Thank You for Reaching Out!</h3>
          <p className="text-muted-foreground mb-6">
            We've received your inquiry and our team will get back to you within 24 hours.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setSubmitSuccess(false)}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3">Get in Touch</h2>
        <p className="text-muted-foreground">
          Fill out the form below and our team will respond within 24 hours. All fields marked with * are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" type="text" name="fullName" placeholder="Enter your full name"
            value={formData?.fullName} onChange={handleChange} error={errors?.fullName} required />
          <Input label="Email Address" type="email" name="email" placeholder="your.email@company.com"
            value={formData?.email} onChange={handleChange} error={errors?.email} required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Phone Number" type="tel" name="phone" placeholder="9876543210"
            value={formData?.phone} onChange={handleChange} error={errors?.phone}
            description="10-digit Indian mobile number" required />
          <Input label="Company Name" type="text" name="company"
            placeholder="Your company name (optional)"
            value={formData?.company} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select label="Inquiry Type" placeholder="Select inquiry type" options={inquiryTypeOptions}
            value={formData?.inquiryType} onChange={(value) => handleSelectChange('inquiryType', value)}
            error={errors?.inquiryType} required />
          <Select label="Project Budget" placeholder="Select budget range" options={budgetOptions}
            value={formData?.budget} onChange={(value) => handleSelectChange('budget', value)} 
            description="Helps us provide relevant solutions" />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Tell us about your project…"
            value={formData?.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${
              errors?.message ? 'border-error' : 'border-border'
            }`}
          />
          {errors?.message && (
            <p className="mt-2 text-sm text-error flex items-center gap-1">
              <Icon name="AlertCircle" size={14} />
              {errors?.message}
            </p>
          )}
        </div>

        {/* UPDATED CHECKBOX WITH LINKS */}
        <div>
          <Checkbox
            checked={formData?.agreeToTerms}
            onChange={handleChange}
            name="agreeToTerms"
            required
            error={errors?.agreeToTerms}
            label={
              <span className="text-sm text-foreground">
                I agree to the&nbsp;
                <a
                  href="/terms-and-conditions"
                  className="text-primary underline hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
                &nbsp;and&nbsp;
                <a
                  href="/privacy-policy"
                  className="text-primary underline hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </span>
            }
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button type="submit" variant="default" size="lg" loading={isSubmitting}
            iconName="Send" iconPosition="right" className="flex-1">
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>

          <Button type="button" variant="outline" size="lg"
            onClick={() => {
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                inquiryType: '',
                budget: '',
                message: '',
                agreeToTerms: false
              });
              setErrors({});
            }}
            iconName="RotateCcw" iconPosition="left">
            Reset Form
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

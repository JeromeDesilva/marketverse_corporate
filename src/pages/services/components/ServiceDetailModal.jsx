import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ServiceDetailModal = ({ service, onClose }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e?.target?.name]: e?.target?.value });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
    onClose();
  };

  const handleSelectPlan = (tier) => {
    navigate('/payment-gateway', {
      state: { service, tier }
    });
    onClose();
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'methodology', label: 'Methodology', icon: 'GitBranch' },
    { id: 'deliverables', label: 'Deliverables', icon: 'Package' },
    { id: 'pricing', label: 'Investment', icon: 'DollarSign' },
    { id: 'contact', label: 'Get Started', icon: 'MessageSquare' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e?.stopPropagation()}>
        <div className="bg-gradient-to-r from-[#1B365D] to-[#7C3AED] p-6 lg:p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Icon name={service?.icon} size={32} color="#FFFFFF" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{service?.title}</h2>
                <p className="text-white/80">{service?.tagline}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Icon name="X" size={20} color="#FFFFFF" />
            </button>
          </div>
        </div>

        <div className="border-b border-[#E5E7EB]">
          <div className="flex overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab?.id
                    ? 'text-[#1B365D] border-b-2 border-[#1B365D]'
                    : 'text-[#4A5568] hover:text-[#1B365D]'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-240px)]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Service Overview</h3>
                <p className="text-[#4A5568] leading-relaxed mb-6">{service?.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">Key Benefits</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {service?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-[#F3F4F6] rounded-lg">
                      <Icon name="Zap" size={20} color="#E8B931" className="flex-shrink-0 mt-0.5" />
                      <span className="text-[#1A1A1A]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">Ideal For</h4>
                <div className="flex flex-wrap gap-2">
                  {service?.idealFor?.map((target, index) => (
                    <span key={index} className="px-4 py-2 bg-[#1B365D]/5 text-[#1B365D] rounded-full text-sm font-medium">
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Our Proven Process</h3>
              <div className="space-y-4">
                {service?.methodology?.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1B365D] to-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2">{step?.phase}</h4>
                      <p className="text-[#4A5568] mb-3">{step?.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                        <Icon name="Clock" size={16} />
                        <span>{step?.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">What You'll Receive</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service?.deliverables?.map((item, index) => (
                  <div key={index} className="p-4 border-2 border-[#E5E7EB] rounded-lg hover:border-[#1B365D] transition-colors">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} color="#2E8B57" className="flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-[#1A1A1A] mb-1">{item?.title}</h4>
                        <p className="text-sm text-[#4A5568]">{item?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Investment Options</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {service?.pricingTiers?.map((tier, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 ${
                      tier?.recommended
                        ? 'border-[#1B365D] bg-gradient-to-br from-[#1B365D]/5 to-[#7C3AED]/5'
                        : 'border-[#E5E7EB]'
                    }`}
                  >
                    {tier?.recommended && (
                      <span className="inline-block bg-gradient-to-r from-[#E8B931] to-[#FF6B35] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Recommended
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{tier?.name}</h4>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#1B365D]">₹{tier?.price?.toLocaleString('en-IN')}</span>
                      <span className="text-[#4A5568]">{tier?.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {tier?.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} color="#2E8B57" className="flex-shrink-0 mt-0.5" />
                          <span className="text-[#1A1A1A]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={tier?.recommended ? 'default' : 'outline'} 
                      fullWidth
                      onClick={() => handleSelectPlan(tier)}
                    >
                      Select Plan
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Ready to Get Started?</h3>
              <p className="text-[#4A5568] mb-6">Fill out the form below and our team will contact you within 24 hours to discuss your project.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData?.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData?.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    value={formData?.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Project Details</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project requirements..."
                    value={formData?.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#E5E7EB] rounded-lg focus:border-[#1B365D] focus:outline-none transition-colors"
                    required
                  ></textarea>
                </div>

                <Button type="submit" variant="default" fullWidth iconName="Send" iconPosition="right">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
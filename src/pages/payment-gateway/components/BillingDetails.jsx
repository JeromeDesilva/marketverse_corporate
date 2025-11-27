import React from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const BillingDetails = ({ billingInfo, onChange, onContinue }) => {
  const handleSubmit = (e) => {
    e?.preventDefault();
    onContinue();
  };

  const isFormValid = () => {
    return billingInfo?.fullName && billingInfo?.email && billingInfo?.phone && 
           billingInfo?.address && billingInfo?.city && billingInfo?.state && billingInfo?.pincode;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Billing Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={billingInfo?.fullName}
            onChange={onChange}
            required
          />
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="john@company.com"
            value={billingInfo?.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={billingInfo?.phone}
            onChange={onChange}
            required
          />
          <Input
            label="Company Name (Optional)"
            type="text"
            name="company"
            placeholder="Your Company Pvt. Ltd."
            value={billingInfo?.company}
            onChange={onChange}
          />
        </div>

        <Input
          label="Billing Address"
          type="text"
          name="address"
          placeholder="Street address, Building name, Floor"
          value={billingInfo?.address}
          onChange={onChange}
          required
        />

        <div className="grid md:grid-cols-3 gap-4">
          <Input
            label="City"
            type="text"
            name="city"
            placeholder="Mumbai"
            value={billingInfo?.city}
            onChange={onChange}
            required
          />
          <Input
            label="State"
            type="text"
            name="state"
            placeholder="Maharashtra"
            value={billingInfo?.state}
            onChange={onChange}
            required
          />
          <Input
            label="Pincode"
            type="text"
            name="pincode"
            placeholder="400001"
            value={billingInfo?.pincode}
            onChange={onChange}
            required
          />
        </div>

        <Input
          label="GST Number (Optional)"
          type="text"
          name="gst"
          placeholder="22AAAAA0000A1Z5"
          value={billingInfo?.gst}
          onChange={onChange}
        />

        <div className="flex items-start gap-3 p-4 bg-[#FFF3E0] rounded-lg">
          <Icon name="Info" size={20} color="#FF6B35" className="flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#1A1A1A]">
            Please ensure all information is accurate. This will be used for invoice generation and project communication.
          </p>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          disabled={!isFormValid()}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Continue to Payment
        </Button>
      </form>
    </div>
  );
};

export default BillingDetails;
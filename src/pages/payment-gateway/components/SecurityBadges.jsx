import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadges = () => {
  const badges = [
    { icon: 'Shield', label: 'SSL Secured', description: '256-bit encryption' },
    { icon: 'CheckCircle2', label: 'PCI DSS Compliant', description: 'Payment security certified' },
    { icon: 'Lock', label: 'Secure Checkout', description: 'Your data is protected' }
  ];

  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 text-center">
        Trusted & Secure Payment Processing
      </h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        {badges?.map((badge, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-[#F3F4F6] rounded-lg">
            <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-3">
              <Icon name={badge?.icon} size={24} color="#2E8B57" />
            </div>
            <p className="font-semibold text-[#1A1A1A] text-sm mb-1">{badge?.label}</p>
            <p className="text-xs text-[#4A5568]">{badge?.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] rounded-lg">
          <Icon name="CreditCard" size={20} color="#1B365D" />
          <span className="text-sm text-[#1A1A1A] font-medium">Visa</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] rounded-lg">
          <Icon name="CreditCard" size={20} color="#1B365D" />
          <span className="text-sm text-[#1A1A1A] font-medium">Mastercard</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] rounded-lg">
          <Icon name="CreditCard" size={20} color="#1B365D" />
          <span className="text-sm text-[#1A1A1A] font-medium">RuPay</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] rounded-lg">
          <Icon name="Smartphone" size={20} color="#1B365D" />
          <span className="text-sm text-[#1A1A1A] font-medium">UPI</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityBadges;
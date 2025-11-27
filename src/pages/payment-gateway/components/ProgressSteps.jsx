import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Billing Details', icon: 'FileText' },
    { number: 2, label: 'Payment Method', icon: 'CreditCard' },
    { number: 3, label: 'Review & Confirm', icon: 'CheckCircle2' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between relative">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.number}>
            <div className="flex flex-col items-center relative z-10 flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentStep >= step?.number
                    ? 'bg-gradient-to-br from-[#1B365D] to-[#7C3AED] text-white'
                    : 'bg-[#E5E7EB] text-[#9CA3AF]'
                }`}
              >
                {currentStep > step?.number ? (
                  <Icon name="Check" size={24} color="#FFFFFF" />
                ) : (
                  <Icon name={step?.icon} size={24} color={currentStep >= step?.number ? '#FFFFFF' : '#9CA3AF'} />
                )}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  currentStep >= step?.number ? 'text-[#1B365D]' : 'text-[#9CA3AF]'
                }`}
              >
                {step?.label}
              </span>
            </div>
            
            {index < steps?.length - 1 && (
              <div className="flex-1 h-1 mx-4 relative" style={{ top: '-20px' }}>
                <div className={`h-full rounded transition-all ${
                  currentStep > step?.number ? 'bg-gradient-to-r from-[#1B365D] to-[#7C3AED]' : 'bg-[#E5E7EB]'
                }`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
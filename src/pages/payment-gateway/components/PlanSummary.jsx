import React from 'react';
import Icon from '../../../components/AppIcon';

const PlanSummary = ({ service, tier, pricing }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
      <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3 p-4 bg-[#F3F4F6] rounded-lg">
          <div className="w-12 h-12 bg-gradient-to-br from-[#1B365D] to-[#7C3AED] rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name={service?.icon} size={24} color="#FFFFFF" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-[#1A1A1A] mb-1">{service?.title}</h3>
            <p className="text-sm text-[#4A5568]">{tier?.name} Plan</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-[#1A1A1A] text-sm">Included Features:</h4>
          <ul className="space-y-2">
            {tier?.features?.slice(0, 4)?.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Icon name="Check" size={16} color="#2E8B57" className="flex-shrink-0 mt-0.5" />
                <span className="text-[#4A5568]">{feature}</span>
              </li>
            ))}
            {tier?.features?.length > 4 && (
              <li className="text-sm text-[#7C3AED] font-medium">
                + {tier?.features?.length - 4} more features
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-[#4A5568]">Plan Price</span>
          <span className="text-[#1A1A1A] font-medium">₹{pricing?.basePrice?.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#4A5568]">GST (18%)</span>
          <span className="text-[#1A1A1A] font-medium">₹{pricing?.gst?.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#4A5568]">Processing Fee (2%)</span>
          <span className="text-[#1A1A1A] font-medium">₹{pricing?.processingFee?.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] mt-4 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#1A1A1A]">Total Amount</span>
          <span className="text-2xl font-bold text-[#1B365D]">₹{pricing?.total?.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-br from-[#E8F5E9] to-[#F3F4F6] rounded-lg">
        <div className="flex items-start gap-2 mb-2">
          <Icon name="Clock" size={16} color="#2E8B57" className="flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#1A1A1A]">
            <strong>Project Timeline:</strong> {service?.deliveryTime}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <Icon name="Users" size={16} color="#2E8B57" className="flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#1A1A1A]">
            <strong>Support:</strong> Dedicated project manager assigned
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanSummary;
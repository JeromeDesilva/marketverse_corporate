import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onExpand }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl border-2 border-[#E5E7EB] p-6 lg:p-8 transition-all duration-300 hover:border-[#1B365D] hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-gradient-to-br from-[#1B365D] to-[#7C3AED]' : 'bg-[#F3F4F6]'}`}>
          <Icon name={service?.icon} size={28} color={isHovered ? '#FFFFFF' : '#1B365D'} />
        </div>
        {service?.isPopular && (
          <span className="bg-gradient-to-r from-[#E8B931] to-[#FF6B35] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{service?.title}</h3>
      <p className="text-[#4A5568] mb-6 leading-relaxed">{service?.description}</p>
      <div className="space-y-3 mb-6">
        {service?.keyFeatures?.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Icon name="CheckCircle2" size={18} color="#2E8B57" className="mt-0.5 flex-shrink-0" />
            <span className="text-sm text-[#1A1A1A]">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
        <div className="flex items-center gap-2">
          <Icon name="Clock" size={16} color="#4A5568" />
          <span className="text-sm text-[#4A5568]">{service?.deliveryTime}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onExpand(service)}
        >
          Learn More
        </Button>
      </div>
      {service?.caseStudyCount > 0 && (
        <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
          <Link to="/case-studies" className="flex items-center gap-2 text-sm text-[#1B365D] hover:text-[#FF6B35] transition-colors">
            <Icon name="FileText" size={16} />
            <span className="font-medium">{service?.caseStudyCount} Success Stories</span>
            <Icon name="ExternalLink" size={14} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
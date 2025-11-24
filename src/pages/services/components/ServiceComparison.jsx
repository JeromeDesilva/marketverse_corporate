import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['market-research', 'brand-strategy', 'import-sourcing-global']);

  const comparisonData = [
    {
      id: 'market-research',
      name: 'Market Research & Analytics',
      icon: 'BarChart3',
      color: '#D63384',
      category: 'research'
    },
    {
      id: 'competitive-intelligence',
      name: 'Competitive Intelligence & Industry Analysis',
      icon: 'BarChart3',
      color: '#A02860',
      category: 'research'
    },
    {
      id: 'customer-sentiment',
      name: 'Customer Sentiment & Behavior Analysis',
      icon: 'BarChart3',
      color: '#C41E3A',
      category: 'research'
    },
    {
      id: 'brand-strategy',
      name: 'Brand Strategy & Positioning',
      icon: 'Target',
      color: '#1B365D',
      category: 'strategy'
    },
    {
      id: 'brand-evolution',
      name: 'Brand Evolution & Market Positioning',
      icon: 'Target',
      color: '#2E5C8A',
      category: 'strategy'
    },
    {
      id: 'go-to-market-strategy',
      name: 'Go-to-Market Strategy & Launch Planning',
      icon: 'Target',
      color: '#3B7EA1',
      category: 'strategy'
    },
    {
      id: 'import-sourcing-global',
      name: 'Import & Sourcing - Global Excellence',
      icon: 'Package',
      color: '#7C3AED',
      category: 'sourcing'
    },
    {
      id: 'import-sourcing-premium',
      name: 'Import & Sourcing - Premium Selection',
      icon: 'Package',
      color: '#6D28D9',
      category: 'sourcing'
    },
    {
      id: 'import-sourcing-value',
      name: 'Import & Sourcing - Value Optimization',
      icon: 'Package',
      color: '#5B21B6',
      category: 'sourcing'
    }
  ];

  const features = [
    { 
      category: 'Timeline', 
      items: ['3-4 weeks', '3-5 weeks', '3-5 weeks', '3-4 weeks', '4-6 weeks', '3-5 weeks', '6-10 weeks', '8-12 weeks', '4-8 weeks'] 
    },
    { 
      category: 'Team Size', 
      items: ['3-5 analysts', '3-4 researchers', '3-5 analysts', '3-4 experts', '4-5 strategists', '4-6 strategists', '4-6 specialists', '4-5 specialists', '3-5 coordinators'] 
    },
    { 
      category: 'Deliverables', 
      items: ['6 documents', '6 deliverables', '6 assets', '6 documents', '6 assets', '6 documents', '6 documents', '6 documents', '6 documents'] 
    },
    { 
      category: 'ROI Timeline', 
      items: ['2-3 months', '2-4 months', '2-4 months', '3-6 months', '4-8 months', '3-6 months', '4-8 months', '6-12 months', '3-6 months'] 
    },
    { 
      category: 'Ongoing Support', 
      items: ['Monthly', 'Quarterly', 'Monthly', 'Quarterly', 'As needed', 'Quarterly', 'As needed', 'As needed', 'As needed'] 
    },
    { 
      category: 'Investment Range', 
      items: ['₹2-5L', '₹1.8-4.8L', '₹1.8-5.8L', '₹2-5L', '₹2.2-6.8L', '₹2.5-7.5L', '₹1.5-8L', '₹2.5-12L', '₹1-5.5L'] 
    }
  ];

  const categories = [
    { id: 'research', label: 'Research', color: '#D63384' },
    { id: 'strategy', label: 'Strategy', color: '#1B365D' },
    { id: 'sourcing', label: 'Import & Sourcing', color: '#7C3AED' }
  ];

  const toggleService = (serviceId) => {
    if (selectedServices?.includes(serviceId)) {
      if (selectedServices?.length > 1) {
        setSelectedServices(selectedServices?.filter(id => id !== serviceId));
      }
    } else {
      if (selectedServices?.length < 3) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  const getSelectedCount = () => selectedServices?.length || 0;
  const isMaxSelected = () => getSelectedCount() >= 3;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FAFBFC] to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Compare Our Services
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Select up to 3 services to compare features, timelines, and investment requirements side by side.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 mb-8 border border-[#E5E7EB]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#1A1A1A]">
              Select Services to Compare
            </h3>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-[#1B365D]/10 rounded-lg">
                <span className="text-sm font-semibold text-[#1B365D]">
                  {getSelectedCount()} / 3 Selected
                </span>
              </div>
            </div>
          </div>

          {categories?.map((categoryGroup) => {
            const categoryServices = comparisonData?.filter(
              service => service?.category === categoryGroup?.id
            );

            return (
              <div key={categoryGroup?.id} className="mb-6 last:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="h-1 w-12 rounded-full"
                    style={{ backgroundColor: categoryGroup?.color }}
                  />
                  <h4 className="text-base font-semibold text-[#1A1A1A]">
                    {categoryGroup?.label}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryServices?.map((service) => {
                    const isSelected = selectedServices?.includes(service?.id);
                    const isDisabled = !isSelected && isMaxSelected();
                    
                    return (
                      <button
                        key={service?.id}
                        onClick={() => !isDisabled && toggleService(service?.id)}
                        disabled={isDisabled}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                          isSelected
                            ? 'border-[#1B365D] bg-gradient-to-br from-[#1B365D]/10 to-[#1B365D]/5 shadow-lg scale-105'
                            : isDisabled
                            ? 'border-[#E5E7EB] bg-[#F9FAFB] opacity-50 cursor-not-allowed'
                            : 'border-[#E5E7EB] hover:border-[#1B365D]/50 hover:shadow-md hover:scale-102'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1B365D] rounded-full flex items-center justify-center shadow-lg">
                            <Icon name="Check" size={14} color="#FFFFFF" />
                          </div>
                        )}
                        
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                              isSelected ? 'scale-110' : ''
                            }`}
                            style={{ 
                              backgroundColor: `${service?.color}${isSelected ? '25' : '15'}`,
                            }}
                          >
                            <Icon name={service?.icon} size={24} color={service?.color} />
                          </div>
                          
                          <div className="flex-1 text-left">
                            <span className={`text-sm font-semibold block ${
                              isSelected ? 'text-[#1B365D]' : 'text-[#1A1A1A]'
                            }`}>
                              {service?.name}
                            </span>
                            {isDisabled && !isSelected && (
                              <span className="text-xs text-[#6B7280] mt-1 block">
                                Max 3 services
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {selectedServices?.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5E7EB]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1B365D] via-[#2E5C8A] to-[#7C3AED]">
                    <th className="px-6 py-5 text-left text-white font-bold sticky left-0 bg-[#1B365D] z-10">
                      Feature
                    </th>
                    {selectedServices?.map((serviceId) => {
                      const service = comparisonData?.find(s => s?.id === serviceId);
                      return (
                        <th key={serviceId} className="px-6 py-5 text-center text-white font-semibold min-w-[220px]">
                          <div className="flex flex-col items-center gap-3">
                            <div 
                              className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm"
                            >
                              <Icon name={service?.icon} size={28} color="#FFFFFF" />
                            </div>
                            <span className="text-sm leading-tight">{service?.name}</span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {features?.map((feature, index) => (
                    <tr 
                      key={index} 
                      className={`${
                        index % 2 === 0 ? 'bg-[#FAFBFC]' : 'bg-white'
                      } hover:bg-[#F3F4F6] transition-colors`}
                    >
                      <td className="px-6 py-4 font-bold text-[#1A1A1A] sticky left-0 bg-inherit z-10">
                        {feature?.category}
                      </td>
                      {selectedServices?.map((serviceId) => {
                        const serviceIndex = comparisonData?.findIndex(s => s?.id === serviceId);
                        const service = comparisonData?.find(s => s?.id === serviceId);
                        return (
                          <td key={serviceId} className="px-6 py-4 text-center">
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-[#1A1A1A] font-semibold">
                                {feature?.items?.[serviceIndex]}
                              </span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedServices?.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-[#E5E7EB]">
            <div className="w-16 h-16 bg-[#1B365D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Info" size={32} color="#1B365D" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
              Select Services to Compare
            </h3>
            <p className="text-[#4A5568]">
              Choose at least one service above to see detailed comparison
            </p>
          </div>
        )}

        <div className="text-center mt-10">
          <Button 
            variant="default" 
            size="lg" 
            iconName="MessageSquare" 
            iconPosition="right"
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            Discuss Custom Package
          </Button>
          <p className="text-sm text-[#6B7280] mt-3">
            Need a custom combination? Our team can create a tailored solution for your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
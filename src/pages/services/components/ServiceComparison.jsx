import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['brand-strategy', 'digital-marketing']);

  const comparisonData = [
    {
      id: 'brand-strategy',
      name: 'Brand Strategy & Positioning',
      icon: 'Target',
      color: '#1B365D'
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing & Performance',
      icon: 'TrendingUp',
      color: '#E8B931'
    },
    {
      id: 'content-creation',
      name: 'Content Creation & Management',
      icon: 'FileText',
      color: '#FF6B35'
    },
    {
      id: 'social-media',
      name: 'Social Media Marketing',
      icon: 'Share2',
      color: '#2E8B57'
    },
    {
      id: 'import-sourcing',
      name: 'Import & Product Sourcing',
      icon: 'Package',
      color: '#7C3AED'
    },
    {
      id: 'market-research',
      name: 'Market Research & Analytics',
      icon: 'BarChart3',
      color: '#D63384'
    }
  ];

  const features = [
    { category: 'Timeline', items: ['2-3 weeks', '4-6 weeks', '2-4 weeks', '3-5 weeks', '6-8 weeks', '3-4 weeks'] },
    { category: 'Team Size', items: ['3-4 experts', '5-7 specialists', '4-5 creators', '3-4 managers', '4-6 specialists', '3-5 analysts'] },
    { category: 'Deliverables', items: ['15+ documents', '20+ assets', '30+ pieces', '50+ posts', '10+ suppliers', '5+ reports'] },
    { category: 'ROI Timeline', items: ['3-6 months', '1-3 months', '2-4 months', '1-2 months', '4-8 months', '2-3 months'] },
    { category: 'Ongoing Support', items: ['Quarterly', 'Monthly', 'Weekly', 'Daily', 'As needed', 'Monthly'] },
    { category: 'Investment Range', items: ['₹2-5L', '₹3-8L', '₹1.5-4L', '₹2-6L', '₹5-15L', '₹2-5L'] }
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

  return (
    <section className="py-16 lg:py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Compare Our Services
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Select up to 3 services to compare features, timelines, and investment requirements side by side.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-8">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Select Services to Compare (Max 3)</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {comparisonData?.map((service) => (
              <button
                key={service?.id}
                onClick={() => toggleService(service?.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedServices?.includes(service?.id)
                    ? 'border-[#1B365D] bg-[#1B365D]/5'
                    : 'border-[#E5E7EB] hover:border-[#1B365D]/50'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${service?.color}15` }}
                  >
                    <Icon name={service?.icon} size={24} color={service?.color} />
                  </div>
                  <span className="text-xs font-medium text-[#1A1A1A] text-center">{service?.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#1B365D] to-[#7C3AED]">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  {selectedServices?.map((serviceId) => {
                    const service = comparisonData?.find(s => s?.id === serviceId);
                    return (
                      <th key={serviceId} className="px-6 py-4 text-center text-white font-semibold min-w-[200px]">
                        <div className="flex flex-col items-center gap-2">
                          <Icon name={service?.icon} size={24} color="#FFFFFF" />
                          <span className="text-sm">{service?.name}</span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {features?.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#FAFBFC]' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">{feature?.category}</td>
                    {selectedServices?.map((serviceId) => {
                      const serviceIndex = comparisonData?.findIndex(s => s?.id === serviceId);
                      return (
                        <td key={serviceId} className="px-6 py-4 text-center text-[#4A5568]">
                          {feature?.items?.[serviceIndex]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="default" size="lg" iconName="MessageSquare" iconPosition="right">
            Discuss Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
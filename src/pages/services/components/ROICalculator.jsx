import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    service: 'digital-marketing',
    currentRevenue: '',
    marketingBudget: '',
    growthGoal: '25'
  });

  const [results, setResults] = useState(null);

  const serviceOptions = [
    { value: 'brand-strategy', label: 'Brand Strategy & Positioning' },
    { value: 'digital-marketing', label: 'Digital Marketing & Performance' },
    { value: 'content-creation', label: 'Content Creation & Management' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'import-sourcing', label: 'Import & Product Sourcing' },
    { value: 'market-research', label: 'Market Research & Analytics' }
  ];

  const growthOptions = [
    { value: '15', label: '15% Growth' },
    { value: '25', label: '25% Growth' },
    { value: '50', label: '50% Growth' },
    { value: '100', label: '100% Growth' }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e?.target?.name]: e?.target?.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const calculateROI = (e) => {
    e?.preventDefault();
    
    const revenue = parseFloat(formData?.currentRevenue);
    const budget = parseFloat(formData?.marketingBudget);
    const growth = parseFloat(formData?.growthGoal);

    const projectedRevenue = revenue * (1 + growth / 100);
    const revenueIncrease = projectedRevenue - revenue;
    const roi = ((revenueIncrease - budget) / budget) * 100;
    const paybackMonths = Math.ceil((budget / revenueIncrease) * 12);

    setResults({
      projectedRevenue,
      revenueIncrease,
      roi,
      paybackMonths,
      monthlyIncrease: revenueIncrease / 12
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E8B931]/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Calculator" size={18} color="#E8B931" />
            <span className="text-sm font-semibold text-[#1B365D]">Interactive Tool</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Calculate Your Marketing ROI
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            See the potential return on investment for your marketing initiatives with our data-driven calculator.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#1B365D] to-[#7C3AED] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Input Your Details</h3>
            
            <form onSubmit={calculateROI} className="space-y-6">
              <Select
                label="Select Service"
                options={serviceOptions}
                value={formData?.service}
                onChange={(value) => handleSelectChange('service', value)}
              />

              <Input
                label="Current Monthly Revenue (₹)"
                type="number"
                name="currentRevenue"
                placeholder="500000"
                value={formData?.currentRevenue}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Proposed Marketing Budget (₹)"
                type="number"
                name="marketingBudget"
                placeholder="100000"
                value={formData?.marketingBudget}
                onChange={handleInputChange}
                required
              />

              <Select
                label="Target Growth Rate"
                options={growthOptions}
                value={formData?.growthGoal}
                onChange={(value) => handleSelectChange('growthGoal', value)}
              />

              <Button type="submit" variant="secondary" fullWidth iconName="TrendingUp" iconPosition="right">
                Calculate ROI
              </Button>
            </form>
          </div>

          <div className="bg-[#F3F4F6] rounded-xl p-8">
            {results ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2E8B57] to-[#E8B931] rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="#FFFFFF" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">Your Projected Results</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="DollarSign" size={18} color="#1B365D" />
                      <span className="text-sm text-[#4A5568]">Projected Revenue</span>
                    </div>
                    <p className="text-2xl font-bold text-[#1B365D]">
                      ₹{results?.projectedRevenue?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="ArrowUpRight" size={18} color="#2E8B57" />
                      <span className="text-sm text-[#4A5568]">Revenue Increase</span>
                    </div>
                    <p className="text-2xl font-bold text-[#2E8B57]">
                      ₹{results?.revenueIncrease?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Percent" size={18} color="#E8B931" />
                      <span className="text-sm text-[#4A5568]">ROI Percentage</span>
                    </div>
                    <p className="text-2xl font-bold text-[#E8B931]">
                      {results?.roi?.toFixed(1)}%
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={18} color="#FF6B35" />
                      <span className="text-sm text-[#4A5568]">Payback Period</span>
                    </div>
                    <p className="text-2xl font-bold text-[#FF6B35]">
                      {results?.paybackMonths} months
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1B365D]/10 to-[#7C3AED]/10 rounded-lg p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" size={24} color="#1B365D" className="flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-2">Monthly Impact</h4>
                      <p className="text-[#4A5568]">
                        With our services, you could see an average monthly revenue increase of{' '}
                        <span className="font-bold text-[#2E8B57]">
                          ₹{results?.monthlyIncrease?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </span>
                        , making your investment highly profitable.
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="default" fullWidth iconName="Calendar" iconPosition="right">
                  Schedule Strategy Call
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 bg-[#1B365D]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Calculator" size={40} color="#1B365D" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Ready to Calculate?</h3>
                <p className="text-[#4A5568]">
                  Fill in your details on the left to see your potential ROI and growth projections.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
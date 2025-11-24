import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ResultsMetrics = () => {
  const [activeTab, setActiveTab] = useState('business');

  const businessMetrics = [
    {
      icon: "TrendingUp",
      label: "Revenue Growth",
      before: "₹2.5 Cr",
      after: "₹10 Cr",
      change: "+300%",
      color: "success"
    },
    {
      icon: "Store",
      label: "Store Locations",
      before: "2 Stores",
      after: "12 Stores",
      change: "+500%",
      color: "primary"
    },
    {
      icon: "Users",
      label: "Customer Base",
      before: "8,000",
      after: "50,000+",
      change: "+525%",
      color: "accent"
    },
    {
      icon: "ShoppingCart",
      label: "Average Order Value",
      before: "₹850",
      after: "₹1,450",
      change: "+71%",
      color: "secondary"
    }
  ];

  const marketingMetrics = [
    {
      icon: "Eye",
      label: "Brand Awareness",
      before: "12%",
      after: "68%",
      change: "+467%",
      color: "primary"
    },
    {
      icon: "Heart",
      label: "Social Media Followers",
      before: "3,500",
      after: "125,000",
      change: "+3,471%",
      color: "accent"
    },
    {
      icon: "MousePointer",
      label: "Website Traffic",
      before: "15K/month",
      after: "180K/month",
      change: "+1,100%",
      color: "success"
    },
    {
      icon: "Star",
      label: "Customer Satisfaction",
      before: "3.8/5",
      after: "4.7/5",
      change: "+24%",
      color: "secondary"
    }
  ];

  const operationalMetrics = [
    {
      icon: "Package",
      label: "Product SKUs",
      before: "450",
      after: "1,800",
      change: "+300%",
      color: "primary"
    },
    {
      icon: "Truck",
      label: "Supply Chain Efficiency",
      before: "72%",
      after: "94%",
      change: "+31%",
      color: "success"
    },
    {
      icon: "Clock",
      label: "Delivery Time",
      before: "5-7 days",
      after: "2-3 days",
      change: "-60%",
      color: "accent"
    },
    {
      icon: "RefreshCw",
      label: "Inventory Turnover",
      before: "4.2x/year",
      after: "8.5x/year",
      change: "+102%",
      color: "secondary"
    }
  ];

  const tabs = [
    { id: 'business', label: 'Business Impact', metrics: businessMetrics },
    { id: 'marketing', label: 'Marketing Results', metrics: marketingMetrics },
    { id: 'operational', label: 'Operational Excellence', metrics: operationalMetrics }
  ];

  const currentMetrics = tabs?.find(tab => tab?.id === activeTab)?.metrics || businessMetrics;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Measurable Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive transformation across business, marketing, and operational metrics demonstrating sustainable growth and market leadership.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              {tab?.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentMetrics?.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className={`w-12 h-12 rounded-lg bg-${metric?.color}/10 flex items-center justify-center mb-4`}>
                <Icon name={metric?.icon} size={24} color={`var(--color-${metric?.color})`} />
              </div>

              <h3 className="text-sm font-medium text-muted-foreground mb-4">{metric?.label}</h3>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Before</p>
                  <p className="text-lg font-semibold text-foreground">{metric?.before}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Icon name="ArrowRight" size={16} color="var(--color-muted-foreground)" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">After</p>
                  <p className="text-lg font-semibold text-foreground">{metric?.after}</p>
                </div>

                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-${metric?.color}/10`}>
                  <Icon name="TrendingUp" size={14} color={`var(--color-${metric?.color})`} />
                  <span className={`text-sm font-bold text-${metric?.color}`}>{metric?.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-success/5 to-primary/5 rounded-2xl p-8 lg:p-12 border border-success/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Award" size={24} color="var(--color-success)" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">ROI Achievement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Korean Super Store achieved a remarkable 450% return on investment within 18 months, exceeding initial projections by 180%. The comprehensive marketing strategy not only drove immediate sales but established long-term brand equity and customer loyalty.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Payback Period: 8 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Customer Lifetime Value: +215%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Market Share: 34% in Specialty Retail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
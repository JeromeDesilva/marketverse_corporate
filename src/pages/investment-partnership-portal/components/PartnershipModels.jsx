import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnershipModels = () => {
  const [selectedModel, setSelectedModel] = useState('equity');

  const models = [
  {
    id: 'equity',
    icon: 'Building2',
    title: 'Equity Partnership',
    subtitle: 'Strategic Investment Model',
    investment: '₹1Cr - ₹10Cr',
    equity: '15% - 35%',
    duration: '5-7 Years',
    returns: '400-600% ROI',
    features: [
    'Board representation and strategic input',
    'Quarterly profit sharing from operations',
    'Access to proprietary market intelligence',
    'Priority exit options with guaranteed buyback',
    'Co-branding opportunities for portfolio companies'],

    idealFor: 'Institutional investors, Family offices, Strategic corporate investors',
    color: 'primary'
  },
  {
    id: 'revenue',
    icon: 'TrendingUp',
    title: 'Revenue Share Partnership',
    subtitle: 'Performance-Based Model',
    investment: '₹25L - ₹2Cr',
    equity: 'No Equity Dilution',
    duration: '3-5 Years',
    returns: '250-400% ROI',
    features: [
    'Fixed percentage of monthly revenue streams',
    'No equity dilution or ownership transfer',
    'Transparent revenue tracking dashboard',
    'Flexible exit terms with 6-month notice',
    'Participation in specific high-margin projects'],

    idealFor: 'Angel investors, HNIs, Marketing professionals seeking passive income',
    color: 'success'
  },
  {
    id: 'project',
    icon: 'Briefcase',
    title: 'Project Co-Investment',
    subtitle: 'Deal-by-Deal Model',
    investment: '₹10L - ₹1Cr',
    equity: 'Project-Specific Returns',
    duration: '6-18 Months',
    returns: '150-300% ROI',
    features: [
    'Investment in specific client projects or campaigns',
    'Defined project scope with clear deliverables',
    'Profit sharing from project success fees',
    'Lower risk with shorter commitment periods',
    'Option to reinvest in subsequent projects'],

    idealFor: 'First-time investors, Risk-averse partners, Industry professionals',
    color: 'innovation'
  },
  {
    id: 'market',
    icon: 'Globe',
    title: 'Market Entry Partnership',
    subtitle: 'International Expansion Model',
    investment: '₹50L - ₹5Cr',
    equity: 'Hybrid Structure',
    duration: '3-5 Years',
    returns: '300-500% ROI',
    features: [
    'Joint venture for international brand launches',
    'Shared investment in market research and setup',
    'Revenue sharing from successful brand entries',
    'Access to Marketverse distribution network',
    'Co-ownership of market entry IP and processes'],

    idealFor: 'International brands, Import/export businesses, Global investors',
    color: 'accent'
  }];


  const currentModel = models?.find((m) => m?.id === selectedModel);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Icon name="Handshake" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Partnership Opportunities</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Investment Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible partnership structures designed to match your investment goals, risk appetite, and involvement level
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mb-12">
          {models?.map((model) =>
          <button
            key={model?.id}
            onClick={() => setSelectedModel(model?.id)}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
            selectedModel === model?.id ?
            'border-primary bg-primary/5 shadow-lg' :
            'border-border bg-card hover:border-primary/50'}`
            }>

              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
            selectedModel === model?.id ? 'bg-primary' : 'bg-muted'}`
            }>
                <Icon
                name={model?.icon}
                size={24}
                color={selectedModel === model?.id ? '#FFFFFF' : 'var(--color-muted-foreground)'} />

              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{model?.title}</h3>
              <p className="text-sm text-muted-foreground">{model?.subtitle}</p>
            </button>
          )}
        </div>
 
        {currentModel &&
        <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden border-solid">
           <div className={`bg-${currentModel?.color} p-8 text-white`}>
           
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{currentModel?.title}</h3>
                  <p className="text-white/90">{currentModel?.subtitle}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name={currentModel?.icon} size={32} color="#FFFFFF" />
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-white/80 mb-1">Investment Range</div>
                  <div className="text-xl font-bold">{currentModel?.investment}</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-1">Equity/Structure</div>
                  <div className="text-xl font-bold">{currentModel?.equity}</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-1">Duration</div>
                  <div className="text-xl font-bold">{currentModel?.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-white/80 mb-1">Expected Returns</div>
                  <div className="text-xl font-bold">{currentModel?.returns}</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                    Key Features & Benefits
                  </h4>
                  <ul className="space-y-3">
                    {currentModel?.features?.map((feature, index) =>
                  <li key={index} className="flex items-start gap-3">
                        <Icon name="ArrowRight" size={16} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-muted rounded-xl">
                    <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="Users" size={20} color="var(--color-primary)" />
                      Ideal For
                    </h4>
                    <p className="text-muted-foreground">{currentModel?.idealFor}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                    variant="default"
                    size="default"
                    fullWidth
                    iconName="MessageSquare"
                    iconPosition="left">

                      Discuss This Model
                    </Button>
                    <Button
                    variant="outline"
                    size="default"
                    fullWidth
                    iconName="FileText"
                    iconPosition="left">

                      Download Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

};

export default PartnershipModels;
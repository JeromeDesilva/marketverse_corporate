import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [investment, setInvestment] = useState('5000000');
  const [duration, setDuration] = useState('3');
  const [model, setModel] = useState('equity');
  const [results, setResults] = useState(null);

  const modelOptions = [
    { value: 'equity', label: 'Equity Partnership (450-600% ROI)' },
    { value: 'revenue', label: 'Revenue Share (250-400% ROI)' },
    { value: 'project', label: 'Project Co-Investment (150-300% ROI)' },
    { value: 'market', label: 'Market Entry (300-500% ROI)' }
  ];

  const durationOptions = [
    { value: '1', label: '1 Year' },
    { value: '2', label: '2 Years' },
    { value: '3', label: '3 Years' },
    { value: '5', label: '5 Years' },
    { value: '7', label: '7 Years' }
  ];

  const calculateROI = () => {
    const investmentAmount = parseFloat(investment) || 0;
    const years = parseInt(duration) || 1;
    
    let roiMultiplier = 1;
    let annualReturn = 0;
    
    switch(model) {
      case 'equity':
        roiMultiplier = 4.5 + (years * 0.3);
        annualReturn = 45;
        break;
      case 'revenue':
        roiMultiplier = 2.5 + (years * 0.3);
        annualReturn = 35;
        break;
      case 'project':
        roiMultiplier = 1.5 + (years * 0.3);
        annualReturn = 25;
        break;
      case 'market':
        roiMultiplier = 3.0 + (years * 0.4);
        annualReturn = 40;
        break;
      default:
        roiMultiplier = 3.0;
        annualReturn = 30;
    }

    const totalReturn = investmentAmount * roiMultiplier;
    const profit = totalReturn - investmentAmount;
    const roiPercentage = ((profit / investmentAmount) * 100)?.toFixed(0);
    const monthlyReturn = (profit / (years * 12))?.toFixed(0);
    const yearlyReturn = (profit / years)?.toFixed(0);

    setResults({
      investment: investmentAmount,
      totalReturn,
      profit,
      roiPercentage,
      monthlyReturn,
      yearlyReturn,
      annualReturn,
      years
    });
  };

  useEffect(() => {
    calculateROI();
  }, [investment, duration, model]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Icon name="Calculator" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Investment Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Calculate Your Potential Returns
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Use our interactive calculator to estimate returns based on your investment amount, partnership model, and time horizon
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-card rounded-2xl border border-border shadow-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Icon name="Settings" size={24} color="var(--color-primary)" />
              Investment Parameters
            </h3>

            <div className="space-y-6">
              <Input
                label="Investment Amount (₹)"
                type="number"
                value={investment}
                onChange={(e) => setInvestment(e?.target?.value)}
                placeholder="Enter amount"
                description="Minimum investment: ₹10,00,000"
              />

              <Select
                label="Partnership Model"
                options={modelOptions}
                value={model}
                onChange={setModel}
                description="Select your preferred investment structure"
              />

              <Select
                label="Investment Duration"
                options={durationOptions}
                value={duration}
                onChange={setDuration}
                description="Choose your investment time horizon"
              />

              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="Calculator"
                iconPosition="left"
                onClick={calculateROI}
              >
                Calculate Returns
              </Button>
            </div>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> These calculations are estimates based on historical performance and market projections. Actual returns may vary based on market conditions, project execution, and partnership terms.
                </div>
              </div>
            </div>
          </div>

          {results && (
            <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-success to-success/80 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Projected Returns</h3>
                <p className="text-white/90">Based on your investment parameters</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-muted rounded-xl">
                    <div className="text-sm text-muted-foreground mb-2">Initial Investment</div>
                    <div className="text-2xl font-bold text-foreground">{formatCurrency(results?.investment)}</div>
                  </div>
                  <div className="p-6 bg-success/10 rounded-xl border border-success/20">
                    <div className="text-sm text-success mb-2">Total Return</div>
                    <div className="text-2xl font-bold text-success">{formatCurrency(results?.totalReturn)}</div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/5 to-innovation/5 rounded-xl border border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">Net Profit</div>
                    <div className="px-3 py-1 bg-success/20 text-success text-xs font-bold rounded-full">
                      +{results?.roiPercentage}% ROI
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{formatCurrency(results?.profit)}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Monthly Returns</div>
                    <div className="text-lg font-bold text-foreground">{formatCurrency(results?.monthlyReturn)}</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Yearly Returns</div>
                    <div className="text-lg font-bold text-foreground">{formatCurrency(results?.yearlyReturn)}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Annual Return Rate</span>
                    <span className="text-lg font-bold text-primary">{results?.annualReturn}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-success h-full rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(results?.annualReturn, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    variant="default"
                    size="default"
                    fullWidth
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Schedule Discussion
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Report
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
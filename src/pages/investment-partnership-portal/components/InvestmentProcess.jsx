import React from 'react';
import Icon from '../../../components/AppIcon';

const InvestmentProcess = () => {
  const steps = [
    {
      number: '01',
      icon: 'MessageSquare',
      title: 'Initial Consultation',
      description: 'Schedule a confidential discussion to understand your investment goals, risk appetite, and preferred partnership model',
      duration: '30-45 minutes',
      deliverables: ['Investment profile assessment', 'Partnership model recommendations', 'Preliminary ROI projections']
    },
    {
      number: '02',
      icon: 'FileSearch',
      title: 'Due Diligence & Documentation',
      description: 'Comprehensive review of our operations, financials, and market position with full transparency and documentation',
      duration: '2-3 weeks',
      deliverables: ['Financial statements & audits', 'Client portfolio review', 'Legal documentation', 'Market analysis reports']
    },
    {
      number: '03',
      icon: 'FileText',
      title: 'Partnership Agreement',
      description: 'Customized partnership terms drafted by legal experts, ensuring clarity on investment structure, returns, and exit options',
      duration: '1-2 weeks',
      deliverables: ['Partnership agreement draft', 'Investment terms sheet', 'Governance framework', 'Exit clause details']
    },
    {
      number: '04',
      icon: 'Wallet',
      title: 'Investment Execution',
      description: 'Secure fund transfer through escrow accounts with complete regulatory compliance and documentation',
      duration: '3-5 days',
      deliverables: ['Escrow account setup', 'Fund transfer confirmation', 'Partnership certificate', 'Investor portal access']
    },
    {
      number: '05',
      icon: 'BarChart3',
      title: 'Ongoing Monitoring & Reporting',
      description: 'Regular performance updates, quarterly reviews, and transparent reporting through dedicated investor dashboard',
      duration: 'Continuous',
      deliverables: ['Monthly performance reports', 'Quarterly financial reviews', 'Annual strategy meetings', 'Real-time dashboard access']
    },
    {
      number: '06',
      icon: 'TrendingUp',
      title: 'Returns & Exit',
      description: 'Structured return distribution as per agreement terms with flexible exit options and guaranteed buyback provisions',
      duration: 'As per terms',
      deliverables: ['Scheduled return payments', 'Exit option execution', 'Final settlement', 'Performance summary report']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Icon name="GitBranch" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Investment Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Investment Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing returns, we ensure a smooth and transparent partnership journey
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-innovation to-success transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps?.map((step, index) => (
              <div key={index} className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                  <div className="inline-block lg:block">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-innovation flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {step?.number}
                      </div>
                      <div className={`lg:hidden ${index % 2 === 0 ? '' : 'order-first'}`}>
                        <h3 className="text-xl font-bold text-foreground">{step?.title}</h3>
                        <p className="text-sm text-muted-foreground">{step?.duration}</p>
                      </div>
                    </div>

                    <div className="hidden lg:block mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{step?.title}</h3>
                      <p className="text-sm text-primary font-medium">{step?.duration}</p>
                    </div>

                    <p className="text-muted-foreground mb-6">{step?.description}</p>

                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg ${index % 2 === 0 ? 'lg:float-right' : ''}`}>
                      <Icon name={step?.icon} size={20} color="var(--color-primary)" />
                      <span className="text-sm font-medium text-foreground">Key Deliverables</span>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16 lg:col-start-1 lg:row-start-1'}`}>
                  <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
                    <ul className="space-y-3">
                      {step?.deliverables?.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle2" size={18} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden lg:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-innovation/5 rounded-2xl border border-primary/20 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Investment Journey?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a confidential consultation with our investment team to explore partnership opportunities tailored to your goals
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} color="var(--color-success)" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} color="var(--color-success)" />
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <Icon name="Calendar" size={20} color="#FFFFFF" />
                Schedule Consultation
              </button>
              <button className="flex-1 px-6 py-4 bg-card border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                <Icon name="Phone" size={20} color="var(--color-primary)" />
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentProcess;
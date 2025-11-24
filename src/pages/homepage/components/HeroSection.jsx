import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [visitorType, setVisitorType] = useState('client');
  const [currentMetric, setCurrentMetric] = useState(0);

  const visitorTypes = {
    client: {
      title: "Transform Your Brand Into Market Leaders",
      subtitle: "100+ man-years of marketing expertise compressed into strategies that make growth inevitable",
      cta: "Book Free Consultation",
      ctaAction: () => navigate('/contact'),
      secondaryCta: "View Success Stories",
      secondaryAction: () => navigate('/case-studies'),
      icon: "TrendingUp"
    },
    investor: {
      title: "Partner With India\'s Marketing Powerhouse",
      subtitle: "Strategic investment opportunities in proven marketing excellence with measurable ROI",
      cta: "Explore Partnership",
      ctaAction: () => navigate('/investment-partnership-portal'),
      secondaryCta: "View Portfolio",
      secondaryAction: () => navigate('/case-studies'),
      icon: "Briefcase"
    },
    partner: {
      title: "Build Market Categories Together",
      subtitle: "Collaborate with experts who turn ambitious brands into industry benchmarks",
      cta: "Discuss Collaboration",
      ctaAction: () => navigate('/contact'),
      secondaryCta: "Our Services",
      secondaryAction: () => navigate('/services'),
      icon: "Users"
    }
  };

  const metrics = [
    { value: 100, label: "Man-Years Expertise", suffix: "+" },
    { value: 5, label: "Years of Excellence", suffix: "+" },
    { value: 50, label: "Brands Transformed", suffix: "+" },
    { value: 300, label: "Growth Percentage", suffix: "%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = visitorTypes?.[visitorType];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-innovation geometric-pattern">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,49,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {Object.keys(visitorTypes)?.map((type) => (
                <button
                  key={type}
                  onClick={() => setVisitorType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    visitorType === type
                      ? 'bg-accent text-accent-foreground shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {type?.charAt(0)?.toUpperCase() + type?.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Icon name={currentContent?.icon} size={20} color="#E8B931" />
                <span className="text-secondary text-sm font-semibold">Marketing Excellence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {currentContent?.title}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                {currentContent?.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={currentContent?.ctaAction}
                className="shadow-xl"
              >
                {currentContent?.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
                onClick={currentContent?.secondaryAction}
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                {currentContent?.secondaryCta}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {metrics?.map((metric, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-500 ${
                    currentMetric === index ? 'scale-105 bg-white/20' : ''
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-secondary">
                    {metric?.value}{metric?.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 mt-1">{metric?.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
                      <Icon name="Sparkles" size={32} color="#FFFFFF" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">Marketing Confidence</div>
                      <div className="text-white/70 text-sm">Your Growth Partner</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: "Target", text: "Strategic Brand Positioning" },
                      { icon: "Zap", text: "Performance Marketing" },
                      { icon: "Globe", text: "Market Entry Excellence" },
                      { icon: "TrendingUp", text: "Measurable Growth" }
                    ]?.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                      >
                        <Icon name={item?.icon} size={24} color="#E8B931" />
                        <span className="text-white font-medium">{item?.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-success/20 to-trust/20 rounded-xl p-6">
                  <div className="text-white/80 text-sm mb-2">Client Success Rate</div>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold text-white">98%</div>
                    <div className="text-success text-sm mb-2 flex items-center gap-1">
                      <Icon name="TrendingUp" size={16} />
                      <span>+15% YoY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="#FFFFFF" className="opacity-50" />
      </div>
    </section>
  );
};

export default HeroSection;
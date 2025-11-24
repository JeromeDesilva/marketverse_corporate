import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);

  const metrics = [
  { value: 5, label: "Years of Excellence", suffix: "+", icon: "Award" },
  { value: 50, label: "Brands Transformed", suffix: "+", icon: "Briefcase" },
  { value: 150, label: "Successful Campaigns", suffix: "+", icon: "Rocket" }];


  const features = [
  {
    icon: "Target",
    title: "Strategic Brand Positioning",
    description: "Data-driven market insights"
  },
  {
    icon: "Globe",
    title: "Market Entry Excellence",
    description: "Seamless market penetration"
  },
  {
    icon: "Rocket",
    title: "Growth Acceleration",
    description: "Measurable business results"
  }];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features?.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#0F2557] to-[#1a1a2e]">
      {/* Enhanced background elements with better color balance */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-accent/25 to-secondary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-trust/20 to-secondary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      {/* Refined floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)]?.map((_, i) =>
        <div
          key={i}
          className={`absolute rounded-full animate-float ${
          i % 3 === 0 ? 'w-3 h-3 bg-secondary/40' :
          i % 3 === 1 ? 'w-2 h-2 bg-accent/30' : 'w-1.5 h-1.5 bg-trust/35'}`
          }
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }} />

        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Enhanced visual hierarchy */}
          <div className="text-center lg:text-left space-y-10">
            {/* Refined Badge with better contrast */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-full border border-white/30 shadow-[0_8px_32px_rgba(232,185,49,0.15)]">
              <div className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse shadow-[0_0_12px_rgba(232,185,49,0.6)]" />
              <span className="text-white text-sm font-bold tracking-wide">Marketing Excellence Since 2020</span>
            </div>

            {/* Enhanced Main Heading with improved typography */}
            <div className="space-y-7">
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-8xl font-extrabold text-white leading-[1.05] tracking-tight">
                Elevate Your Brand to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_auto] animate-gradient drop-shadow-[0_0_30px_rgba(232,185,49,0.4)]">
                  New Heights
                </span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Strategic marketing solutions that transform ambitious brands into industry leaders through innovation and expertise
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="Sparkles"
                iconPosition="right"
                onClick={() => navigate('/contact')}
                className="shadow-[0_20px_60px_rgba(232,185,49,0.35)] hover:shadow-[0_20px_80px_rgba(232,185,49,0.5)] transition-all duration-300 hover:scale-105 font-semibold text-lg px-8 py-7">

                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="PlayCircle"
                iconPosition="left"
                onClick={() => navigate('/case-studies')}
                className="bg-white/15 backdrop-blur-xl border-2 border-white/40 text-white hover:bg-white/25 hover:border-white/60 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] transition-all duration-300 font-semibold text-lg px-8 py-7">

                Watch Success Stories
              </Button>
            </div>

            {/* Enhanced Metrics Cards with refined styling */}
            <div className="grid grid-cols-3 gap-5 pt-10">
              {metrics?.map((metric, index) =>
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-2 border-white/25 p-7 hover:bg-gradient-to-br hover:from-white/25 hover:to-white/10 hover:border-white/40 transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_60px_rgba(232,185,49,0.2)] cursor-pointer">

                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon name={metric?.icon} size={32} color="#E8B931" />
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-secondary transition-colors duration-300">
                      {metric?.value}{metric?.suffix}
                    </div>
                    <div className="text-base text-white/90 font-semibold leading-snug">{metric?.label}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Right Visual Panel */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[650px]">
              {/* Refined decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-accent/15 to-trust/10 rounded-[2rem] transform rotate-3 scale-105 blur-sm opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 via-transparent to-secondary/10 rounded-[2rem] transform -rotate-2 scale-105 blur-md opacity-40" />
              
              {/* Enhanced main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl rounded-[2rem] border-2 border-white/30 shadow-[0_25px_80px_rgba(0,0,0,0.3)] p-10 flex flex-col justify-between overflow-hidden">
                {/* Sophisticated animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 bg-[length:200%_200%] animate-gradient opacity-60" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
                
                <div className="relative z-10 space-y-8">
                  {/* Enhanced Header Card */}
                  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary via-accent to-secondary rounded-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(232,185,49,0.4)] animate-pulse">
                        <Icon name="Zap" size={32} color="#FFFFFF" />
                      </div>
                      <div>
                        <div className="text-white font-black text-3xl tracking-tight">Marketverse</div>
                        <div className="text-white/90 text-base font-medium">Your Growth Partner</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Feature Cards */}
                  <div className="space-y-4">
                    {features?.map((feature, index) =>
                    <div
                      key={index}
                      className={`flex items-start gap-5 p-6 rounded-2xl transition-all duration-700 ${
                      activeFeature === index ?
                      'bg-gradient-to-r from-white/25 to-white/15 border-2 border-white/40 shadow-[0_10px_40px_rgba(232,185,49,0.2)] scale-[1.03]' :
                      'bg-white/5 border-2 border-white/15 hover:bg-white/10 hover:border-white/25'}`
                      }>

                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                      activeFeature === index ?
                      'bg-gradient-to-br from-secondary via-accent to-secondary scale-110 shadow-[0_10px_30px_rgba(232,185,49,0.4)]' :
                      'bg-white/15 hover:bg-white/20'}`
                      }>
                          <Icon name={feature?.icon} size={28} color="#FFFFFF" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-white font-bold text-lg mb-2 transition-colors duration-300 ${
                        activeFeature === index ? 'text-white' : ''}`
                        }>
                            {feature?.title}
                          </div>
                          <div className="text-white/80 text-base font-medium leading-relaxed">
                            {feature?.description}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Bottom Stats Card */}
                <div className="relative z-10 bg-gradient-to-r from-success/25 via-trust/25 to-success/25 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 shadow-[0_10px_40px_rgba(16,185,129,0.2)] hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/90 text-base font-semibold mb-3 tracking-wide">Client Success Rate</div>
                      <div className="flex items-end gap-4">
                        <div className="text-6xl font-black text-white tracking-tight">98%</div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="px-3 py-2 bg-success/40 rounded-xl flex items-center gap-2 border border-success/30 shadow-lg">
                            <Icon name="TrendingUp" size={18} color="#10B981" />
                            <span className="text-success text-base font-black">+15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-24 h-24 bg-gradient-to-br from-success/40 to-trust/40 rounded-3xl flex items-center justify-center shadow-[0_10px_40px_rgba(16,185,129,0.3)] animate-pulse">
                      <Icon name="Award" size={48} color="#FFFFFF" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-4 border border-white/20">
          <span className="text-white/80 text-xs font-bold tracking-widest uppercase">Explore More</span>
          <Icon name="ChevronDown" size={28} color="#E8B931" className="animate-pulse" />
        </div>
      </div>
    </section>);

};

export default HeroSection;
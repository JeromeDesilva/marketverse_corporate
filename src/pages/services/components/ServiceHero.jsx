import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1B365D] via-[#2E4A7C] to-[#1B365D] py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8B931] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={16} color="#E8B931" />
            <span className="text-sm font-medium text-white">Complete Marketing Solutions</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Brand with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E8B931] to-[#FF6B35]">
              End-to-End Marketing Excellence
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Six comprehensive services backed by 100+ man-years of expertise. From strategy to execution, we make growth inevitable through measurable results and cultural market understanding.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="Award" size={20} color="#E8B931" />
              <span className="text-white font-semibold">100+ Man-Years Expertise</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="TrendingUp" size={20} color="#2E8B57" />
              <span className="text-white font-semibold">Measurable ROI</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="Globe" size={20} color="#FF6B35" />
              <span className="text-white font-semibold">Cultural Market Mastery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
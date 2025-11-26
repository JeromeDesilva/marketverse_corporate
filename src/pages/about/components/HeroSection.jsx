import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-innovation)] to-[var(--color-primary)] py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, var(--color-primary) 25%, transparent 25%),
                           linear-gradient(-45deg, var(--color-primary) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, var(--color-primary) 75%),
                           linear-gradient(-45deg, transparent 75%, var(--color-primary) 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Award" size={20} color="#E8B931" />
            <span className="text-sm font-medium text-white">Experienced Marketing Team</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Where Marketing Intelligence Meets Market Disruption
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            We are Marketverse - a specialized marketing and brand-building agency in India that combines corporate credibility with startup agility. Strategic boldness backed by proven expertise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={24} color="#E8B931" />
              <span className="text-lg font-semibold">5+ Years of Excellence</span>
            </div>
            <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={24} color="#E8B931" />
              <span className="text-lg font-semibold">Expert Team</span>
            </div>
            <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={24} color="#E8B931" />
              <span className="text-lg font-semibold">Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-innovation)] to-[var(--color-primary)] py-20 lg:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Icon name="Award" size={20} color="#E8B931" />
          <span className="text-sm font-semibold">Experienced Marketing Team</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Where Marketing Intelligence Meets{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            Market Disruption
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          We are Marketverse — a specialized marketing and brand-building agency in India
          delivering bold strategy backed by proven expertise.
        </p>

        {/* Mini Stats */}
        <div className="flex flex-wrap justify-center gap-6">
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
    </section>
  );
};

export default HeroSection;

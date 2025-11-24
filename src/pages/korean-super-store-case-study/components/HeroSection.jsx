import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-innovation overflow-hidden">
      <div className="geometric-pattern absolute inset-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Icon name="Award" size={16} color="#E8B931" />
              <span className="text-sm font-medium text-white">Flagship Success Story</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Korean Super Store
              <span className="block text-secondary mt-2">Market Entry Success</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              How Marketverse transformed a Korean retail concept into India's fastest-growing specialty store chain, achieving 300% revenue growth in 18 months through strategic brand positioning and cultural market adaptation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-white">
                <Icon name="TrendingUp" size={20} color="#E8B931" />
                <span className="font-semibold">300% Revenue Growth</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Icon name="MapPin" size={20} color="#E8B931" />
                <span className="font-semibold">12 Store Locations</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Icon name="Users" size={20} color="#E8B931" />
                <span className="font-semibold">50K+ Customers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1625732867209-7c8afdb21d10"
                alt="Modern Korean specialty retail store interior with bright lighting, organized product displays featuring Korean snacks and cosmetics, customers shopping in clean contemporary space with wooden fixtures and glass shelving"
                className="w-full h-[400px] lg:h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Project Duration</p>
                      <p className="text-xl font-bold text-primary">18 Months</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Investment ROI</p>
                      <p className="text-xl font-bold text-success">450%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
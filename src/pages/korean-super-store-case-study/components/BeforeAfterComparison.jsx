import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const BeforeAfterComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = Math.max(0, Math.min(e?.clientX - rect?.left, rect?.width));
    const percent = Math.max(0, Math.min(x / rect?.width * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = Math.max(0, Math.min(e?.touches?.[0]?.clientX - rect?.left, rect?.width));
    const percent = Math.max(0, Math.min(x / rect?.width * 100, 100));
    setSliderPosition(percent);
  };

  const comparisons = [
  {
    category: "Store Design",
    before: "Basic retail layout with minimal Korean cultural elements, generic shelving, and limited product visibility",
    after: "Immersive Korean-themed environment with cultural storytelling, premium fixtures, and experiential shopping zones"
  },
  {
    category: "Product Range",
    before: "Limited selection of 450 SKUs, inconsistent availability, basic packaging",
    after: "Curated collection of 1,800+ authentic Korean products, reliable supply chain, premium presentation"
  },
  {
    category: "Customer Experience",
    before: "Transactional shopping experience, minimal staff training, no loyalty program",
    after: "Cultural immersion journey, expert staff guidance, gamified loyalty rewards, community events"
  },
  {
    category: "Digital Presence",
    before: "Basic website, sporadic social media, no e-commerce capability",
    after: "Integrated omnichannel platform, engaging content strategy, seamless online shopping experience"
  }];


  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transformation Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Witness the dramatic evolution from a struggling retail concept to a thriving cultural destination.
          </p>
        </div>

        <div className="mb-16">
          <div
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}>

            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1694885156873-6a0823e14848"
                alt="Before transformation showing basic retail store interior with plain white walls, simple metal shelving units, sparse product displays, minimal lighting, and generic commercial flooring in empty shopping space"
                className="w-full h-full object-cover" />

              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">Before</span>
              </div>
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>

              <Image
                src="https://images.unsplash.com/photo-1622616333452-9cec236c42e6"
                alt="After transformation showing modern Korean specialty store with vibrant lighting, organized wooden shelving displaying colorful Korean snacks and cosmetics, customers shopping in clean contemporary space with cultural decor and premium fixtures"
                className="w-full h-full object-cover" />

              <div className="absolute top-4 right-4 bg-success/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">After</span>
              </div>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <Icon name="ChevronsLeftRight" size={24} color="var(--color-primary)" />
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Drag the slider to compare before and after transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {comparisons?.map((comparison, index) =>
          <div
            key={index}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">

              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Layers" size={20} color="var(--color-primary)" />
                {comparison?.category}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} color="var(--color-error)" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-error mb-1">Before</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{comparison?.before}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-success mb-1">After</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{comparison?.after}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default BeforeAfterComparison;
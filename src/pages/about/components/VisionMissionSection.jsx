import React from 'react';
import Icon from '../../../components/AppIcon';

const VisionMissionSection = () => {
  const values = [
    {
      icon: "Target",
      title: "Results-Driven",
      description: "Every strategy, every campaign, every decision is measured against tangible business outcomes and ROI."
    },
    {
      icon: "Lightbulb",
      title: "Innovation First",
      description: "We don't follow trends, we create them. Our approach combines proven methodologies with cutting-edge innovation."
    },
    {
      icon: "Users",
      title: "Client Partnership",
      description: "We're not vendors, we're partners. Your success is our success, and we're invested in your long-term growth."
    },
    {
      icon: "Award",
      title: "Excellence Standard",
      description: "Mediocrity has no place here. We set the bar high and consistently exceed expectations through quality execution."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-innovation)] to-[var(--color-primary)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #FFFFFF 25%, transparent 25%),
                           linear-gradient(-45deg, #FFFFFF 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, #FFFFFF 75%),
                           linear-gradient(-45deg, transparent 75%, #FFFFFF 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mb-6">
              <Icon name="Eye" size={32} color="var(--color-secondary-foreground)" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              To be recognized as India's premier marketing and brand-building powerhouse that transforms ambitious brands into market leaders through strategic boldness and proven expertise.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              We envision a future where every great product gets the visibility it deserves, where marketing confidence replaces marketing uncertainty, and where growth becomes inevitable through intelligent strategy execution.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-6">
              <Icon name="Compass" size={32} color="#FFFFFF" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              To combine corporate credibility with startup agility, delivering end-to-end marketing solutions that bridge the gap between global trends and local market resonance.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              We exist to make marketing confidence accessible to ambitious brands, to turn complex market challenges into exciting opportunities, and to compress decades of expertise into transformative partnerships.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values?.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-innovation)] flex items-center justify-center mb-4">
                  <Icon name={value?.icon} size={24} color="#FFFFFF" />
                </div>
                <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-3">{value?.title}</h4>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">{value?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
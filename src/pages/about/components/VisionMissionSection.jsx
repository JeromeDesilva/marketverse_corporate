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
      description: "We consistently exceed expectations through high-quality execution and relentless improvement."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-innovation)] to-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Vision + Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Vision Block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mb-6">
              <Icon name="Eye" size={32} color="#fff" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              To be the agency that empowers ambitious brands to achieve market leadership
              through innovative strategies and measurable growth.
              We envision a future where every great product gets the visibility it deserves,
              where marketing confidence replaces marketing uncertainty, 
              and where growth becomes more achievable through intelligent strategy execution.
            </p>
          </div>

          {/* Mission Block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-6">
              <Icon name="Compass" size={32} color="#fff" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              To blend corporate-level credibility with startup-style agility and deliver
              impactful marketing that drives consistent business results.
              We exist to make marketing confidence accessible to ambitious brands, to turn complex market challenges into exciting opportunities, and to compress decades of expertise into transformative partnerships.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
          Our Core Values
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-innovation)] flex items-center justify-center mb-4">
                <Icon name={value.icon} size={24} color="#fff" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-2">
                {value.title}
              </h4>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionMissionSection;

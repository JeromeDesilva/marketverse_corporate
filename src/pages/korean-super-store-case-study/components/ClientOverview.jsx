import React from 'react';
import Icon from '../../../components/AppIcon';

const ClientOverview = () => {
  const clientDetails = [
    {
      icon: "Building2",
      label: "Industry",
      value: "Specialty Retail & Import"
    },
    {
      icon: "Globe",
      label: "Origin",
      value: "Seoul, South Korea"
    },
    {
      icon: "Calendar",
      label: "Partnership Start",
      value: "January 2023"
    },
    {
      icon: "Target",
      label: "Market Focus",
      value: "Urban Indian Millennials"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Client Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A premium Korean retail brand seeking to establish a strong foothold in the Indian market with authentic Korean products and cultural experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clientDetails?.map((detail, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={detail?.icon} size={24} color="var(--color-primary)" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{detail?.label}</p>
              <p className="text-lg font-semibold text-foreground">{detail?.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-innovation/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-6">The Challenge</h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Korean Super Store approached Marketverse with a unique challenge: how to introduce authentic Korean retail experiences to Indian consumers who had limited exposure to Korean culture beyond K-pop and K-dramas. The brand needed to establish credibility, build awareness, and create a sustainable business model in a highly competitive retail landscape.
            </p>
            <p className="leading-relaxed">
              Key obstacles included navigating import regulations, adapting product offerings to Indian tastes while maintaining authenticity, establishing supply chain reliability, and creating marketing campaigns that resonated with both Korean culture enthusiasts and curious first-time buyers.
            </p>
            <p className="leading-relaxed">
              The client required a partner who understood both Korean business culture and Indian consumer psychology—someone who could bridge the gap between international brand standards and local market realities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOverview;
import React, { useState } from 'react';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  const clients = [
    { name: "Korean Super Store", logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf9e762a-1764004135360.png", alt: "Korean Super Store logo" },
    { name: "TechVision India", logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14916a117-1764004136884.png", alt: "TechVision India logo" },
    // ... other clients
  ];

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Brands' : 'Show Brands'}
      </button>

      {isVisible && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Trusted By Leading Brands
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Brands We've Transformed
              </h2>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[...clients, ...clients].map((client, index) => (
                  <div key={index} className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center bg-card rounded-xl border border-border p-4">
                    <Image src={client.logo} alt={client.alt} className="max-w-full max-h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};export default ClientLogos;
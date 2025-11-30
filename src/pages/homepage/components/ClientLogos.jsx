import React from 'react';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
// Toggle this to true if you want to show the logos
const showClientLogos = false;

if (!showClientLogos) return null; // Component will render nothing

const clients = [
{
name: "Korean Super Store",
logo: "[https://img.rocket.new/generatedImages/rocket_gen_img_1cf9e762a-1764004135360.png](https://img.rocket.new/generatedImages/rocket_gen_img_1cf9e762a-1764004135360.png)",
alt: "Korean Super Store logo featuring modern typography with red and white color scheme representing premium Korean products retail brand"
},
{
name: "TechVision India",
logo: "[https://img.rocket.new/generatedImages/rocket_gen_img_14916a117-1764004136884.png](https://img.rocket.new/generatedImages/rocket_gen_img_14916a117-1764004136884.png)",
alt: "TechVision India logo with blue gradient and circuit pattern symbolizing technology innovation and digital transformation company"
},
// ...other clients
];

return ( <section className="py-16 bg-muted/30"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-12"> <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
Trusted By Leading Brands </p> <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
Brands We've Transformed </h2> </div>

```
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center bg-card rounded-xl border border-border hover:border-primary/50 transition-all p-4"
          >
            <Image
              src={client.logo}
              alt={client.alt}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-muted-foreground">
        Join <span className="font-bold text-foreground">50+ brands</span> that trust Marketverse for their growth journey
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
</section> 

);
};

export default ClientLogos;       
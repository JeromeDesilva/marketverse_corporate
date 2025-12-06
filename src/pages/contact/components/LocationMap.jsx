import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const offices = [
    {
      city: 'Chennai',
      address: 'Marketverse HQ, Ambattur Industrial Estate, Chennai 600053, Tamil Nadu, Kallikuppam',
      phone: '+91 86628 41456',
      email: 'chennai@marketverse.co.in',
      isPrimary: true,
      lat: 13.1212,
      lng: 80.1622
    },
    {
      city: 'Delhi',
      address: 'Marketverse North, Coming Soon, Delhi & Mumbai, India',
      phone: null,
      email: null,
      isPrimary: false,
      lat: 28.6139,
      lng: 77.2090
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our HQ in Chennai. We are expanding to Delhi soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices?.map((office, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              
              <div className="relative h-64 bg-muted overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${office?.city} Office Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office?.lat},${office?.lng}&z=14&output=embed`}
                  className="border-0"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {office?.city} Office
                </h3>

                {office?.isPrimary && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    <Icon name="Star" size={12} />
                    Headquarters
                  </span>
                )}

                <div className="space-y-3 mt-4">
                  <div className="flex gap-3">
                    <Icon name="MapPin" size={20} color="var(--color-primary)" />
                    <p className="text-muted-foreground">{office?.address}</p>
                  </div>

                  {office?.phone && (
                    <div className="flex gap-3">
                      <Icon name="Phone" size={20} color="var(--color-primary)" />
                      <a href={`tel:${office?.phone}`} className="text-foreground hover:text-primary transition-colors">
                        {office?.phone}
                      </a>
                    </div>
                  )}

                  {office?.email && (
                    <div className="flex gap-3">
                      <Icon name="Mail" size={20} color="var(--color-primary)" />
                      <a href={`mailto:${office?.email}`} className="text-foreground hover:text-primary transition-colors">
                        {office?.email}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  {office?.city === 'Delhi' ? (
                    <span className="inline-flex items-center gap-2 text-muted-foreground font-semibold">
                      Coming Soon
                      <Icon name="Clock" size={18} />
                    </span>
                  ) : (
                    <a
                      href={`https://www.google.com/maps?q=${office?.lat},${office?.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      <span>Get Directions</span>
                      <Icon name="ArrowRight" size={18} />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LocationMap;

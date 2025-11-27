import React from 'react';
import { MapPin, Clock, Wifi, Coffee, Users, Globe } from 'lucide-react';

const WorkEnvironment = () => {
  const officeLocations = [
    {
      icon: <MapPin className="w-5 h-5" />,
      city: 'Chennai',
      address: 'T. Nagar, Chennai, Tamil Nadu',
      type: 'Headquarters',
      features: ['Executive offices', 'Operations center', 'Conference facilities', 'Collaboration spaces']
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      city: 'Mumbai',
      address: 'Bandra West, Mumbai, Maharashtra',
      type: 'Regional Office',
      features: ['Modern amenities', 'Team workspaces', 'Meeting rooms', 'Innovation lab']
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      city: 'Bangalore',
      address: 'Koramangala, Bangalore, Karnataka',
      type: 'Tech Hub',
      features: ['Tech-enabled offices', 'Process labs', 'Training facilities', 'Relaxation zones']
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      city: 'Delhi NCR',
      address: 'Connaught Place, New Delhi',
      type: 'North Regional Office',
      features: ['Executive meeting rooms', 'Operations command center', 'Team spaces']
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      city: 'Hyderabad',
      address: 'HITEC City, Hyderabad, Telangana',
      type: 'Growing Office',
      features: ['Modern infrastructure', 'Collaboration areas', 'Break-out spaces']
    }
  ];

  const internationalOpportunities = [
    {
      region: 'Dubai',
      description: 'Middle East operations expansion'
    },
    {
      region: 'Singapore',
      description: 'Asia-Pacific operational leadership'
    },
    {
      region: 'South Korea',
      description: 'East Asian market operations'
    }
  ];

  const workModel = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Hybrid Flexibility',
      description: '3 days office / 2 days remote with flexibility for operational needs'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Schedule',
      description: 'Core hours 10 AM - 4 PM with adaptability for cross-timezone coordination'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Executive Amenities',
      description: 'Premium offices with executive facilities, cafeteria, and comfortable workspaces'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Leadership',
      description: 'Open-door policy, strategic planning sessions, and cross-functional leadership'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Environment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Executive-level offices across India's major metro cities with international operations opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {workModel?.map((model, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {model?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {model?.title}
                </h3>
                <p className="text-muted-foreground">
                  {model?.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Office Locations Across India
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeLocations?.map((location, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {location?.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{location?.city}</h4>
                      <p className="text-sm text-muted-foreground">{location?.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{location?.address}</p>
                  <div className="space-y-2">
                    {location?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  International Operations Opportunities
                </h3>
                <p className="text-muted-foreground">
                  Lead operations expansion into key international markets
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {internationalOpportunities?.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-background/50 rounded-lg p-4 border border-primary/10"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {opportunity?.region}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {opportunity?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p className="text-sm text-muted-foreground">India Office Locations</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-sm text-muted-foreground">International Markets</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Hybrid</div>
              <p className="text-sm text-muted-foreground">Flexible Work Model</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
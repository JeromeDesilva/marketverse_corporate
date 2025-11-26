import React from 'react';
import { Home, Coffee, Plane, Clock, Wifi, Building2, Laptop } from 'lucide-react';

const WorkEnvironment = () => {
  const environment = [
    {
      icon: Laptop,
      title: 'Flexible Work Model',
      description: 'Work across domestic and international sponsor relations',
      features: [
        'Hybrid work options with travel opportunities',
        'Domestic offices in Chennai, Mumbai, Bangalore, Delhi, Hyderabad',
        'International partnership opportunities in Dubai, Singapore, South Korea, Middle Eastern countries',
        'Modern communication and collaboration tools'
      ],
      alt: 'Flexible work environment with international partnership opportunities'
    },
    {
      icon: Building2,
      title: 'Office Culture',
      description: 'Modern, collaborative workspace in downtown Los Angeles with amenities',
      highlights: ['Open-plan design', 'Dedicated meeting rooms', 'Wellness spaces', 'Catered team lunches'],
      alt: 'Building icon representing modern office workspace and facilities'
    },
    {
      icon: Plane,
      title: 'Travel Requirements',
      description: 'Moderate travel expected for sponsor meetings, industry events, and conferences',
      highlights: ['20-30% travel time', 'Sponsor site visits', 'Conference attendance', 'Team off-sites'],
      alt: 'Airplane icon representing business travel and conference attendance'
    },
    {
      icon: Clock,
      title: 'Work Schedule',
      description: 'Standard business hours with flexibility for sponsor meetings and events',
      highlights: ['Core hours: 10 AM - 4 PM PST', 'Flexible start/end times', 'Occasional evening events', 'Work-life balance priority'],
      alt: 'Clock icon representing flexible work schedule and time management'
    }
  ];

  const officePerks = [
    { icon: Coffee, label: 'Premium Coffee Bar', alt: 'Coffee cup icon representing office coffee bar amenity' },
    { icon: Wifi, label: 'High-Speed Internet', alt: 'Wifi icon representing fast internet connectivity' },
    { icon: Home, label: 'Ergonomic Workstations', alt: 'Home icon representing comfortable ergonomic workspace' },
    { icon: Building2, label: 'Downtown Location', alt: 'Building icon representing convenient downtown office location' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Environment & Logistics
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding where and how you'll work at Marketverse
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {environment?.map((detail, index) => {
              const IconComponent = detail?.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" aria-label={detail?.alt} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {detail?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {detail?.description}
                  </p>
                  <ul className="space-y-1">
                    {detail?.features?.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-6">Office Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {officePerks?.map((perk, index) => {
                const IconComponent = perk?.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <IconComponent className="w-6 h-6 text-primary" aria-label={perk?.alt} />
                    </div>
                    <p className="text-sm text-muted-foreground">{perk?.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">
              Work-Life Balance Commitment
            </h3>
            <p className="text-muted-foreground mb-4">
              At Marketverse, we understand that great work happens when people have balance in their lives. Our flexible work arrangements, generous time-off policies, and supportive culture ensure you can excel professionally while maintaining personal well-being.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary mb-1">20+</p>
                <p className="text-sm text-muted-foreground">Vacation Days</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary mb-1">Flexible</p>
                <p className="text-sm text-muted-foreground">Work Hours</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary mb-1">Remote</p>
                <p className="text-sm text-muted-foreground">Work Options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
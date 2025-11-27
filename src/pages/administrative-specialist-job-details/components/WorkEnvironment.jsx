import React from 'react';
import { MapPin, Clock, Coffee, Wifi, Users, Heart } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const WorkEnvironment = () => {
  const environmentFeatures = [
    {
      icon: MapPin,
      title: 'Office Locations',
      description: 'Modern office spaces in India metro cities',
      details: [
        'Chennai - Adyar office complex',
        'Mumbai - BKC business district',
        'Bangalore - Whitefield tech hub',
        'Delhi - Connaught Place center',
        'Hyderabad - HITEC City location'
      ]
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Work-life balance with flexible arrangements',
      details: [
        'Standard 9:00 AM - 6:00 PM schedule',
        'Flexible start times (8:30-9:30 AM)',
        'Occasional work-from-home options',
        'No mandatory overtime',
        'Weekend off policy'
      ]
    },
    {
      icon: Coffee,
      title: 'Office Amenities',
      description: 'Comfortable and well-equipped workspace',
      details: [
        'Modern ergonomic workstations',
        'Complimentary tea/coffee facilities',
        'Comfortable break rooms',
        'Clean and safe environment',
        'Accessible transportation'
      ]
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative and supportive work culture',
      details: [
        'Friendly and inclusive environment',
        'Regular team building activities',
        'Open communication channels',
        'Respect for diversity',
        'Professional growth mindset'
      ]
    },
    {
      icon: Wifi,
      title: 'Technology & Tools',
      description: 'Modern tools and systems for efficient work',
      details: [
        'Updated computer systems',
        'High-speed internet connectivity',
        'Cloud-based collaboration tools',
        'Regular software training',
        'IT support availability'
      ]
    },
    {
      icon: Heart,
      title: 'Employee Wellbeing',
      description: 'Support for physical and mental health',
      details: [
        'Regular health check-ups',
        'Wellness program access',
        'Mental health support',
        'Festival celebrations',
        'Employee assistance program'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Environment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern office spaces with flexible scheduling and supportive team culture across India metro cities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {environmentFeatures?.map((feature, index) => {
              const Icon = feature?.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature?.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {feature?.description}
                  </p>
                  <ul className="space-y-2">
                    {feature?.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
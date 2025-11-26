import React from 'react';
import { Home, Coffee, Laptop, Calendar } from 'lucide-react';

const WorkEnvironment = () => {
  const environment = [
    {
      icon: Laptop,
      title: 'Flexible Work Model',
      description: 'Work in modern office environments',
      features: [
        'Hybrid work options available',
        'Office locations in Chennai, Mumbai, Bangalore, Delhi, Hyderabad',
        'Modern office infrastructure and technology',
        'Flexible work hours'
      ],
      alt: 'Flexible work environment'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Hybrid Schedule',
      description: 'Balanced in-office and remote work arrangement',
      details: ['3 days in-office required', '2 days remote flexibility', 'Core hours: 9 AM - 5 PM']
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Modern Tools',
      description: 'Access to latest technology and software systems',
      details: ['MS Office 365', 'Project management tools', 'Cloud document systems']
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Office Amenities',
      description: 'Comfortable workspace with excellent facilities',
      details: ['Modern office space', 'Break room and kitchen', 'Ergonomic workstations']
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Supportive schedule with flexibility when needed',
      details: ['Standard business hours', 'Minimal overtime', 'Paid time off']
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Environment & Culture
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional atmosphere with modern amenities and supportive team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {environment?.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {item?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item?.title}</h3>
                <p className="text-muted-foreground mb-4">{item?.description}</p>
                <ul className="space-y-2">
                  {item?.features?.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
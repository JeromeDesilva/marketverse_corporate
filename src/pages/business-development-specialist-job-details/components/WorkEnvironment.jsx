import React from 'react';
import { Coffee, Laptop, Calendar } from 'lucide-react';

const WorkEnvironment = () => {
  const environment = [
    {
      icon: Laptop,
      title: 'Flexible Work Model',
      description: 'Work across domestic and international markets',
      features: [
        'Hybrid work model with flexibility',
        'Domestic offices in Chennai, Mumbai, Bangalore, Delhi, Hyderabad',
        'International opportunities in Dubai, Singapore, South Korea, Middle Eastern countries',
        'Modern technology and CRM tools provided'
      ],
      alt: 'Flexible work environment with international opportunities'
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Modern Tools & Tech',
      description: 'Latest sales enablement technology and CRM systems for optimal productivity',
      details: ['Salesforce/HubSpot CRM', 'LinkedIn Sales Navigator', 'Video conferencing tools']
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Collaborative Culture',
      description: 'Dynamic team environment with regular brainstorming and knowledge sharing',
      details: ['Weekly team huddles', 'Lunch-and-learn sessions', 'Sales competition events']
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Balanced Schedule',
      description: 'Structured routine with autonomy to manage your pipeline and client meetings',
      details: ['Flexible scheduling', 'Self-managed territory', 'Results-focused culture']
    }
  ];

  const dailySchedule = [
    { time: '9:00 AM - 10:00 AM', activity: 'Pipeline review and daily planning', type: 'Planning' },
    { time: '10:00 AM - 12:00 PM', activity: 'Prospecting calls and client meetings', type: 'Client Work' },
    { time: '12:00 PM - 1:00 PM', activity: 'Lunch / Networking', type: 'Break' },
    { time: '1:00 PM - 3:00 PM', activity: 'Proposal development and deal coordination', type: 'Strategy' },
    { time: '3:00 PM - 4:30 PM', activity: 'Team collaboration and internal meetings', type: 'Team' },
    { time: '4:30 PM - 5:30 PM', activity: 'Follow-ups and CRM updates', type: 'Admin' }
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
              Mobile-responsive design with optimized interactions across all devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
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

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Typical Day Structure</h3>
            <div className="space-y-3">
              {dailySchedule?.map((slot, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm font-medium text-foreground">{slot?.time}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground">{slot?.activity}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {slot?.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
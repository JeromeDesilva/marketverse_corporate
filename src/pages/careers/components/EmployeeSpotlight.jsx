import React from 'react';
import { Quote, TrendingUp, Award } from 'lucide-react';

const EmployeeSpotlight = () => {
  const spotlights = [
    {
      name: 'Alexandra Martinez',
      role: 'Director of Strategy',
      image: null,
      journey: 'Started as Marketing Coordinator in 2019, promoted to Specialist in 2020, Team Lead in 2022, and Director in 2024',
      quote: 'The growth opportunities here are incredible. I never imagined I would progress from coordinator to director in just 5 years. The mentorship and trust from leadership made all the difference.',
      achievements: [
        'Led 50+ successful campaigns',
        'Grew team from 3 to 15 members',
        'Won Agency Excellence Award 2023'
      ],
      alt: 'Alexandra Martinez smiling in professional business attire in modern office'
    },
    {
      name: 'David Okonkwo',
      role: 'Senior Digital Marketing Specialist',
      image: null,
      journey: 'Joined as Junior Specialist in 2020, became Specialist in 2021, achieved Senior role in 2023',
      quote: 'I love the collaborative environment and continuous learning culture. Every project is an opportunity to grow and try new strategies.',
      achievements: [
        'Increased client ROI by 300%',
        'Certified in 10+ marketing platforms',
        'Mentored 5 junior team members'
      ],
      alt: 'David Okonkwo presenting digital marketing results on large display screen'
    },
    {
      name: 'Lisa Thompson',
      role: 'Business Development Manager',
      image: null,
      journey: 'Transitioned from Account Manager to BDM in 2022, exceeded targets consistently',
      quote: 'The trust and autonomy I have here is refreshing. Management empowers us to make decisions and own our success.',
      achievements: [
        'Closed $2M in new business',
        'Expanded into 3 new markets',
        'Built partnerships with 20+ brands'
      ],
      alt: 'Lisa Thompson shaking hands with client in modern conference room'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Employee Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real career journeys from team members who've grown with Marketverse
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {spotlights?.map((spotlight, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/60 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {spotlight?.name?.split(' ')?.map(n => n?.[0])?.join('')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {spotlight?.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {spotlight?.role}
                </p>
                
                <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {spotlight?.journey}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-primary/40 mb-2" />
                  <p className="text-sm text-muted-foreground italic">
                    "{spotlight?.quote}"
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-foreground">Key Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {spotlight?.achievements?.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeSpotlight;
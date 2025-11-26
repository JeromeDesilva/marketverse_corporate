import React from 'react';
import { Briefcase, Users, Target } from 'lucide-react';
import Button from '../../../components/ui/Button';

const RelatedPositions = () => {
  const relatedJobs = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Business Development Specialist',
      department: 'Business Development',
      location: 'Chicago / Hybrid',
      description: 'Drive business growth through strategic lead generation and client relationships',
      link: '/business-development-specialist-job-details'
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Remote / Chicago',
      description: 'Oversee daily operations and streamline business processes',
      link: '/careers'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Customer Care Specialist',
      department: 'Customer Support',
      location: 'Remote / Multiple Locations',
      description: 'Provide exceptional customer support in multiple languages',
      link: '/careers'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore other opportunities at Marketverse
            </p>
          </div>

          <div className="grid gap-6">
            {relatedJobs?.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {job?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{job?.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {job?.department}
                        </span>
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                          {job?.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{job?.description}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => window.location.href = job?.link}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.location.href = '/careers'}
            >
              View All Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPositions;
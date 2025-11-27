import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

const RelatedPositions = () => {
  const positions = [
    {
      title: 'Administrative Specialist',
      department: 'Operations',
      location: 'Chennai / Hybrid',
      type: 'Full-time',
      description: 'Drive organizational excellence through office management and coordination',
      link: '/administrative-specialist-job-details'
    },
    {
      title: 'Business Development Specialist',
      department: 'Business Development',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      description: 'Drive new business acquisition and build long-term client relationships',
      link: '/business-development-specialist-job-details'
    },
    {
      title: 'Marketing Strategist',
      department: 'Strategy',
      location: 'Bangalore / Remote',
      type: 'Full-time',
      description: 'Lead multi-channel marketing strategies for enterprise clients',
      link: '/marketing-strategist-job-details'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore other leadership opportunities across our organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {positions?.map((position, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {position?.department}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {position?.title}
                </h3>

                <div className="text-sm text-muted-foreground mb-4">
                  <p>{position?.location}</p>
                  <p>{position?.type}</p>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  {position?.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => window.location.href = position?.link}
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see the right position? Check out all our open roles
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => window.location.href = '/careers'}
            >
              View All Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPositions;
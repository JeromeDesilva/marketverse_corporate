import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

const RelatedPositions = () => {
  const relatedJobs = [
    {
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Mumbai / Bangalore',
      type: 'Full-time',
      description: 'Lead operational excellence through process optimization and team management',
      link: '/operations-manager-job-details'
    },
    {
      title: 'Marketing Strategist',
      department: 'Marketing',
      location: 'Bangalore / Remote',
      type: 'Full-time',
      description: 'Develop data-driven marketing strategies for brand growth',
      link: '/marketing-strategist-job-details'
    },
    {
      title: 'Business Development Specialist',
      department: 'Sales',
      location: 'Delhi / Hyderabad',
      type: 'Full-time',
      description: 'Drive revenue growth through strategic client partnerships',
      link: '/business-development-specialist-job-details'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore other exciting career opportunities at Marketverse
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedJobs?.map((job, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {job?.department}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {job?.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{job?.location}</span>
                  <span>•</span>
                  <span>{job?.type}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {job?.description}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.href = job?.link}
                  className="w-full"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
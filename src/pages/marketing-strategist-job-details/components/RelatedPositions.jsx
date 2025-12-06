import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

const RelatedPositions = () => {
  const positions = [
    {
      title: 'Creative Director',
      department: 'Creative',
      location: 'India / Remote',
      type: 'Full-time',
      description: 'Lead creative vision for major campaigns and oversee design, copy, and production teams.',
      alt: 'Creative director position card'
    },
    {
      title: 'Business Development Manager',
      department: 'Business Development',
      location: 'India / Remote',
      type: 'Full-time',
      description: 'Drive new business acquisition and build long-term client relationships.',
      alt: 'Business development manager position card'
    },
    {
      title: 'Public Relations Specialist',
      department: 'Marketing',
      location: 'India / Remote',
      type: 'Full-time',
      description: 'Manage company reputation and media relations through strategic PR campaigns.',
      alt: 'Public relations specialist position card'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Related Positions
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Explore other strategic and marketing opportunities at Marketverse that complement your skills.
          </p>

          <div className="space-y-4">
            {positions?.map((position, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {position?.department}
                      </span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                        {position?.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {position?.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      📍 {position?.location}
                    </p>
                    
                    <p className="text-muted-foreground">
                      {position?.description}
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="default"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => window.location.href = '/careers'}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
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
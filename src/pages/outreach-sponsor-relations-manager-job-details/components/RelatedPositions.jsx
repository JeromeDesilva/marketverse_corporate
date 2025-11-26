import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import Button from '../../../components/ui/Button';

const RelatedPositions = () => {
  const relatedJobs = [
    {
      title: 'Public Relations Specialist',
      department: 'Marketing',
      location: 'New York / Remote',
      type: 'Full-time',
      description: 'Manage company reputation and media relations while developing PR strategies',
      alt: 'Public relations professional managing media communications and press releases'
    },
    {
      title: 'Senior Marketing Strategist',
      department: 'Strategy',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Lead multi-channel marketing strategies for enterprise clients',
      alt: 'Marketing strategist analyzing campaign performance on digital dashboard'
    },
    {
      title: 'Business Development Manager',
      department: 'Business Development',
      location: 'Chicago',
      type: 'Full-time',
      description: 'Drive new business acquisition and build long-term client relationships',
      alt: 'Business development manager presenting growth opportunities to clients'
    }
  ];

  const companyLinks = [
    { label: 'About Marketverse', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Company Culture', href: '/careers' }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore other opportunities that might be a great fit
            </p>
          </div>
          
          <div className="grid gap-6 mb-12">
            {relatedJobs?.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {job?.department}
                      </span>
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                        {job?.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {job?.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" aria-label="Map pin icon indicating job location" />
                        <span>{job?.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" aria-label="Clock icon indicating employment type" />
                        <span>{job?.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {job?.description}
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
          
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Learn More About Marketverse
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {companyLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.href}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <span className="text-foreground font-medium">{link?.label}</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-label="Arrow right icon indicating navigation link" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPositions;
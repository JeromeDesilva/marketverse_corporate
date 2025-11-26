import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

const JobListings = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Positions' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'business', label: 'Business Development' },
    { id: 'creative', label: 'Creative' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Marketing Strategist',
      category: 'strategy',
      location: 'Remote / New York',
      type: 'Full-time',
      department: 'Strategy',
      description: 'Lead multi-channel marketing strategies for enterprise clients. Develop data-driven campaigns and mentor junior strategists.',
      requirements: ['5+ years marketing strategy experience', 'Proven track record in B2B/B2C campaigns', 'Strong analytical skills'],
      alt: 'Senior marketing professional reviewing campaign analytics on dual monitors in modern office'
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      category: 'marketing',
      location: 'Los Angeles',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Execute and optimize digital marketing campaigns across multiple platforms. Focus on SEO, SEM, and social media marketing.',
      requirements: ['3+ years digital marketing experience', 'Google Ads & Facebook Ads certified', 'Strong content creation skills'],
      alt: 'Marketing specialist analyzing social media performance metrics dashboard'
    },
    {
      id: 3,
      title: 'Business Development Manager',
      category: 'business',
      location: 'Chicago',
      type: 'Full-time',
      department: 'Business Development',
      description: 'Drive new business acquisition and build long-term client relationships. Identify growth opportunities and partnership potential.',
      requirements: ['4+ years B2B sales experience', 'Proven ability to close deals', 'Excellent communication skills'],
      alt: 'Business development manager presenting growth strategy in conference room'
    },
    {
      id: 4,
      title: 'Content Marketing Lead',
      category: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Develop and execute content strategies that drive engagement and conversions. Manage content team and editorial calendar.',
      requirements: ['5+ years content marketing experience', 'Strong writing and editing skills', 'Team leadership experience'],
      alt: 'Content team collaborating on editorial calendar and campaign strategy'
    },
    {
      id: 5,
      title: 'Creative Director',
      category: 'creative',
      location: 'New York',
      type: 'Full-time',
      department: 'Creative',
      description: 'Lead creative vision for major campaigns. Oversee design, copy, and production teams to deliver innovative marketing solutions.',
      requirements: ['7+ years creative leadership', 'Award-winning portfolio', 'Strong understanding of brand strategy'],
      alt: 'Creative director presenting campaign concept boards to team'
    },
    {
      id: 6,
      title: 'Marketing Analyst',
      category: 'marketing',
      location: 'Remote / Boston',
      type: 'Full-time',
      department: 'Analytics',
      description: 'Analyze marketing performance data and provide actionable insights. Build dashboards and reporting systems.',
      requirements: ['2+ years analytics experience', 'Proficiency in Google Analytics, Tableau', 'SQL knowledge preferred'],
      alt: 'Marketing analyst reviewing performance dashboards showing ROI metrics'
    }
  ];

  const filteredJobs = activeCategory === 'all' 
    ? jobs 
    : jobs?.filter(job => job?.category === activeCategory);

  return (
    <section id="job-listings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities to join our growing team across multiple departments and locations
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category?.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {filteredJobs?.map((job) => (
            <div
              key={job?.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
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
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job?.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job?.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {job?.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job?.requirements?.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex md:flex-col gap-2">
                  <Button
                    variant="default"
                    size="default"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => alert(`More details about ${job?.title}`)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs?.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              No positions available in this category at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
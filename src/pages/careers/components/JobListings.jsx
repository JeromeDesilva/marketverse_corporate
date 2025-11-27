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
    { id: 'creative', label: 'Creative' },
    { id: 'operations', label: 'Operations' },
    { id: 'franchise', label: 'Franchise Management' },
    { id: 'support', label: 'Customer Support' }
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
      id: 11,
      title: 'Administrative Specialist',
      category: 'operations',
      location: 'New York / Hybrid',
      type: 'Full-time',
      department: 'Operations',
      description: 'Drive organizational excellence through office management, document coordination, and executive support functions.',
      requirements: ['3+ years administrative experience', 'Proficiency in Microsoft Office Suite', 'Strong organizational and multitasking abilities'],
      alt: 'Administrative specialist managing office operations in modern workspace'
    },
    {
      id: 2,
      title: 'Outreach & Sponsor Relations Manager',
      category: 'marketing',
      location: 'Los Angeles / Remote',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Develop and maintain strategic partnerships with sponsors and brand ambassadors. Create outreach campaigns to expand brand presence and drive collaboration opportunities.',
      requirements: ['4+ years experience in outreach or partnership management', 'Strong networking and relationship-building skills', 'Experience with sponsor acquisition and retention', 'Excellent presentation and negotiation abilities'],
      alt: 'Outreach manager presenting partnership proposal to potential sponsors in modern meeting room'
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
      title: 'Public Relations Specialist',
      category: 'marketing',
      location: 'New York / Remote',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Manage company reputation and media relations. Develop PR strategies, write press releases, and coordinate with media outlets to enhance brand visibility.',
      requirements: ['3+ years PR or communications experience', 'Strong media relations and crisis management skills', 'Excellent writing and storytelling abilities', 'Experience with press release distribution and media pitching'],
      alt: 'Public relations specialist conducting media interview and managing press communications'
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
      id: 7,
      title: 'Operations Manager',
      category: 'operations',
      location: 'Remote / Chicago',
      type: 'Full-time',
      department: 'Operations',
      description: 'Oversee daily operations and streamline business processes. Implement operational strategies to improve efficiency and productivity across all departments.',
      requirements: ['5+ years operations management experience', 'Strong project management skills', 'Process optimization expertise', 'Leadership and team coordination abilities'],
      alt: 'Operations manager reviewing workflow processes and efficiency metrics on digital dashboard'
    },
    {
      id: 8,
      title: 'Franchise Manager',
      category: 'franchise',
      location: 'Dallas / Hybrid',
      type: 'Full-time',
      department: 'Franchise Development',
      description: 'Manage franchise operations and support franchise partners. Develop franchise systems, provide ongoing training, and ensure brand consistency across locations.',
      requirements: ['4+ years franchise management experience', 'Strong communication and relationship building', 'Knowledge of franchise regulations and compliance', 'Business development and training capabilities'],
      alt: 'Franchise manager conducting training session with franchise partners in modern conference room'
    },
    {
      id: 6,
      title: 'Event Management Coordinator',
      category: 'marketing',
      location: 'Remote / Boston',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Plan, coordinate, and execute corporate events, conferences, and brand activations. Manage event logistics, vendor relationships, and ensure seamless execution of marketing events.',
      requirements: ['3+ years event planning or coordination experience', 'Strong project management and organizational skills', 'Experience with event budgeting and vendor management', 'Ability to handle multiple events simultaneously'],
      alt: 'Event coordinator managing corporate event setup and coordinating with vendors at conference venue'
    },
    {
      id: 9,
      title: 'Customer Care Specialist - Domestic (Bilingual/Multilingual)',
      category: 'support',
      location: 'Remote / Multiple Locations',
      type: 'Full-time',
      department: 'Customer Support',
      description: 'Provide exceptional customer support to domestic clients in multiple languages. Handle inquiries, resolve issues, and ensure customer satisfaction through various communication channels.',
      requirements: ['Fluency in English plus at least one additional language (Spanish, Mandarin, Korean, or others)', '2+ years customer service experience', 'Strong problem-solving and communication skills', 'Experience with CRM systems and support ticketing platforms'],
      alt: 'Bilingual customer care specialist assisting customers through headset in modern support center'
    },
    {
      id: 10,
      title: 'International Customer Support Representative',
      category: 'support',
      location: 'Remote / Global Coverage',
      type: 'Full-time',
      department: 'Customer Support',
      description: 'Deliver world-class customer support to international clients across different time zones. Manage complex inquiries, coordinate with global teams, and ensure seamless service delivery.',
      requirements: ['3+ years international customer support experience', 'Excellent English communication skills (additional languages a plus)', 'Cultural awareness and adaptability', 'Experience with global support operations and time zone management', 'Strong technical troubleshooting abilities'],
      alt: 'International customer support representative providing 24/7 assistance to global clients from modern workspace'
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
                    onClick={() => {
                      if (job?.id === 1) {
                        window.location.href = '/marketing-strategist-job-details';
                      } else if (job?.id === 2) {
                        window.location.href = '/outreach-sponsor-relations-manager-job-details';
                      } else if (job?.id === 3) {
                        window.location.href = '/business-development-specialist-job-details';
                      } else if (job?.id === 4) {
                        window.location.href = '/public-relations-specialist-job-details';
                      } else if (job?.id === 6) {
                        alert('Event Management Coordinator details coming soon!');
                      } else if (job?.id === 7) {
                        window.location.href = '/operations-manager-job-details';
                      } else if (job?.id === 11) {
                        window.location.href = '/administrative-specialist-job-details';
                      } else {
                        alert(`More details about ${job?.title}`);
                      }
                    }}
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
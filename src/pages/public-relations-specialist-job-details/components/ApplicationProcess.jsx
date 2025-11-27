import React from 'react';
import { FileText, Video, Users, CheckCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Submit Application',
      description: 'Complete online application with resume, portfolio, and writing samples',
      duration: '10-15 minutes',
      requirements: [
        'Updated resume highlighting PR experience',
        'Portfolio showcasing media placements',
        '2-3 writing samples (press releases, media pitches)',
        'Cover letter explaining PR philosophy'
      ]
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Initial Screening',
      description: 'Phone or video screening with PR team to discuss experience and expectations',
      duration: '30 minutes',
      requirements: [
        'Review of PR background and media relationships',
        'Discussion of campaign successes',
        'Assessment of communication style',
        'Salary expectations alignment'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Skills Assessment',
      description: 'Complete PR-focused case study and writing evaluation',
      duration: '2-3 hours',
      requirements: [
        'Draft press release for given scenario',
        'Develop media pitch strategy',
        'Crisis communication response plan',
        'Media list compilation exercise'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Interview',
      description: 'Meet with PR team leads and marketing leadership',
      duration: '1-2 hours',
      requirements: [
        'Present portfolio and campaign results',
        'Discuss strategic PR approach',
        'Team collaboration assessment',
        'Cultural fit evaluation'
      ]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Final Round & Offer',
      description: 'Discussion with department head and offer presentation',
      duration: '45 minutes',
      requirements: [
        'Vision alignment discussion',
        'Compensation negotiation',
        'Role expectations clarification',
        'Offer letter issuance'
      ]
    }
  ];

  return (
    <section id="application-process" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured hiring process ensures we find candidates with exceptional PR skills and portfolio showcase capabilities
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {steps?.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ml-0 md:ml-20"
                >
                  <div className="absolute -left-12 top-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg hidden md:flex">
                    {index + 1}
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {step?.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {step?.title}
                        </h3>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {step?.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {step?.description}
                      </p>
                    </div>
                  </div>

                  <div className="ml-16">
                    <h4 className="font-semibold text-foreground mb-3">What to Expect:</h4>
                    <ul className="space-y-2">
                      {step?.requirements?.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Application?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                The entire process typically takes 2-3 weeks. We'll keep you informed at every stage and provide feedback throughout.
              </p>
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Apply Now
              </Button>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2-3 Weeks</div>
              <p className="text-sm text-muted-foreground">Average Process Duration</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">5 Stages</div>
              <p className="text-sm text-muted-foreground">Comprehensive Evaluation</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Transparent Communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
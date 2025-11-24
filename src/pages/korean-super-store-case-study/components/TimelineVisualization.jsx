import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineVisualization = () => {
  const milestones = [
    {
      date: "January 2023",
      title: "Partnership Initiation",
      description: "Initial consultation and market research phase begins. Comprehensive analysis of Indian retail landscape and Korean product demand.",
      icon: "Handshake",
      color: "primary"
    },
    {
      date: "March 2023",
      title: "Brand Strategy Development",
      description: "Completed brand positioning framework, visual identity system, and digital platform architecture. Finalized 'Authentic Korea, Accessible India' positioning.",
      icon: "Lightbulb",
      color: "secondary"
    },
    {
      date: "May 2023",
      title: "First Store Launch",
      description: "Grand opening of flagship store in Mumbai with Korean cultural festival. Achieved 2,500 visitors in opening weekend, exceeding projections by 180%.",
      icon: "Store",
      color: "accent"
    },
    {
      date: "July 2023",
      title: "Digital Platform Launch",
      description: "E-commerce website and mobile app go live with integrated inventory management. Social media campaigns reach 500K impressions in first month.",
      icon: "Smartphone",
      color: "innovation"
    },
    {
      date: "September 2023",
      title: "Expansion Phase Begins",
      description: "Opened 4 new locations across Delhi and Bangalore. Launched subscription box service with 3,000 initial subscribers.",
      icon: "TrendingUp",
      color: "success"
    },
    {
      date: "November 2023",
      title: "B2B Partnerships",
      description: "Secured partnerships with 25 restaurants and cafes for bulk Korean ingredient supply. Established corporate gifting program.",
      icon: "Briefcase",
      color: "primary"
    },
    {
      date: "January 2024",
      title: "Market Leadership",
      description: "Achieved 34% market share in specialty Korean retail. Customer base crosses 30,000 with 4.7/5 satisfaction rating.",
      icon: "Award",
      color: "secondary"
    },
    {
      date: "March 2024",
      title: "Regional Expansion",
      description: "Opened stores in Pune and Hyderabad. Launched Korean cooking classes and cultural events program with 500+ monthly participants.",
      icon: "MapPin",
      color: "accent"
    },
    {
      date: "June 2024",
      title: "Milestone Achievement",
      description: "Reached 50,000 customers and ₹10 Cr annual revenue. Recognized as 'Best Specialty Retail Brand' by Indian Retail Forum.",
      icon: "Trophy",
      color: "success"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Project Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An 18-month journey from concept to market leadership, marked by strategic milestones and measurable achievements.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-xl transition-all duration-300 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-${milestone?.color}/10 flex items-center justify-center`}>
                        <Icon name={milestone?.icon} size={20} color={`var(--color-${milestone?.color})`} />
                      </div>
                      <span className="text-sm font-semibold text-primary">{milestone?.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone?.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone?.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-16">
                  <div className={`w-4 h-4 rounded-full bg-${milestone?.color} border-4 border-background shadow-lg`} />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-innovation/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Clock" size={24} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Project Duration Insights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The 18-month timeline was strategically designed to balance rapid market entry with sustainable growth. Each phase built upon previous successes while maintaining operational excellence and customer satisfaction.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">On-time delivery: 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Budget adherence: 98%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Goal achievement: 145%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineVisualization;
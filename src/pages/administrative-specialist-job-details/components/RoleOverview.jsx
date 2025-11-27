import React from 'react';
import { FileText, Users, Calendar, Target } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const RoleOverview = () => {
  const overview = [
    {
      icon: FileText,
      title: 'Data Entry & Document Management',
      description: 'Handle accurate data entry, maintain comprehensive filing systems, and ensure proper documentation of critical business records'
    },
    {
      icon: Calendar,
      title: 'Scheduling Coordination',
      description: 'Coordinate schedules, manage appointments, and handle basic office logistics for team activities'
    },
    {
      icon: Users,
      title: 'Office Support Functions',
      description: 'Provide essential administrative support including communication management and general office duties'
    },
    {
      icon: Target,
      title: 'Career Development Path',
      description: 'Clear advancement opportunities from specialist to senior administrative roles with structured training programs'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Role Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Essential entry-level position supporting organizational efficiency through fundamental administrative functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {overview?.map((item, index) => {
              const Icon = item?.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
import React from 'react';
import { FileText, Calendar, Database, Mail, CheckCircle2, ClipboardCheck } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Maintain filing systems, process correspondence, and ensure proper archiving of business records',
      tasks: [
        'Organize physical and digital document filing systems',
        'Process incoming and outgoing mail and packages',
        'Manage document version control and distribution',
        'Ensure compliance with document retention policies'
      ]
    },
    {
      icon: Database,
      title: 'Data Entry & Accuracy',
      description: 'Perform accurate data entry and maintain database integrity across company systems',
      tasks: [
        'Enter and update information in company databases',
        'Verify data accuracy and completeness',
        'Generate basic reports and data summaries',
        'Maintain confidentiality of sensitive information'
      ]
    },
    {
      icon: Calendar,
      title: 'Scheduling Support',
      description: 'Coordinate calendars and manage basic logistical arrangements for team activities',
      tasks: [
        'Schedule meetings and coordinate conference rooms',
        'Manage appointment calendars for team members',
        'Send meeting reminders and prepare basic agendas',
        'Coordinate simple travel arrangements'
      ]
    },
    {
      icon: Mail,
      title: 'Communication Handling',
      description: 'Manage routine communications and ensure timely responses to inquiries',
      tasks: [
        'Answer and direct phone calls professionally',
        'Respond to routine email inquiries',
        'Maintain contact lists and distribution groups',
        'Distribute company announcements'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Office Operations',
      description: 'Support daily office functions and maintain organized workspace',
      tasks: [
        'Monitor and order office supplies',
        'Coordinate equipment maintenance requests',
        'Assist with preparation of basic presentations',
        'Support visitor reception and hospitality'
      ]
    },
    {
      icon: CheckCircle2,
      title: 'Process Support',
      description: 'Follow established procedures and assist with process improvements',
      tasks: [
        'Follow standard operating procedures',
        'Maintain organized workspace and filing systems',
        'Participate in process improvement initiatives',
        'Support team efficiency through proactive assistance'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Responsibilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Essential administrative duties supporting daily operations and organizational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {responsibilities?.map((responsibility, index) => {
              const Icon = responsibility?.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {responsibility?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {responsibility?.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-16">
                    {responsibility?.tasks?.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitiesSection;
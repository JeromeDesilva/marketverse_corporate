import React from 'react';
import { FileText, Calendar, Users, Settings } from 'lucide-react';

const RoleOverview = () => {
  const highlights = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Document Management',
      description: 'Oversee document organization, filing systems, and administrative workflows'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Office Coordination',
      description: 'Manage office operations, supplies, facilities, and vendor relationships'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Executive Support',
      description: 'Provide high-level administrative support to leadership and project teams'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Process Optimization',
      description: 'Implement efficient administrative systems and standard operating procedures'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Position Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              A foundational role ensuring smooth operations and supporting our growing team
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">About the Role</h3>
            <p className="text-muted-foreground mb-6">
              As an Administrative Specialist, you'll be the backbone of our operations, ensuring everything runs smoothly and efficiently. This role combines traditional office management with modern digital coordination, requiring strong organizational skills, attention to detail, and the ability to juggle multiple priorities.
            </p>
            <p className="text-muted-foreground">
              You'll work directly with department heads, manage critical administrative functions, and contribute to process improvements that enhance overall organizational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights?.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {item?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item?.title}</h3>
                <p className="text-muted-foreground">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
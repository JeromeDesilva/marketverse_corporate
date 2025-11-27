import React from 'react';
import { Settings, TrendingUp, Users, Target } from 'lucide-react';

const RoleOverview = () => {
  const highlights = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Process Optimization',
      description: 'Streamline business processes and implement operational strategies to improve efficiency across all departments'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Management',
      description: 'Monitor key performance indicators and implement data-driven improvements to achieve organizational goals'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Leadership',
      description: 'Lead cross-functional teams and coordinate operations to ensure seamless execution of business initiatives'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategic Planning',
      description: 'Develop and execute operational strategies aligned with company objectives and growth targets'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Role Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As an Operations Manager at Marketverse, you'll be the driving force behind operational excellence, implementing strategies that enhance productivity and streamline processes across the organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights?.map((highlight, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {highlight?.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {highlight?.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight?.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Impact & Scope
            </h3>
            <p className="text-muted-foreground mb-6">
              Your strategic leadership will directly impact Marketverse's operational efficiency and scalability. You'll work at the intersection of multiple departments, implementing systems and processes that support our rapid growth while maintaining quality and consistency across all operations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <p className="text-sm text-muted-foreground">Efficiency Improvement Target</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Cross-functional Teams</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Employees Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
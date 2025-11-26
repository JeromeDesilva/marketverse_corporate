import React from 'react';
import { LineChart, Target, Users, Lightbulb } from 'lucide-react';

const RoleOverview = () => {
  const highlights = [
    {
      icon: LineChart,
      title: 'Strategic Planning',
      description: 'Develop comprehensive marketing strategies based on data analysis and market trends',
      alt: 'Line chart icon representing strategic planning and analytics'
    },
    {
      icon: Target,
      title: 'Campaign Optimization',
      description: 'Design and optimize multi-channel campaigns to maximize ROI and brand impact',
      alt: 'Target icon symbolizing campaign optimization and goal achievement'
    },
    {
      icon: Users,
      title: 'Cross-Functional Collaboration',
      description: 'Work with creative, analytics, and client teams to deliver integrated marketing solutions',
      alt: 'Team collaboration icon showing cross-functional work'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Insights',
      description: 'Generate actionable insights and innovative approaches to solve complex marketing challenges',
      alt: 'Lightbulb icon representing innovation and creative problem-solving'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Role Overview
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            As a Marketing Strategist at Marketverse, you'll be at the forefront of developing and executing data-driven marketing strategies that drive measurable results for our clients. This role combines analytical rigor with creative thinking, requiring you to understand market dynamics, consumer behavior, and emerging trends while crafting strategies that deliver competitive advantage.
          </p>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            You'll work on diverse client portfolios across multiple industries, leading strategic initiatives from conception through execution. Your contributions will directly impact client success metrics and shape the future of marketing excellence at Marketverse. This position offers the opportunity to work with cutting-edge marketing technologies while collaborating with industry-leading professionals.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights?.map((highlight, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {highlight?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOverview;
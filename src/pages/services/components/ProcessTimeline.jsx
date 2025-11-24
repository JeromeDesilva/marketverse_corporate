import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const phases = [
    {
      phase: "Discovery & Strategy",
      duration: "Week 1-2",
      icon: "Search",
      color: "#1B365D",
      activities: [
        "Comprehensive business analysis",
        "Market research and competitor study",
        "Target audience profiling",
        "Strategic roadmap development"
      ]
    },
    {
      phase: "Planning & Design",
      duration: "Week 3-4",
      icon: "Lightbulb",
      color: "#E8B931",
      activities: [
        "Campaign strategy finalization",
        "Creative concept development",
        "Content calendar creation",
        "Resource allocation planning"
      ]
    },
    {
      phase: "Execution & Launch",
      duration: "Week 5-8",
      icon: "Rocket",
      color: "#FF6B35",
      activities: [
        "Campaign implementation",
        "Content production and publishing",
        "Multi-channel deployment",
        "Initial performance monitoring"
      ]
    },
    {
      phase: "Optimization & Scale",
      duration: "Week 9-12",
      icon: "TrendingUp",
      color: "#2E8B57",
      activities: [
        "Performance analysis and reporting",
        "A/B testing and refinement",
        "Budget optimization",
        "Scaling successful initiatives"
      ]
    },
    {
      phase: "Growth & Support",
      duration: "Ongoing",
      icon: "Award",
      color: "#7C3AED",
      activities: [
        "Continuous improvement cycles",
        "Regular strategy reviews",
        "Market trend adaptation",
        "Long-term partnership support"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            A systematic approach refined over 100+ man-years of experience, ensuring consistent results and measurable growth.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B365D] via-[#E8B931] to-[#7C3AED] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {phases?.map((phase, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white border-2 border-[#E5E7EB] rounded-xl p-6 hover:border-[#1B365D] transition-all duration-300 hover:shadow-lg">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${phase?.color}15` }}
                      >
                        <Icon name={phase?.icon} size={24} color={phase?.color} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A1A]">{phase?.phase}</h3>
                        <p className="text-sm text-[#4A5568]">{phase?.duration}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase?.activities?.map((activity, idx) => (
                        <li key={idx} className={`flex items-start gap-2 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                          <Icon name="CheckCircle2" size={16} color={phase?.color} className="flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#4A5568]">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-16">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    style={{ backgroundColor: phase?.color }}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1B365D] to-[#7C3AED] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our proven process has helped 100+ brands achieve their marketing goals. Let's discuss how we can accelerate your growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-[#E8B931] hover:bg-[#E8B931]/90 text-[#1A1A1A] font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>Schedule Consultation</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <Icon name="Download" size={20} />
              <span>Download Process Guide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
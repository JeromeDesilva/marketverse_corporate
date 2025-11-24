import React from 'react';
import Icon from '../../../components/AppIcon';

const KeyLearnings = () => {
  const learnings = [
    {
      title: "Cultural Authenticity Drives Trust",
      icon: "Heart",
      color: "primary",
      insight: "Maintaining authentic Korean cultural elements while adapting to Indian preferences created a unique positioning that resonated with both K-culture enthusiasts and curious newcomers. The balance between authenticity and accessibility was crucial.",
      impact: "68% brand awareness in target demographic within 12 months"
    },
    {
      title: "Omnichannel Integration is Essential",
      icon: "Layers",
      color: "innovation",
      insight: "Seamless integration between physical stores and digital platforms created a unified customer experience. Customers who engaged across multiple channels showed 3x higher lifetime value than single-channel customers.",
      impact: "45% of customers shop across both online and offline channels"
    },
    {
      title: "Community Building Accelerates Growth",
      icon: "Users",
      color: "success",
      insight: "Creating a community around Korean culture through events, cooking classes, and social media engagement transformed customers into brand advocates. User-generated content became the most effective marketing channel.",
      impact: "35% of new customers came through referrals and social sharing"
    },
    {
      title: "Data-Driven Inventory Management",
      icon: "BarChart3",
      color: "secondary",
      insight: "Implementing predictive analytics for inventory management reduced stockouts by 85% and improved inventory turnover by 102%. Understanding seasonal demand patterns and cultural event timing was critical.",
      impact: "94% supply chain efficiency and 60% reduction in waste"
    },
    {
      title: "Localized Marketing Resonates Deeper",
      icon: "MapPin",
      color: "accent",
      insight: "Tailoring marketing messages and product offerings to specific Indian cities and regions significantly improved conversion rates. Mumbai's cosmopolitan audience responded differently than Delhi's traditional market.",
      impact: "2.5x higher conversion rates with localized campaigns"
    },
    {
      title: "Education Drives Premium Pricing",
      icon: "GraduationCap",
      color: "primary",
      insight: "Investing in customer education about Korean products, ingredients, and cultural significance justified premium pricing. Customers who attended workshops showed 71% higher average order values.",
      impact: "71% increase in average order value for educated customers"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Key Learnings & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategic insights and lessons learned from transforming a Korean retail concept into India's leading specialty store chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learnings?.map((learning, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${learning?.color}/10 flex items-center justify-center flex-shrink-0`}>
                  <Icon name={learning?.icon} size={24} color={`var(--color-${learning?.color})`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{learning?.title}</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {learning?.insight}
              </p>

              <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Icon name="TrendingUp" size={18} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-success mb-1">Measurable Impact</p>
                    <p className="text-sm text-foreground font-medium">{learning?.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/5 to-innovation/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Lightbulb" size={24} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Replicable Success Framework</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The strategies and methodologies developed for Korean Super Store have been documented into a replicable framework for international brands entering the Indian market. This framework addresses cultural adaptation, regulatory compliance, supply chain optimization, and market-specific marketing strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Documented Best Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Scalable Methodologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Proven ROI Models</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyLearnings;
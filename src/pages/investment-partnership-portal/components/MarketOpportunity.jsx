import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MarketOpportunity = () => {
  const opportunities = [
  {
    icon: 'TrendingUp',
    title: 'Explosive Market Growth',
    metric: '₹2.5 Trillion',
    description: 'Indian consumer market size with 12% annual growth rate, creating unprecedented opportunities for strategic investors',
    highlights: ['Digital commerce growing 25% YoY', 'Middle class expanding by 50M annually', 'Urban consumption rising 15% yearly']
  },
  {
    icon: 'Users',
    title: 'Demographic Dividend',
    metric: '65% Under 35',
    description: 'Young, aspirational population driving consumption patterns and creating massive addressable market for brands',
    highlights: ['500M+ internet users', '300M+ social media active users', 'Rising disposable income levels']
  },
  {
    icon: 'Globe',
    title: 'International Brand Demand',
    metric: '40% Import Growth',
    description: 'Increasing appetite for international products and services, with simplified import regulations and growing purchasing power',
    highlights: ['Premium segment growing 30% YoY', 'Cross-border e-commerce booming', 'Brand consciousness increasing']
  },
  {
    icon: 'Zap',
    title: 'Digital Transformation',
    metric: '800M+ Smartphones',
    description: 'Rapid digitalization creating new marketing channels and enabling data-driven strategies for unprecedented ROI',
    highlights: ['Mobile-first consumer behavior', 'Social commerce revolution', 'Performance marketing maturity']
  }];


  const sectors = [
  {
    name: 'E-Commerce & Retail',
    growth: '25%',
    investment: '₹50L - ₹5Cr',
    image: "https://images.unsplash.com/photo-1651326848981-349fd8aadb37",
    imageAlt: 'Modern retail store interior with bright lighting, organized product displays, shopping carts, and customers browsing merchandise in contemporary commercial space',
    potential: 'High'
  },
  {
    name: 'Health & Wellness',
    growth: '22%',
    investment: '₹30L - ₹3Cr',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5d2f90c-1764004139518.png",
    imageAlt: 'Fitness and wellness center with modern exercise equipment, yoga mats, healthy lifestyle products, natural lighting, and wellness consultation area',
    potential: 'Very High'
  },
  {
    name: 'Food & Beverage',
    growth: '18%',
    investment: '₹40L - ₹4Cr',
    image: "https://images.unsplash.com/photo-1677449243782-edbd92d8454f",
    imageAlt: 'Upscale restaurant interior with elegant table settings, ambient lighting, gourmet food presentation, wine glasses, and sophisticated dining atmosphere',
    potential: 'High'
  },
  {
    name: 'Technology & AI',
    growth: '35%',
    investment: '₹1Cr - ₹10Cr',
    image: "https://images.unsplash.com/photo-1662638600507-0846616ec508",
    imageAlt: 'Modern technology office workspace with multiple computer monitors, coding screens, collaborative work environment, and innovative tech startup atmosphere',
    potential: 'Very High'
  },
  {
    name: 'Fashion & Lifestyle',
    growth: '20%',
    investment: '₹25L - ₹2Cr',
    image: "https://images.unsplash.com/photo-1678547241895-1c307914b50c",
    imageAlt: 'Trendy fashion boutique with stylish clothing displays, modern interior design, mannequins showcasing latest fashion trends, and premium retail ambiance',
    potential: 'High'
  },
  {
    name: 'Education & EdTech',
    growth: '28%',
    investment: '₹50L - ₹5Cr',
    image: "https://images.unsplash.com/photo-1694532409273-b26e2ce266ea",
    imageAlt: 'Modern educational technology classroom with students using tablets and laptops, interactive digital learning tools, collaborative study environment, and innovative teaching methods',
    potential: 'Very High'
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <Icon name="Target" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Market Intelligence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Invest in India's Marketing Ecosystem Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unprecedented market conditions creating once-in-a-generation investment opportunities with proven ROI frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {opportunities?.map((opportunity, index) =>
          <div key={index} className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={opportunity?.icon} size={28} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{opportunity?.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{opportunity?.metric}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{opportunity?.description}</p>
              
              <div className="space-y-2">
                {opportunity?.highlights?.map((highlight, idx) =>
              <div key={idx} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">High-Growth Sectors for Investment</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors?.map((sector, index) =>
            <div key={index} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                  src={sector?.image}
                  alt={sector?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute top-4 right-4 px-3 py-1 bg-success text-white text-xs font-bold rounded-full">
                    {sector?.potential} Potential
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">{sector?.name}</h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Annual Growth</span>
                      <span className="text-sm font-bold text-success">+{sector?.growth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Investment Range</span>
                      <span className="text-sm font-bold text-foreground">{sector?.investment}</span>
                    </div>
                  </div>
                  
                  <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right">

                    Explore Opportunities
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-innovation rounded-2xl p-8 lg:p-12 text-white text-center">
          <Icon name="FileText" size={48} color="#FFFFFF" className="mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Download Complete Market Analysis Report</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get comprehensive insights into India's marketing ecosystem, sector-wise opportunities, and detailed investment frameworks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90">

              Download Full Report (PDF)
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Mail"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10">

              Email Me the Report
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default MarketOpportunity;
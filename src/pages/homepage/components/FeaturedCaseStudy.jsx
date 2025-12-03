import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedCaseStudy = () => {
  const navigate = useNavigate();

  const caseStudy = {
    title: "Korean Super Store",
    subtitle: "From Zero to Market Leader in 18 Months",
    description: "How we transformed a Korean product import business into India's premier destination for authentic Korean goods through strategic brand positioning, multi-channel marketing, and cultural market understanding.",
    image: "https://images.unsplash.com/photo-1652705334308-78bc1c9ab361",
    imageAlt: "Modern Korean Super Store interior with bright lighting, organized shelves displaying colorful Korean snacks, cosmetics and food products, customers shopping in clean contemporary retail space",
    metrics: [
    { value: "300%", label: "Revenue Growth", icon: "TrendingUp" },
    { value: "50K+", label: "Monthly Customers", icon: "Users" },
    { value: "1", label: "Store Locations", icon: "MapPin" },
    { value: "98%", label: "Customer Satisfaction", icon: "Heart" }],

    highlights: [
    "Complete brand identity development",
    "Multi-channel marketing strategy",
    "E-commerce platform optimization",
    "Cultural market positioning",
    "Influencer partnership program",
    "Customer loyalty system"]

  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-innovation/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Icon name="Award" size={20} color="green" fill="none" />
            <span className="text-green-500 text-sm font-semibold">Featured Success Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Ambition Into Market Dominance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we helped Korean Super Store become India's leading destination for authentic Korean products
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={caseStudy?.image}
                alt={caseStudy?.imageAlt}
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{caseStudy?.title}</h3>
                <p className="text-lg text-white/90">{caseStudy?.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy?.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {caseStudy?.metrics?.map((metric, index) =>
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all card-hover">

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-innovation rounded-lg flex items-center justify-center">
                      <Icon name={metric?.icon} size={20} color="#FFFFFF" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{metric?.value}</div>
                  <div className="text-sm text-muted-foreground">{metric?.label}</div>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Key Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy?.highlights?.map((highlight, index) =>
                <div key={index} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                )}
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => navigate('/korean-super-store-case-study')}
              fullWidth>

              Read Full Case Study
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-innovation rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's transform your brand into a market leader with proven strategies and measurable results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => navigate('/contact')}
              className="bg-white text-primary hover:bg-white/90">

              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="FileText"
              iconPosition="left"
              onClick={() => navigate('/case-studies')}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">

              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedCaseStudy;
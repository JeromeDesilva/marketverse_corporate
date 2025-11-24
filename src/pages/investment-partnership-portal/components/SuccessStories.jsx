import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStories = () => {
  const stories = [
  {
    company: 'Korean Super Store',
    investor: 'Seoul Investment Group',
    model: 'Market Entry Partnership',
    investment: '₹2.5 Cr',
    returns: '485% ROI',
    duration: '3 Years',
    image: "https://images.unsplash.com/photo-1663247456125-9ce1ae2a1b1e",
    imageAlt: 'Modern Korean supermarket interior with organized product shelves, bright lighting, Korean food products, fresh produce section, and contemporary retail design',
    description: 'Successfully launched Korean beauty and lifestyle brand in Indian market, achieving ₹12Cr annual revenue within 3 years',
    metrics: [
    { label: 'Stores Opened', value: '8' },
    { label: 'Monthly Revenue', value: '₹1Cr+' },
    { label: 'Customer Base', value: '50K+' }]

  },
  {
    company: 'TechVenture SaaS',
    investor: 'Mumbai Angels Network',
    model: 'Equity Partnership',
    investment: '₹5 Cr',
    returns: '620% ROI',
    duration: '5 Years',
    image: "https://images.unsplash.com/photo-1690192078982-d3d2f89059ee",
    imageAlt: 'Modern technology startup office with collaborative workspace, multiple computer screens, team members working on software development, innovative tech environment',
    description: 'B2B SaaS platform for marketing automation, scaled to 500+ enterprise clients with strategic marketing partnership',
    metrics: [
    { label: 'Enterprise Clients', value: '500+' },
    { label: 'ARR Growth', value: '300%' },
    { label: 'Market Share', value: '15%' }]

  },
  {
    company: 'Wellness First',
    investor: 'Health Ventures India',
    model: 'Revenue Share Partnership',
    investment: '₹1.5 Cr',
    returns: '380% ROI',
    duration: '4 Years',
    image: "https://images.unsplash.com/photo-1730416142913-ad371a0a79bf",
    imageAlt: 'Health and wellness center with yoga studio, fitness equipment, natural lighting, wellness consultation area, and holistic health environment',
    description: 'Organic wellness brand expanded from regional to national presence through integrated marketing campaigns',
    metrics: [
    { label: 'Cities Covered', value: '25' },
    { label: 'Product Lines', value: '12' },
    { label: 'Revenue Growth', value: '250%' }]

  }];


  const testimonials = [
  {
    name: 'David Kim',
    role: 'Managing Partner',
    company: 'Seoul Investment Group',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cfc504c-1763295673286.png",
    imageAlt: 'Professional Asian businessman in navy blue suit with confident smile, modern office background, executive portrait photography',
    quote: `Marketverse's deep understanding of Indian consumer behavior and their end-to-end execution capability made our market entry seamless. The ROI exceeded our projections by 40%.`
  },
  {
    name: 'Priya Sharma', role: 'Investment Director', company: 'Mumbai Angels Network', image: "https://img.rocket.new/generatedImages/rocket_gen_img_150f92757-1763295812976.png", imageAlt: 'Professional Indian businesswoman in elegant black blazer with warm smile, corporate office setting, executive headshot photography',
    quote: `Their strategic marketing expertise transformed our portfolio company from a startup to a market leader. The partnership model was transparent and results-driven.`
  },
  {
    name: 'Robert Chen', role: 'CEO', company: 'Health Ventures India', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1679d6dfa-1763294404930.png", imageAlt: 'Distinguished Asian business executive in charcoal gray suit with professional demeanor, modern corporate background, senior leadership portrait',
    quote: `Marketverse doesn't just execute campaigns—they build brands. Their data-driven approach and market intelligence gave us confidence in every investment decision.`
  }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <Icon name="Award" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Proven Track Record</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Investment Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real partnerships, measurable results, and exceptional returns for our strategic investors
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {stories?.map((story, index) =>
          <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <Image
                  src={story?.image}
                  alt={story?.imageAlt}
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{story?.company}</h3>
                      <p className="text-white/90 text-sm">{story?.investor}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {story?.model}
                    </div>
                    <div className="px-3 py-1 bg-success/10 text-success text-xs font-bold rounded-full">
                      {story?.returns}
                    </div>
                    <div className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full">
                      {story?.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{story?.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {story?.metrics?.map((metric, idx) =>
                  <div key={idx} className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                        <div className="text-xs text-muted-foreground">{metric?.label}</div>
                      </div>
                  )}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Initial Investment</div>
                      <div className="text-xl font-bold text-foreground">{story?.investment}</div>
                    </div>
                    <Button
                    variant="outline"
                    size="default"
                    iconName="ExternalLink"
                    iconPosition="right">

                      View Full Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">What Our Investors Say</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) =>
            <div key={index} className="bg-card rounded-xl border border-border p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                    src={testimonial?.image}
                    alt={testimonial?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial?.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial?.company}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="opacity-20" />
                </div>

                <p className="text-muted-foreground italic leading-relaxed">{testimonial?.quote}</p>

                <div className="flex gap-1 mt-6">
                  {[1, 2, 3, 4, 5]?.map((star) =>
                <Icon key={star} name="Star" size={16} color="var(--color-secondary)" className="fill-current" />
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessStories;
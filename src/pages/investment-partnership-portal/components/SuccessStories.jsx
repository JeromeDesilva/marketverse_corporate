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
    company: 'E-commerce Brand MyOppa',
    investor: 'Digital Ventures Asia',
    model: 'Digital Transformation Partnership',
    investment: '₹3.2 Cr',
    returns: '540% ROI',
    duration: '4 Years',
    image: "https://images.unsplash.com/photo-1676279170337-c838813c7e39",
    imageAlt: 'Modern e-commerce workspace with laptop displaying online store, product photography setup, shipping materials, and digital marketing dashboard on screens',
    description: 'Transformed traditional Korean product retailer into leading digital-first e-commerce platform with omnichannel presence',
    metrics: [
    { label: 'Digital Sales Growth', value: '450%' },
    { label: 'Online Customers', value: '75K+' },
    { label: 'Platform GMV', value: '₹15Cr+' }]

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
    name: 'Jennifer Lee', role: 'Investment Director', company: 'Digital Ventures Asia',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d60e496-1763295319842.png",
    imageAlt: 'Professional Asian businesswoman in elegant black blazer with warm smile, corporate office setting, executive headshot photography',
    quote: `Their digital transformation strategy turned MyOppa from a struggling retailer into a thriving e-commerce brand. The results speak for themselves—540% ROI in 4 years.`
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6 shadow-sm">
            <Icon name="Award" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Proven Track Record</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real partnerships, measurable results, and exceptional returns for our strategic investors
          </p>
        </div>

        {/* Featured MyOppa Header Section */}
        <div className="mb-12 relative overflow-hidden">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary rounded-3xl p-8 lg:p-12 shadow-2xl border border-primary/20">
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Icon name="TrendingUp" size={18} color="white" />
                    <span className="text-sm font-semibold">Featured Success Story</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3">
                    MyOppa E-commerce Brand
                  </h3>
                  <p className="text-2xl lg:text-3xl font-semibold text-white/90 mb-4">
                    Digital Transformation
                  </p>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    A remarkable journey of transforming traditional retail into a thriving digital-first e-commerce powerhouse, achieving unprecedented growth and market leadership
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                      <div className="text-3xl font-bold text-white">540%</div>
                      <div className="text-sm text-white/80">ROI Achieved</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                      <div className="text-3xl font-bold text-white">₹15Cr+</div>
                      <div className="text-sm text-white/80">Platform GMV</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                      <div className="text-3xl font-bold text-white">75K+</div>
                      <div className="text-sm text-white/80">Customers</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-2xl blur-2xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                    <Icon name="ShoppingBag" size={80} color="white" className="mx-auto mb-4" />
                    <div className="text-center">
                      <div className="text-white/90 text-sm font-medium mb-2">Digital First Strategy</div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="CheckCircle" size={20} color="white" />
                        <span className="text-white font-semibold">Fully Transformed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Story Cards Section */}
        <div className="space-y-8 mb-20">
          {stories?.map((story, index) =>
          <div key={index} className="group bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative h-80 lg:h-auto overflow-hidden">
                  <Image
                  src={story?.image}
                  alt={story?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center p-8">
                    <div className="text-white">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                        <Icon name="Award" size={16} color="white" />
                        <span className="text-xs font-semibold">{story?.model}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">{story?.company}</h3>
                      <p className="text-white/90 text-sm flex items-center gap-2">
                        <Icon name="Users" size={16} color="white" />
                        {story?.investor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8 lg:p-10">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-bold rounded-full border border-primary/20">
                      {story?.model}
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-success/10 to-success/5 text-success text-xs font-bold rounded-full border border-success/20 flex items-center gap-1">
                      <Icon name="TrendingUp" size={14} color="var(--color-success)" />
                      {story?.returns}
                    </div>
                    <div className="px-4 py-2 bg-muted/80 text-muted-foreground text-xs font-bold rounded-full border border-border">
                      <Icon name="Clock" size={14} color="var(--color-muted-foreground)" className="inline mr-1" />
                      {story?.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed mb-8">{story?.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {story?.metrics?.map((metric, idx) =>
                  <div key={idx} className="text-center p-5 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl border border-border hover:shadow-md transition-all">
                        <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{metric?.value}</div>
                        <div className="text-xs text-muted-foreground font-medium">{metric?.label}</div>
                      </div>
                  )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl px-6 py-4 border border-primary/10">
                      <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                        <Icon name="DollarSign" size={16} color="var(--color-muted-foreground)" />
                        Initial Investment
                      </div>
                      <div className="text-2xl font-bold text-foreground">{story?.investment}</div>
                    </div>
                    <Button
                    variant="default"
                    size="default"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="shadow-lg hover:shadow-xl transition-all">

                      View Full Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="MessageSquare" size={18} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Investor Testimonials</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">What Our Investors Say</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Direct feedback from our strategic partners on their investment journey and results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials?.map((testimonial, index) =>
            <div key={index} className="group bg-card rounded-2xl border border-border p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                      <Image
                      src={testimonial?.image}
                      alt={testimonial?.imageAlt}
                      className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{testimonial?.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                      <p className="text-xs text-primary font-semibold mt-1 flex items-center gap-1">
                        <Icon name="Building" size={12} color="var(--color-primary)" />
                        {testimonial?.company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Icon name="Quote" size={40} color="var(--color-primary)" className="opacity-20" />
                  </div>

                  <p className="text-muted-foreground italic leading-relaxed text-base mb-6">{testimonial?.quote}</p>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5]?.map((star) =>
                  <Icon key={star} name="Star" size={18} color="var(--color-secondary)" className="fill-current" />
                  )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessStories;
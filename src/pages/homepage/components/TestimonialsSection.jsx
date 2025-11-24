import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder & CEO",
    company: "Korean Super Store",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1983d2d8c-1763300562409.png",
    imageAlt: "Professional headshot of Indian woman with long black hair wearing navy blue blazer smiling confidently in modern office setting",
    quote: "Marketverse didn't just help us launch—they helped us dominate. From zero to 15 stores in 18 months. Their understanding of both Korean culture and Indian market dynamics was the game-changer we needed.",
    rating: 5,
    metrics: { growth: "300%", stores: "15", satisfaction: "98%" }
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Marketing Director",
    company: "TechVision India",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf987635-1763295184563.png",
    imageAlt: "Professional headshot of Indian man with short black hair wearing grey suit and glasses in corporate office environment",
    quote: "The ROI we\'ve seen from Marketverse\'s campaigns is unprecedented. They transformed our digital presence and our lead generation increased by 250% in just 6 months. True marketing partners.",
    rating: 5,
    metrics: { leads: "250%", roi: "400%", conversion: "35%" }
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "International Business Head",
    company: "Global Trade Partners",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1cf02ab-1763294013918.png",
    imageAlt: "Professional headshot of Caucasian woman with blonde hair in black business suit smiling warmly in bright office space",
    quote: "Entering the Indian market seemed daunting until we partnered with Marketverse. Their market intelligence and execution capabilities made our expansion seamless. We\'re now operating in 8 cities.",
    rating: 5,
    metrics: { cities: "8", growth: "180%", partners: "25+" }
  }];


  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-partnership/10 rounded-full mb-6">
            <Icon name="MessageSquare" size={20} color="var(--color-partnership)" />
            <span className="text-partnership text-sm font-semibold">Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Ambitious Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it—hear from the brands we've transformed
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-innovation p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-6">
                  <Image
                    src={currentTestimonial?.image}
                    alt={currentTestimonial?.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
                <h3 className="text-2xl font-bold mb-2">{currentTestimonial?.name}</h3>
                <p className="text-white/80 mb-1">{currentTestimonial?.role}</p>
                <p className="text-white/60 text-sm mb-6">{currentTestimonial?.company}</p>
                <div className="flex gap-1">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} color="#E8B931" className="fill-current" />
                  )}
                </div>
              </div>

              <div className="lg:col-span-3 p-8 lg:p-12">
                <Icon name="Quote" size={48} color="var(--color-primary)" className="opacity-20 mb-6" />
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  {currentTestimonial?.quote}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(currentTestimonial?.metrics)?.map(([key, value], index) =>
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-xl">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center gap-2">
                  {testimonials?.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index ?
                    'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'}`
                    }
                    aria-label={`View testimonial ${index + 1}`} />

                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Brands Transformed</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;
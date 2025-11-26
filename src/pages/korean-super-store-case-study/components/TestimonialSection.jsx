import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
  {
    id: 1,
    name: "Kim Ji-Woo",
    role: "Founder & CEO, Korean Super Store",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cfc504c-1763295673286.png",
    imageAlt: "Professional headshot of Asian businessman Kim Ji-Woo in navy blue suit with white shirt, warm smile, modern office background with natural lighting",
    quote: "Marketverse didn\'t just help us enter the Indian market—they made us a household name. Their deep understanding of both Korean culture and Indian consumer psychology was the key to our success. The 300% revenue growth in 18 months exceeded our wildest expectations.",
    rating: 5,
    videoThumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_19830fa36-1763300402448.png",
    videoThumbnailAlt: "Video thumbnail showing Korean businessman in modern office setting with glass walls, speaking to camera with confident expression, professional lighting setup with Korean Super Store branding visible in background"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Operations Director, Korean Super Store India",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15f4e23f6-1763300607163.png",
    imageAlt: "Professional portrait of Indian woman Priya Sharma in burgundy blazer with white blouse, confident smile, contemporary office environment with soft lighting",
    quote: "Working with Marketverse transformed our operational efficiency. Their data-driven approach to inventory management and supply chain optimization helped us scale from 2 to 12 stores without compromising on product quality or customer experience. The team\'s expertise in import regulations was invaluable.",
    rating: 5,
    videoThumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1d73cb848-1763301304630.png",
    videoThumbnailAlt: "Video thumbnail featuring Indian woman in professional attire standing in Korean Super Store retail space with product displays visible, speaking enthusiastically with hand gestures, bright store lighting"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Marketing Manager, Korean Super Store",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_148d4da1a-1763296687451.png",
    imageAlt: "Professional headshot of Indian man Rajesh Kumar in charcoal gray suit with blue tie, friendly expression, modern corporate office background with natural daylight",
    quote: "The social media strategy Marketverse developed was phenomenal. We went from 3,500 followers to 125,000 in just 18 months. Their content creation team understood how to blend Korean aesthetics with Indian sensibilities perfectly. The influencer partnerships they arranged drove incredible foot traffic to our stores.",
    rating: 5,
    videoThumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1615d6c0b-1763298152103.png",
    videoThumbnailAlt: "Video thumbnail showing Indian marketing professional in casual business attire reviewing social media analytics on tablet device in modern office space with Korean product displays and marketing materials visible"
  }];


  const handleVideoClick = (id) => {
    setActiveVideo(activeVideo === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30 hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear directly from the Korean Super Store team about their transformation journey and partnership experience with Marketverse.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 card-hover">

              <div className="relative h-48 overflow-hidden group cursor-pointer" onClick={() => handleVideoClick(testimonial?.id)}>
                <Image
                src={testimonial?.videoThumbnail}
                alt={testimonial?.videoThumbnailAlt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon name={activeVideo === testimonial?.id ? "Pause" : "Play"} size={24} color="var(--color-primary)" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">Video Testimonial</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                    src={testimonial?.image}
                    alt={testimonial?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{testimonial?.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={16} color="var(--color-secondary)" className="fill-current" />
                )}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial?.quote}"
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">Client Satisfaction Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Overall Satisfaction</span>
                  <div className="flex items-center gap-2">
                    <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-success" style={{ width: '98%' }} />
                    </div>
                    <span className="font-bold text-foreground">98%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Communication Quality</span>
                  <div className="flex items-center gap-2">
                    <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-success" style={{ width: '96%' }} />
                    </div>
                    <span className="font-bold text-foreground">96%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Results Delivery</span>
                  <div className="flex items-center gap-2">
                    <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-success" style={{ width: '100%' }} />
                    </div>
                    <span className="font-bold text-foreground">100%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Would Recommend</span>
                  <div className="flex items-center gap-2">
                    <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-success" style={{ width: '100%' }} />
                    </div>
                    <span className="font-bold text-foreground">100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">4.9</div>
                  <div className="flex gap-1 justify-center mb-2">
                    {[...Array(5)]?.map((_, i) =>
                    <Icon key={i} name="Star" size={16} color="#FFFFFF" className="fill-current" />
                    )}
                  </div>
                  <div className="text-sm text-white/90">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialSection;
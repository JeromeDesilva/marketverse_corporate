import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';

import Button from '../../../components/ui/Button';

const RelatedCaseStudies = () => {
  const caseStudies = [
  {
    id: 1,
    title: "Japanese Wellness Brand Market Entry",
    category: "International Retail",
    image: "https://images.unsplash.com/photo-1666627762609-a9d50d5ec707",
    imageAlt: "Modern Japanese wellness retail store interior with minimalist white shelving displaying skincare products, natural wood accents, soft ambient lighting, and zen-inspired design elements with customers browsing in clean contemporary space",
    description: "Helped a premium Japanese wellness brand establish presence in Indian market with 250% first-year revenue growth.",
    metrics: [
    { label: "Revenue Growth", value: "250%" },
    { label: "Store Locations", value: "8" },
    { label: "Market Share", value: "28%" }],

    link: "/case-studies"
  },
  {
    id: 2,
    title: "European Fashion Brand Digital Transformation",
    category: "Fashion & Lifestyle",
    image: "https://images.unsplash.com/photo-1707376081814-bdba706c6f8e",
    imageAlt: "Upscale European fashion boutique interior featuring elegant clothing displays on modern racks, sophisticated lighting, marble flooring, full-length mirrors, and stylish mannequins showcasing contemporary designer collections in luxury retail environment",
    description: "Transformed traditional European fashion retailer into omnichannel powerhouse with 180% online sales increase.",
    metrics: [
    { label: "Online Sales", value: "+180%" },
    { label: "Customer Base", value: "45K+" },
    { label: "ROI", value: "320%" }],

    link: "/case-studies"
  },
  {
    id: 3,
    title: "Organic Food Chain Expansion",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1652705334308-78bc1c9ab361",
    imageAlt: "Modern organic food store interior with wooden shelving displaying fresh produce, natural products, eco-friendly packaging, bright natural lighting, customers shopping in clean sustainable retail space with green plant accents",
    description: "Scaled organic food chain from 3 to 15 locations with sustainable growth strategy and community engagement.",
    metrics: [
    { label: "Store Growth", value: "400%" },
    { label: "Revenue", value: "₹25 Cr" },
    { label: "Customer Loyalty", value: "4.8/5" }],

    link: "/case-studies"
  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Related Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore more case studies showcasing Marketverse's expertise in transforming brands and driving measurable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies?.map((study) =>
          <div
            key={study?.id}
            className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 card-hover">

              <div className="relative h-48 overflow-hidden">
                <Image
                src={study?.image}
                alt={study?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />

                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-white">{study?.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{study?.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{study?.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study?.metrics?.map((metric, index) =>
                <div key={index} className="text-center">
                      <p className="text-lg font-bold text-primary">{metric?.value}</p>
                      <p className="text-xs text-muted-foreground">{metric?.label}</p>
                    </div>
                )}
                </div>

                <Link to={study?.link}>
                  <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right">

                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link to="/case-studies">
            <Button
              variant="default"
              size="lg"
              iconName="Grid"
              iconPosition="left">

              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default RelatedCaseStudies;
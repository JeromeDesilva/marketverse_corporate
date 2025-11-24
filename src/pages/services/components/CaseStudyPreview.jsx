import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyPreview = () => {
  const caseStudies = [
  {
    id: 1,
    title: "Korean Super Store: Complete Market Entry Success",
    service: "Full-Service Marketing",
    image: "https://images.unsplash.com/photo-1586965142106-83751d8f57a3",
    imageAlt: "Modern retail store interior with bright lighting, organized product displays, and customers shopping in spacious aisles",
    results: [
    { metric: "Revenue Growth", value: "300%" },
    { metric: "Market Penetration", value: "5 Cities" },
    { metric: "Customer Base", value: "50K+" }],

    tags: ["Import", "Branding", "Digital Marketing"],
    featured: true
  },
  {
    id: 2,
    title: "Tech Startup: Brand Positioning & Launch",
    service: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1681164315051-add1906a9b07",
    imageAlt: "Modern tech startup office with young professionals collaborating around laptop computers in bright open workspace",
    results: [
    { metric: "Brand Awareness", value: "85%" },
    { metric: "Lead Generation", value: "250%" },
    { metric: "Market Share", value: "12%" }],

    tags: ["Strategy", "Positioning", "Launch"]
  },
  {
    id: 3,
    title: "E-commerce Brand: Digital Transformation",
    service: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1733503747506-773e56e4078f",
    imageAlt: "Person using laptop for online shopping with credit card in hand, shopping cart icon visible on screen",
    results: [
    { metric: "Online Sales", value: "400%" },
    { metric: "ROAS", value: "8.5x" },
    { metric: "Customer LTV", value: "180%" }],

    tags: ["Performance", "E-commerce", "Analytics"]
  }];


  return (
    <section className="py-16 lg:py-24 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-lg text-[#4A5568]">
              Real results from real clients across diverse industries and markets.
            </p>
          </div>
          <Link to="/case-studies">
            <Button variant="outline" iconName="ArrowRight" iconPosition="right">
              View All Cases
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies?.map((study) =>
          <div
            key={study?.id}
            className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
            study?.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`
            }>

              <div className={`relative ${study?.featured ? 'h-80' : 'h-48'} overflow-hidden`}>
                <Image
                src={study?.image}
                alt={study?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />

                {study?.featured &&
              <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#E8B931] to-[#FF6B35] text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Featured Case Study
                    </span>
                  </div>
              }
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#1B365D] text-sm font-medium px-3 py-1 rounded-full">
                    {study?.service}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`font-bold text-[#1A1A1A] mb-4 ${study?.featured ? 'text-2xl' : 'text-xl'}`}>
                  {study?.title}
                </h3>

                <div className={`grid ${study?.featured ? 'grid-cols-3' : 'grid-cols-1'} gap-4 mb-4`}>
                  {study?.results?.map((result, index) =>
                <div key={index} className="bg-[#F3F4F6] rounded-lg p-3">
                      <p className="text-xs text-[#4A5568] mb-1">{result?.metric}</p>
                      <p className="text-xl font-bold text-[#1B365D]">{result?.value}</p>
                    </div>
                )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study?.tags?.map((tag, index) =>
                <span key={index} className="text-xs bg-[#1B365D]/5 text-[#1B365D] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                )}
                </div>

                <Link to={study?.id === 1 ? '/korean-super-store-case-study' : '/case-studies'}>
                  <Button variant="outline" fullWidth iconName="ExternalLink" iconPosition="right">
                    Read Full Story
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CaseStudyPreview;
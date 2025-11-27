import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Market Dominance in 2025",
    excerpt: "Discover the strategies that transformed 50+ brands into market leaders with our proven framework.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100c7120b-1763301835500.png",
    category: "Featured",
    readTime: "18 min read",
    isFeatured: true
  },
  {
    id: 2,
    title: "Data-Driven Marketing: From Analytics to Action",
    excerpt: "Learn how to leverage data intelligence for strategic decision-making and measurable growth.",
    image: "https://images.unsplash.com/photo-1564583138697-34f7b7488f94",
    category: "Featured",
    readTime: "14 min read",
    isFeatured: true
  },
  {
    id: 3,
    title: "Building Brands That Last: Timeless Principles",
    excerpt: "Core brand-building principles that create lasting market presence and customer loyalty.",
    image: "https://images.unsplash.com/photo-1641175181499-b5c1b983877f",
    category: "Featured",
    readTime: "16 min read",
    isFeatured: true
  }];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredPosts?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts?.length) % featuredPosts?.length);
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Star" size={20} className="text-warning fill-warning" />
              <span className="text-sm font-semibold text-primary">Featured Content</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Editor's Picks
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

              {featuredPosts?.map((post) =>
              <div key={post?.id} className="w-full flex-shrink-0">
                  <div className="relative h-[400px] md:h-[500px]">
                    <AppImage
                    src={post?.image}
                    alt={`${post?.title} - Featured blog post image`}
                    className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-warning text-black text-xs font-bold rounded-full">
                            {post?.category}
                          </span>
                          <span className="text-white/80 text-sm flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {post?.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                          {post?.title}
                        </h3>
                        
                        <p className="text-white/90 text-base md:text-lg mb-6 line-clamp-2">
                          {post?.excerpt}
                        </p>
                        
                        <Link
                        to="#"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">

                          Read Full Article
                          <Icon name="ArrowRight" size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Previous slide">

            <Icon name="ChevronLeft" size={24} className="text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Next slide">

            <Icon name="ChevronRight" size={24} className="text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {featuredPosts?.map((_, index) =>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
              currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'}`
              }
              aria-label={`Go to slide ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedCarousel;
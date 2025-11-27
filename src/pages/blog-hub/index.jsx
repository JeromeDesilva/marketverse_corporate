import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import BlogGrid from './components/BlogGrid';
import FeaturedCarousel from './components/FeaturedCarousel';
import NewsletterSection from './components/NewsletterSection';

const BlogHub = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const category = searchParams?.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection />
        <FeaturedCarousel />
        
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            <CategoryFilter 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <BlogGrid 
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogHub;
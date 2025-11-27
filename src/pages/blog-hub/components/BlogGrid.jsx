import React, { useMemo } from 'react';
import BlogCard from './BlogCard';
import Icon from '../../../components/AppIcon';


const BlogGrid = ({ selectedCategory, searchQuery }) => {
  const blogPosts = [
  {
    id: 1,
    title: "Mastering Digital Marketing in 2025: Strategic Framework for Success",
    excerpt: "Comprehensive guide to building robust digital marketing strategies that deliver measurable ROI across all channels.",
    author: {
      name: "Priya Sharma",
      role: "Chief Marketing Strategist",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17a991d13-1763295980173.png"
    },
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_137b2b3bf-1763299658888.png",
    category: "marketing-strategy",
    readTime: "12 min read",
    publishedDate: "2025-01-15",
    tags: ["Strategy", "Digital Marketing", "ROI"]
  },
  {
    id: 2,
    title: "Market Entry Strategies: Navigating India\'s Complex Business Landscape",
    excerpt: "Expert insights on successfully entering and scaling in India's diverse market segments with proven methodologies.",
    author: {
      name: "Rajesh Kumar",
      role: "Market Intelligence Lead",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    image: "https://images.unsplash.com/photo-1634936016780-65f6a77ebdd4",
    category: "market-intelligence",
    readTime: "10 min read",
    publishedDate: "2025-01-12",
    tags: ["Market Entry", "India", "Business Strategy"]
  },
  {
    id: 3,
    title: "Case Study: 300% Revenue Growth for Korean Super Store",
    excerpt: "Deep dive into our transformative brand-building campaign that resulted in unprecedented market expansion.",
    author: {
      name: "Ananya Reddy",
      role: "Senior Brand Strategist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    image: "https://images.unsplash.com/photo-1594068337983-b24ff1207b1b",
    category: "case-studies",
    readTime: "15 min read",
    publishedDate: "2025-01-10",
    tags: ["Case Study", "Brand Building", "ROI"]
  },
  {
    id: 4,
    title: "E-commerce Growth Hacking: Proven Tactics for 10X Scale",
    excerpt: "Advanced strategies for exponential e-commerce growth using data-driven optimization and performance marketing.",
    author: {
      name: "Vikram Singh",
      role: "E-commerce Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    image: "https://images.unsplash.com/photo-1661956601031-4cf09efadfce",
    category: "marketing-strategy",
    readTime: "8 min read",
    publishedDate: "2025-01-08",
    tags: ["E-commerce", "Growth Hacking", "Performance Marketing"]
  },
  {
    id: 5,
    title: "2025 Marketing Trends: AI, Personalization, and Beyond",
    excerpt: "Analysis of emerging marketing technologies and consumer behavior shifts shaping the industry landscape.",
    author: {
      name: "Neha Gupta",
      role: "Innovation Director",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150"
    },
    image: "https://images.unsplash.com/photo-1690192336223-063c7197bd29",
    category: "industry-trends",
    readTime: "11 min read",
    publishedDate: "2025-01-05",
    tags: ["Trends", "AI", "Technology"]
  },
  {
    id: 6,
    title: "Brand Positioning Framework: Creating Unshakable Market Leadership",
    excerpt: "Step-by-step methodology for developing distinctive brand positioning that captures market dominance.",
    author: {
      name: "Arjun Mehta",
      role: "Brand Strategy Director",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
    },
    image: "https://images.unsplash.com/photo-1595512595809-1008ad310842",
    category: "marketing-strategy",
    readTime: "13 min read",
    publishedDate: "2025-01-03",
    tags: ["Branding", "Positioning", "Strategy"]
  }];


  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'all') {
      filtered = filtered?.filter((post) => post?.category === selectedCategory);
    }

    if (searchQuery?.trim()) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter((post) =>
      post?.title?.toLowerCase()?.includes(query) ||
      post?.excerpt?.toLowerCase()?.includes(query) ||
      post?.tags?.some((tag) => tag?.toLowerCase()?.includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery, blogPosts]);

  if (filteredPosts?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="SearchX" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
        <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
      </div>);

  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {filteredPosts?.map((post) =>
      <BlogCard key={post?.id} post={post} />
      )}
    </div>);

};

export default BlogGrid;
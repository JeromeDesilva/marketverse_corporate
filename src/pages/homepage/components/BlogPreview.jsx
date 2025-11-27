import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const BlogPreview = () => {
  const recentPosts = [
  {
    id: 1,
    title: "Mastering Digital Marketing in 2025: Strategic Framework",
    excerpt: "Comprehensive guide to building robust digital marketing strategies that deliver measurable ROI.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_137b2b3bf-1763299658888.png",
    category: "Marketing Strategy",
    readTime: "12 min",
    date: "Jan 15, 2025"
  },
  {
    id: 2,
    title: "Market Entry Strategies: Navigating India\'s Complex Landscape",
    excerpt: "Expert insights on successfully entering and scaling in India\'s diverse market segments.",
    image: "https://images.unsplash.com/photo-1634936016780-65f6a77ebdd4",
    category: "Market Intelligence",
    readTime: "10 min",
    date: "Jan 12, 2025"
  },
  {
    id: 3,
    title: "Case Study: 300% Revenue Growth for Korean Super Store",
    excerpt: "Deep dive into our transformative brand-building campaign that resulted in unprecedented growth.",
    image: "https://images.unsplash.com/photo-1589203235758-c5c3f68b90aa",
    category: "Case Studies",
    readTime: "15 min",
    date: "Jan 10, 2025"
  }];


  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="BookOpen" size={18} />
            <span className="text-sm font-semibold">Latest from Our Blog</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industry Insights & <span className="text-primary">Expert Knowledge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with cutting-edge marketing strategies, market intelligence, and proven methodologies from industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {recentPosts?.map((post) =>
          <article
            key={post?.id}
            className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group">

              <div className="relative overflow-hidden aspect-video">
                <AppImage
                src={post?.image}
                alt={`${post?.title} - Blog post thumbnail`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                    {post?.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{post?.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{post?.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post?.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {post?.excerpt}
                </p>

                <Link
                to="/blog-hub"
                className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all text-sm font-semibold">

                  Read Article
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </article>
          )}
        </div>

        <div className="text-center">
          <Link
            to="/blog-hub"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-primary/30">

            <Icon name="BookOpen" size={20} />
            Explore All Articles
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default BlogPreview;
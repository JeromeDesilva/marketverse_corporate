import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const BlogCard = ({ post }) => {
  const categoryColors = {
    'marketing-strategy': 'bg-primary/10 text-primary',
    'market-intelligence': 'bg-innovation/10 text-innovation',
    'case-studies': 'bg-success/10 text-success',
    'industry-trends': 'bg-warning/10 text-warning'
  };

  const categoryLabels = {
    'marketing-strategy': 'Marketing Strategy',
    'market-intelligence': 'Market Intelligence',
    'case-studies': 'Case Study',
    'industry-trends': 'Industry Trends'
  };

  return (
    <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-video">
        <AppImage
          src={post?.image}
          alt={`${post?.title} - Blog post cover image`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors?.[post?.category]}`}>
            {categoryLabels?.[post?.category]}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={14} />
            <span>{post?.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Calendar" size={14} />
            <span>{new Date(post?.publishedDate)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post?.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {post?.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post?.tags?.slice(0, 3)?.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <AppImage
              src={post?.author?.avatar}
              alt={`${post?.author?.name} - Author profile picture`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">{post?.author?.name}</p>
              <p className="text-xs text-muted-foreground">{post?.author?.role}</p>
            </div>
          </div>

          <Link
            to="#"
            className="flex items-center gap-1 text-primary hover:gap-2 transition-all text-sm font-semibold"
          >
            Read More
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
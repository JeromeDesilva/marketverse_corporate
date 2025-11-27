import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: 'all', label: 'All Articles', icon: 'Grid', count: 24 },
    { id: 'marketing-strategy', label: 'Marketing Strategy', icon: 'Target', count: 8 },
    { id: 'market-intelligence', label: 'Market Intelligence', icon: 'TrendingUp', count: 6 },
    { id: 'case-studies', label: 'Case Study Insights', icon: 'FileText', count: 5 },
    { id: 'industry-trends', label: 'Industry Trends', icon: 'Activity', count: 5 }
  ];

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
              selectedCategory === category?.id
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-card text-muted-foreground hover:bg-muted border border-border'
            }`}
          >
            <Icon name={category?.icon} size={18} />
            <span>{category?.label}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === category?.id
                ? 'bg-white/20' :'bg-muted'
            }`}>
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
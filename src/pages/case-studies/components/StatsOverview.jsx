import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const iconMap = {
    'Total Projects': 'Briefcase',
    'Client Satisfaction': 'ThumbsUp',
    'Average ROI': 'TrendingUp',
    'Industries Served': 'Building2'
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Icon name={iconMap?.[stat?.label] || 'BarChart3'} size={24} className="text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">{stat?.value}</div>
          <div className="text-sm text-muted-foreground">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
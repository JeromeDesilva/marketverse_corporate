import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedServices = ({ services }) => {
  const navigate = useNavigate();

  const serviceIcons = {
    'Brand Building': 'Sparkles',
    'Digital Marketing': 'Globe',
    'Market Entry': 'TrendingUp',
    'Content Strategy': 'FileText',
    'Social Media': 'Share2',
    'SEO & Analytics': 'BarChart3'
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Layers" size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Related Services</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services?.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
            onClick={() => navigate('/services')}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name={serviceIcons?.[service?.name] || 'Briefcase'} size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1 text-sm">{service?.name}</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{service?.description}</p>
            </div>
            <Icon name="ArrowRight" size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <Button
          variant="outline"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => navigate('/services')}
        >
          View All Services
        </Button>
      </div>
    </div>
  );
};

export default RelatedServices;
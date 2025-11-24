import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ caseStudy, featured = false }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (caseStudy?.route) {
      navigate(caseStudy?.route);
    }
  };

  return (
    <div className={`bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`relative ${featured ? 'h-80' : 'h-56'} overflow-hidden`}>
        <Image
          src={caseStudy?.image}
          alt={caseStudy?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {caseStudy?.featured && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {caseStudy?.industry}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {caseStudy?.services?.slice(0, 2)?.map((service, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded"
            >
              {service}
            </span>
          ))}
          {caseStudy?.services?.length > 2 && (
            <span className="text-xs text-muted-foreground">
              +{caseStudy?.services?.length - 2} more
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          {caseStudy?.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {caseStudy?.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
          {caseStudy?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {metric?.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{caseStudy?.duration}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
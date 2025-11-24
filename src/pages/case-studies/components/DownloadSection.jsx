import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DownloadSection = ({ caseStudy }) => {
  const handleDownload = (format) => {
    alert(`Downloading ${caseStudy?.title} case study in ${format} format`);
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-innovation/5 rounded-lg border border-border p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name="Download" size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Download Case Study
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the complete case study with detailed metrics, methodologies, and results in your preferred format.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="default"
              size="sm"
              iconName="FileText"
              iconPosition="left"
              onClick={() => handleDownload('PDF')}
            >
              Download PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="FileSpreadsheet"
              iconPosition="left"
              onClick={() => handleDownload('Excel')}
            >
              Download Excel
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share2"
              iconPosition="left"
              onClick={() => alert('Share functionality')}
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
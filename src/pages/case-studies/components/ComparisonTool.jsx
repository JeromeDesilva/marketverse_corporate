import React, { useState } from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ComparisonTool = ({ caseStudies }) => {
  const [selectedStudies, setSelectedStudies] = useState([]);

  const caseStudyOptions = caseStudies?.map(study => ({
    value: study?.id,
    label: study?.title
  }));

  const handleCompare = () => {
    if (selectedStudies?.length >= 2) {
      alert(`Comparing: ${selectedStudies?.map(id => caseStudies?.find(s => s?.id === id)?.title)?.join(' vs ')}`);
    }
  };

  const selectedCaseStudies = selectedStudies?.map(id => caseStudies?.find(study => study?.id === id))?.filter(Boolean);

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="GitCompare" size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Compare Case Studies</h3>
      </div>
      <div className="mb-6">
        <Select
          label="Select case studies to compare (minimum 2)"
          placeholder="Choose case studies..."
          options={caseStudyOptions}
          value={selectedStudies}
          onChange={setSelectedStudies}
          multiple
          searchable
          description="Select 2-3 case studies for side-by-side comparison"
        />
      </div>
      {selectedCaseStudies?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {selectedCaseStudies?.map((study) => (
            <div key={study?.id} className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">{study?.title}</h4>
              <div className="space-y-2">
                {study?.metrics?.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{metric?.label}</span>
                    <span className="text-sm font-bold text-primary">{metric?.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <Button
        variant="default"
        fullWidth
        iconName="GitCompare"
        iconPosition="left"
        disabled={selectedStudies?.length < 2}
        onClick={handleCompare}
      >
        Compare Selected ({selectedStudies?.length})
      </Button>
    </div>
  );
};

export default ComparisonTool;
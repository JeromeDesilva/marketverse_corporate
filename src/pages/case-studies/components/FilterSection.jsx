import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const FilterSection = ({ 
  filters, 
  onFilterChange, 
  searchQuery, 
  onSearchChange,
  industryOptions,
  serviceOptions,
  resultOptions 
}) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Filter" size={20} className="text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Filter Case Studies</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search case studies..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="pl-10"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" 
          />
        </div>

        <Select
          placeholder="All Industries"
          options={industryOptions}
          value={filters?.industry}
          onChange={(value) => onFilterChange('industry', value)}
          clearable
        />

        <Select
          placeholder="All Services"
          options={serviceOptions}
          value={filters?.service}
          onChange={(value) => onFilterChange('service', value)}
          clearable
        />

        <Select
          placeholder="All Results"
          options={resultOptions}
          value={filters?.result}
          onChange={(value) => onFilterChange('result', value)}
          clearable
        />
      </div>
    </div>
  );
};

export default FilterSection;
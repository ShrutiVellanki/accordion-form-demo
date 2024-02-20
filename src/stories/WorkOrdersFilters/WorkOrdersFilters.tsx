// WorkOrdersFilters.tsx
import React, { useState } from 'react';
import { AccordionContainer } from '../container/AccordionContainer/AccordionContainer';
import { Button, Typography } from '@mui/material';
import { CheckboxFormGroup } from '../form-groups/CheckboxFormGroup/CheckboxFormGroup';
import { ChipFormGroup } from '../form-groups/ChipFormGroup/ChipFormGroup';

interface WorkOrdersFiltersProps {
  filterOptions: any;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// Define a type for the filter option configuration
interface FilterOptionConfig {
  id: string;
  icon: React.ReactElement;
  label: string;
  options: any[]; // Adjust the type based on your options structure
  type: 'checkbox' | 'chip';
  description: string;
}

export const WorkOrdersFilters = ({ filterOptions, onSubmit }) => {
  // Prepare accordion sections with updated props for handling changes
  const accordionData = filterOptions.map(({ id, icon, label, options, type, description }) => {

    const detailsComponent = type === 'checkbox' ? (
      <CheckboxFormGroup name={id} options={options} description={description} />
    ) : (
      <ChipFormGroup options={options} description={description} />
    );

    return {
      id,
      headerComponent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {icon}
          <Typography>{label}</Typography>
        </div>
      ),
      detailsComponent,
    };
  });

  return (
    <form onSubmit={onSubmit}>
      <AccordionContainer accordionData={accordionData} backgroundColor={'white'} />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Apply Filters
      </Button>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Reset
      </Button>
    </form>
  );
};

export default WorkOrdersFilters;
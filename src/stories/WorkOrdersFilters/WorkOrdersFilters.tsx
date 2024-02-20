// WorkOrdersFilters.tsx
import React from 'react';
import { AccordionContainer } from '../container/AccordionContainer/AccordionContainer';
import { Typography } from '@mui/material';
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

function getAccordionSections(filterOptionsConfig: FilterOptionConfig[]) {
  return filterOptionsConfig.map(({ id, icon, label, options, type, description }) => {
    const headerComponent = (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {icon}
        <Typography>{label}</Typography>
      </div>
    );

    const detailsComponent = type === 'checkbox' ? (
      <CheckboxFormGroup name={id} options={options} description={description} />
    ) : (
      <ChipFormGroup options={options} description={description}/>
    );

    return { id, headerComponent, detailsComponent };
  });
}



export const WorkOrdersFilters: React.FC<WorkOrdersFiltersProps> = ({
  filterOptions,
  onSubmit,
}) => {
  const accordionData = getAccordionSections(filterOptions);

  return (
    <form onSubmit={onSubmit}>
      <AccordionContainer accordionData={accordionData} backgroundColor={'white'} primary={undefined} size={undefined} label={undefined}/>
      <button type="submit">Submit</button>
    </form>
  );
};

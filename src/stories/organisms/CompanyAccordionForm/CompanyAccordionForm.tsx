// CompanyAccordionForm.tsx
import React from 'react';
import { CompanyAccordion } from '../../atoms/CompanyAccordion/CompanyAccordion';
import { Typography } from '@mui/material';
import { Build, PriorityHigh, Place, People, AssignmentTurnedIn, Storage } from '@mui/icons-material';
import { CompanyCheckboxGroup } from '../../molecules/form-groups/CompanyCheckboxGroup/CompanyCheckboxGroup';
import { CompanyChipGroup } from '../../molecules/form-groups/CompanyChipGroup/CompanyChipGroup';

interface AccordionPanel {
  id: string;
  headerComponent: React.ReactNode;
  detailsComponent: React.ReactNode;
}

interface CompanyAccordionFormProps {
  filterOptions: any;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function generateAccordionData(filterOptions) {
  const { typeOptions, priorityOptions, siteOptions, assetsOptions, assignedUsersOptions, statusOptions } = filterOptions;

  return [
    {
      id: 'type',
      headerComponent: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Build />
      <Typography>Type</Typography>
    </div>,
      detailsComponent: generateDetailsComponent('Select the type of work orders to display.', 'type', typeOptions),
    },
    {
      id: 'priority',
      headerComponent: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <PriorityHigh />
      <Typography>Priority</Typography>
    </div>,
      detailsComponent: generateDetailsComponent('Filter by priority to focus on urgent work orders first.', 'priority', priorityOptions),
    },
    {
      id: 'site',
      headerComponent: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Place />
      <Typography>Site</Typography>
    </div>,
      detailsComponent: generateChipDetailsComponent('Choose sites to narrow down the work orders by location.', siteOptions),
    },
    {
      id: 'assets',
      headerComponent: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Storage />
      <Typography>Assets</Typography>
    </div>,
      detailsComponent: generateChipDetailsComponent('Select specific assets involved in the work orders.', assetsOptions),
    },
    {
      id: 'assignedUsers',
      headerComponent: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <People />
      <Typography>Assigned Users</Typography>
    </div>,
      detailsComponent: generateChipDetailsComponent('Filter work orders by the assigned user or team.', assignedUsersOptions),
    },
    {
      id: 'status',
      headerComponent: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <AssignmentTurnedIn />
      <Typography>Status</Typography>
    </div>,
      detailsComponent: generateDetailsComponent('View work orders based on their current status.', 'status', statusOptions),
    },
    // Add error and loading sections as needed
  ];
}


function generateDetailsComponent(description, name, options) {
  return (
    <div>
      <Typography variant="body2" gutterBottom>{description}</Typography>
      <CompanyCheckboxGroup name={name} options={options} onChange={(selectedValues) => console.log(`${name} Selected:`, selectedValues)} />
    </div>
  );
}

function generateChipDetailsComponent(description, chipData) {
  return (
    <div>
      <Typography variant="body2" gutterBottom>{description}</Typography>
      <CompanyChipGroup chipData={chipData} />
    </div>
  );
}


export const CompanyAccordionForm: React.FC<CompanyAccordionFormProps> = ({
  filterOptions,
  onSubmit,
}) => {
  const accordionData = generateAccordionData(filterOptions);

  return (
    <form onSubmit={onSubmit}>
      <CompanyAccordion accordionData={accordionData} backgroundColor={'white'} primary={undefined} size={undefined} label={undefined}/>
      <button type="submit">Submit</button>
    </form>
  );
};

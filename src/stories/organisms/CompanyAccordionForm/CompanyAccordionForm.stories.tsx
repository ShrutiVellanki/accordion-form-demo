import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyAccordionForm } from './CompanyAccordionForm';
import { CompanyCheckboxGroup } from '../../molecules/form-groups/CompanyCheckboxGroup/CompanyCheckboxGroup';
import { CompanyChipGroup } from '../../molecules/form-groups/CompanyChipGroup/CompanyChipGroup';
import { CompanyErrorMessage } from '../../atoms/CompanyErrorMessage/CompanyErrorMessage';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Build from '@mui/icons-material/Build';
import Storage from '@mui/icons-material/Storage';
import PriorityHigh from '@mui/icons-material/PriorityHigh';

import CompanyLoadingMessage from '../../atoms/CompanyLoadingMessage/CompanyLoadingMessage';
import { AssignmentTurnedIn, People, Place } from '@mui/icons-material';

export default {
  title: 'Organisms/CompanyAccordionForm',
  component: CompanyAccordionForm,
} as ComponentMeta<typeof CompanyAccordionForm>;

const Template: ComponentStory<typeof CompanyAccordionForm> = (args) => <CompanyAccordionForm {...args} />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  accordionData: [
    {
      id: 'type',
      headerComponent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Build />
          <Typography>Type</Typography>
        </div>
      ),
      detailsComponent: (
        <div>
          <Typography variant="body2" gutterBottom>
            Select the type of work orders to display.
          </Typography>
          <CompanyCheckboxGroup
            name="type"
            options={[
              { value: 'maintenance', label: 'Maintenance' },
              { value: 'inspection', label: 'Inspection' },
              { value: 'repair', label: 'Repair' },
            ]}
            onChange={(selectedValues) => console.log('Type Selected:', selectedValues)}
          />
        </div>
      ),
    },
    {
      id: 'priority',
      headerComponent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PriorityHigh />
          <Typography>Priority</Typography>
        </div>
      ),
      detailsComponent: (
        <div>
          <Typography variant="body2" gutterBottom>
            Filter by priority to focus on urgent work orders first.
          </Typography>
          <CompanyCheckboxGroup
            name="priority"
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
            onChange={(selectedValues) => console.log('Priority Selected:', selectedValues)}
          />
        </div>
      ),
    },
    // Similar structure for Site, Assets, and Assigned Users with appropriate descriptions
    {
      id: 'site',
      headerComponent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Place />
          <Typography>Site</Typography>
        </div>
      ),
      detailsComponent: (
        <div>
          <Typography variant="body2" gutterBottom>
            Choose sites to narrow down the work orders by location.
          </Typography>
          <CompanyChipGroup
            chipData={[
              { key: 'site1', label: 'Site 1' },
              { key: 'site2', label: 'Site 2' },
              // More sites...
            ]}
          />
        </div>
      ),
    },
    {
      id: 'assets',
      headerComponent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Storage />
          <Typography>Site</Typography>
        </div>
      ),
      detailsComponent: (
        <div>
          <Typography variant="body2" gutterBottom>
            Select specific assets involved in the work orders.
          </Typography>
          <CompanyChipGroup
            chipData={[
              { key: 'asset1', label: 'Asset 1' },
              { key: 'asset2', label: 'Asset 2' },
              // More assets...
            ]}
          />
        </div>
      ),
    },
    {
      id: 'assignedUsers',
      headerComponent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <People />
          <Typography>Site</Typography>
        </div>
      ),
      detailsComponent: (
        <div>
          <Typography variant="body2" gutterBottom>
            Filter work orders by the assigned user or team.
          </Typography>
          <CompanyChipGroup
            chipData={[
              { key: 'user1', label: 'User 1' },
              { key: 'user2', label: 'User 2' },
            ]}
          />
        </div>
      ),
    },
    {
      id: 'status',
      headerComponent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AssignmentTurnedIn  />
          <Typography>Site</Typography>
        </div>
      ),
      detailsComponent: (
        <div>
          <Typography variant="body2" gutterBottom>
            View work orders based on their current status.
          </Typography>
          <CompanyCheckboxGroup
            name="status"
            options={[
              { value: 'open', label: 'Open' },
              { value: 'inProgress', label: 'In Progress' },
              { value: 'closed', label: 'Closed' },
            ]}
            onChange={(selectedValues) => console.log('Status Selected:', selectedValues)}
          />
        </div>
      ),
    },
    // Error and loading sections as previously defined
  ],
  
  onSubmit: (event) => {
    event.preventDefault();
    alert('Form submission logic here.');
  },
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WorkOrdersFilters } from './WorkOrdersFilters';

export default {
  title: 'Work Orders Filters',
  component: WorkOrdersFilters,
} as ComponentMeta<typeof WorkOrdersFilters>;

const Template: ComponentStory<typeof WorkOrdersFilters> = (args) => <WorkOrdersFilters {...args} />;

import { Build, PriorityHigh, Place, People, AssignmentTurnedIn, Storage } from '@mui/icons-material';

const filterOptionsConfig = [
  {
    id: 'type',
    icon: <Build color="primary"/>,
    label: 'Type',
    description: 'Filter by work order type.',
    type: 'checkbox',
  },
  {
    id: 'priority',
    icon: <PriorityHigh color="primary"/>,
    label: 'Priority',
    description: 'Filter by work order priority.',
    type: 'checkbox',
  },
  {
    id: 'site',
    icon: <Place color="primary"/>,
    label: 'Site',
    description: 'Filter work orders by their assigned sites.',
    type: 'chip',
  },
  {
    id: 'assets',
    icon: <Storage color="primary"/>,
    label: 'Assets',
    description: 'Filter work orders by their assigned assets.',
    type: 'chip',
  },
  {
    id: 'assignedUsers',
    icon: <People color="primary"/>,
    label: 'Assigned Users',
    description: 'Filter work orders by their assigned users.',
    type: 'chip',
  },
  {
    id: 'status',
    icon: <AssignmentTurnedIn color="primary"/>,
    label: 'Status',
    description: 'Filter by work order status',
    type: 'checkbox',
  },
];


export const Demo = Template.bind({});
Demo.args = {
  filterOptions: filterOptionsConfig,
  onSubmit: (event) => {
    event.preventDefault();
    alert('Form submission logic here.');
  },
};

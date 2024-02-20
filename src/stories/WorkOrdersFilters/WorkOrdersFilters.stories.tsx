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
    icon: <Build />,
    label: 'Type',
    description: 'Filter by work order type.',
    options: [
      { value: 'maintenance', label: 'Maintenance' },
      { value: 'inspection', label: 'Inspection' },
      { value: 'repair', label: 'Repair' },
    ],
    type: 'checkbox',
  },
  {
    id: 'priority',
    icon: <PriorityHigh />,
    label: 'Priority',
    description: 'Filter by work order priority.',
    options: [
      { value: 'high', label: 'High' },
      { value: 'medium', label: 'Medium' },
      { value: 'low', label: 'Low' },
    ],
    type: 'checkbox',
  },
  {
    id: 'site',
    icon: <Place />,
    label: 'Site',
    description: 'Filter work orders by their assigned sites.',
    options: [
      // Assuming these are dynamically fetched or predefined
      { key: 'site1', label: 'Site 1' },
      { key: 'site2', label: 'Site 2' },
      // More sites...
    ],
    type: 'chip',
  },
  {
    id: 'assets',
    icon: <Storage />,
    label: 'Assets',
    description: 'Filter work orders by their assigned assets.',
    options: [
      // Assuming these are dynamically fetched or predefined
      { key: 'asset1', label: 'Asset 1' },
      { key: 'asset2', label: 'Asset 2' },
      // More assets...
    ],
    type: 'chip',
  },
  {
    id: 'assignedUsers',
    icon: <People />,
    label: 'Assigned Users',
    description: 'Filter work orders by their assigned users.',
    options: [
      // Assuming these are dynamically fetched or predefined
      { key: 'user1', label: 'User 1' },
      { key: 'user2', label: 'User 2' },
      // More users...
    ],
    type: 'chip',
  },
  {
    id: 'status',
    icon: <AssignmentTurnedIn />,
    label: 'Status',
    description: 'Filter by work order status',
    options: [
      { value: 'open', label: 'Open' },
      { value: 'inProgress', label: 'In Progress' },
      { value: 'closed', label: 'Closed' },
    ],
    type: 'checkbox',
  },
];


export const DefaultForm = Template.bind({});
DefaultForm.args = {
  filterOptions: filterOptionsConfig,
  onSubmit: (event) => {
    event.preventDefault();
    alert('Form submission logic here.');
  },
};

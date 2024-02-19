import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyAccordionForm } from './CompanyAccordionForm';

export default {
  title: 'Organisms/CompanyAccordionForm',
  component: CompanyAccordionForm,
} as ComponentMeta<typeof CompanyAccordionForm>;

const Template: ComponentStory<typeof CompanyAccordionForm> = (args) => <CompanyAccordionForm {...args} />;


const filterOptions = {
  typeOptions: [
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'inspection', label: 'Inspection' },
    { value: 'repair', label: 'Repair' },
  ],
  priorityOptions: [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ],
  siteOptions: [
    // Assuming these are dynamically fetched or predefined
    { key: 'site1', label: 'Site 1' },
    { key: 'site2', label: 'Site 2' },
    // More sites...
  ],
  assetsOptions: [
    // Assuming these are dynamically fetched or predefined
    { key: 'asset1', label: 'Asset 1' },
    { key: 'asset2', label: 'Asset 2' },
    // More assets...
  ],
  assignedUsersOptions: [
    // Assuming these are dynamically fetched or predefined
    { key: 'user1', label: 'User 1' },
    { key: 'user2', label: 'User 2' },
    // More users...
  ],
  statusOptions: [
    { value: 'open', label: 'Open' },
    { value: 'inProgress', label: 'In Progress' },
    { value: 'closed', label: 'Closed' },
  ],
};

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  filterOptions,
  onSubmit: (event) => {
    event.preventDefault();
    alert('Form submission logic here.');
  },
};

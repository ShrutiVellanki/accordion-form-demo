// CompanyCheckboxGroup.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyCheckboxGroup } from './CompanyCheckboxGroup';

export default {
  title: 'Molecules/CompanyCheckboxGroup',
  component: CompanyCheckboxGroup,
} as ComponentMeta<typeof CompanyCheckboxGroup>;

const Template: ComponentStory<typeof CompanyCheckboxGroup> = (args) => <CompanyCheckboxGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'Priority',
  label: 'Priority',
  description: 'Filter workorders by priority.',
  options: [
    { value: 'highest', label: 'Highest' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ],
};

export const DefaultCheckedValues = Template.bind({});
DefaultCheckedValues.args = {
  name: 'Priority',
  label: 'Priority',
  description: 'Filter workorders by priority. We assumed you want to see the highest priority items.',
  options: [
    { value: 'highest', label: 'Highest' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ],
  defaultCheckedValues: ['highest'],
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  name: 'Priority',
  label: 'Priority',
  description: 'Filter workorders by priority. Feel free to Select All',
  options: [
    { value: 'highest', label: 'Highest' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ],
  indeterminate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Priority',
  label: 'Priority',
  description: 'Filter workorders by priority. We assumed you want to see the highest priority items. Sorry!',
  options: [
    { value: 'highest', label: 'Highest' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ],
  defaultCheckedValues: ['highest'],
  disabledValues: ['highest']
};
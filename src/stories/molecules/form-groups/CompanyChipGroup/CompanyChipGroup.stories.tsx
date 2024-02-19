// CompanyChipGroup.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyChipGroup } from './CompanyChipGroup';

export default {
  title: 'Molecules/Form Groups/CompanyChipGroup',
  component: CompanyChipGroup,
} as ComponentMeta<typeof CompanyChipGroup>;

const Template: ComponentStory<typeof CompanyChipGroup> = (args) => <CompanyChipGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  chipData: [
    { key: 'chip1', label: 'Chip 1' },
    { key: 'chip2', label: 'Chip 2' },
    { key: 'chip3', label: 'Chip 3' },
  ],
  onDelete: (key) => alert(`Delete chip with key: ${key}`),
};

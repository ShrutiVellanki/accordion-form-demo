// CompanyCheckboxGroup.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyCheckboxGroup } from './CompanyCheckboxGroup';

export default {
  title: 'Molecules/Form Groups/CompanyCheckboxGroup',
  component: CompanyCheckboxGroup,
} as ComponentMeta<typeof CompanyCheckboxGroup>;

const Template: ComponentStory<typeof CompanyCheckboxGroup> = (args) => <CompanyCheckboxGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'exampleGroup',
  label: 'Select your options:',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  defaultCheckedValues: ['option2'],
  onChange: (selectedValues) => console.log('Selected values:', selectedValues),
};

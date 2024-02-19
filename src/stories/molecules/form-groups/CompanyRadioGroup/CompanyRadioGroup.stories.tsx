// CompanyRadioGroup.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyRadioGroup } from './CompanyRadioGroup';

export default {
  title: 'Molecules/CompanyRadioGroup',
  component: CompanyRadioGroup,
} as ComponentMeta<typeof CompanyRadioGroup>;

const Template: ComponentStory<typeof CompanyRadioGroup> = (args) => <CompanyRadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'exampleGroup',
  label: 'Choose an option:',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  defaultValue: 'option1',
  onChange: (event) => console.log(event.target.value),
};

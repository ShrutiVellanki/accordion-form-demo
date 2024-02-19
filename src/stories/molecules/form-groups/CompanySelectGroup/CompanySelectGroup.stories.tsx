// CompanySelectGroup.stories.tsx
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanySelectGroup } from './CompanySelectGroup';

export default {
  title: 'Molecules/form-groups/CompanySelectGroup',
  component: CompanySelectGroup,
} as ComponentMeta<typeof CompanySelectGroup>;

const Template: ComponentStory<typeof CompanySelectGroup> = (args) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return <CompanySelectGroup {...args} />;
  };

export const Default = Template.bind({});
Default.args = {
  label: 'Select Option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

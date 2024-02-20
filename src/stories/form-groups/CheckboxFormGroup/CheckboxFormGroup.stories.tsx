// CheckboxFormGroup.stories.tsx
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxFormGroup, Option } from './CheckboxFormGroup';

export default {
  title: 'Form Groups/CheckboxFormGroup',
  component: CheckboxFormGroup,
} as ComponentMeta<typeof CheckboxFormGroup>;

// Define options for the story
const options: Option[] = [
  { value: 'highest', label: 'Highest' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

// State management wrapper component for the story
const CheckboxFormGroupWrapper: React.FC<Partial<CheckboxFormGroupProps>> = ({
  defaultCheckedValues = [],
  ...props
}) => {
  const [checkedValues, setCheckedValues] = useState<string[]>(defaultCheckedValues);

  const handleCheckboxChanged = (value: string) => {
    setCheckedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSelectAllChanged = (isAllSelected: boolean) => {
    setCheckedValues(isAllSelected ? [] : options.map((o) => o.value));
  };

  return (
    <CheckboxFormGroup
      options={options}
      checkedValues={checkedValues}
      onCheckboxChanged={handleCheckboxChanged}
      onSelectAllChanged={handleSelectAllChanged}
      {...props}
    />
  );
};

const Template: ComponentStory<typeof CheckboxFormGroupWrapper> = (args) => <CheckboxFormGroupWrapper {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'priority',
  label: 'Priority',
  description: 'Filter work orders by priority.',
};

export const DefaultCheckedValues = Template.bind({});
DefaultCheckedValues.args = {
  name: 'priority',
  label: 'Priority',
  description: 'Filter work orders by priority. We assumed you want to see the highest priority items.',
  defaultCheckedValues: ['highest'],
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  name: 'priority',
  label: 'Priority',
  description: 'Filter work orders by priority. Feel free to select all.',
  indeterminate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'priority',
  label: 'Priority',
  description: 'Filter work orders by priority. We assumed you want to see the highest priority items. Sorry!',
  disabledValues: ['highest'],
  defaultCheckedValues: ['highest'],
};

// ChipFormGroup.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChipFormGroup } from './ChipFormGroup';
import { BuildCircle, Face, Hardware, PrecisionManufacturing } from '@mui/icons-material';

export default {
  title: 'Form Groups/ChipFormGroup',
  component: ChipFormGroup,
} as ComponentMeta<typeof ChipFormGroup>;

const Template: ComponentStory<typeof ChipFormGroup> = (args) => <ChipFormGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Work Sites',
  description: 'Filter work orders by work sites.',
  options: [
    { key: 'toronto', label: 'Toronto'},
    { key: 'hamilton', label: 'Hamilton'},
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: 'Assets',
  description: 'Filter work orders by asset types.',
  options: [
    { key: 'wrench', label: 'Wrench', icon: <BuildCircle/>},
    { key: 'hammer5002', label: 'Hammer', icon: <Hardware /> },
    { key: 'robotic-arm-1088', label: 'Robotic Arm', icon: <PrecisionManufacturing/> },
  ],
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  label: 'Work Sites',
  description: 'Filter work orders by work sites.',
  options: [
    { key: 'toronto', label: 'Toronto'},
    { key: 'hamilton', label: 'Hamilton'},
    { key: 'sarnia', label: 'Sarnia'},
    { key: 'windsor', label: 'Windsor'},
  ],
  size: 'small',
};



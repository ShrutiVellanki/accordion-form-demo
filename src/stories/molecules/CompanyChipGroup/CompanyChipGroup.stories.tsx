// CompanyChipGroup.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyChipGroup } from './CompanyChipGroup';
import { BuildCircle, Face, Hardware, PrecisionManufacturing } from '@mui/icons-material';

export default {
  title: 'Molecules/CompanyChipGroup',
  component: CompanyChipGroup,
} as ComponentMeta<typeof CompanyChipGroup>;

const Template: ComponentStory<typeof CompanyChipGroup> = (args) => <CompanyChipGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Work Sites',
  helperText: 'Filter work orders by work sites.',
  chipData: [
    { key: 'toronto', label: 'Toronto'},
    { key: 'hamilton', label: 'Hamilton'},
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: 'Assets',
  helperText: 'Filter work orders by asset types.',
  chipData: [
    { key: 'wrench', label: 'Wrench', icon: <BuildCircle/>},
    { key: 'hammer5002', label: 'Hammer', icon: <Hardware /> },
    { key: 'robotic-arm-1088', label: 'Robotic Arm', icon: <PrecisionManufacturing/> },
  ],
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  label: 'Work Sites',
  helperText: 'Filter work orders by work sites.',
  chipData: [
    { key: 'toronto', label: 'Toronto'},
    { key: 'hamilton', label: 'Hamilton'},
    { key: 'sarnia', label: 'Sarnia'},
    { key: 'windsor', label: 'Windsor'},
  ],
  size: 'small',
};



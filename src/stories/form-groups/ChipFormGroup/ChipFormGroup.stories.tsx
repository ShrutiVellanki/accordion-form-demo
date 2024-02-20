// ChipFormGroup.stories.tsx
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChipFormGroup } from './ChipFormGroup';
import { BuildCircle, Hardware, PrecisionManufacturing } from '@mui/icons-material';

export default {
  title: 'Form Groups/ChipFormGroup',
  component: ChipFormGroup,
} as ComponentMeta<typeof ChipFormGroup>;

// State management wrapper component for the story
const ChipFormGroupWrapper: React.FC<Partial<typeof ChipFormGroup>> = ({ selectedChips: defaultSelectedChips = [], ...props }) => {
  const [selectedChips, setSelectedChips] = useState<string[]>(defaultSelectedChips);

  const handleToggle = (chipKey: string) => {
    setSelectedChips((prevSelected) =>
      prevSelected.includes(chipKey) ? prevSelected.filter((key) => key !== chipKey) : [...prevSelected, chipKey]
    );
  };

  return <ChipFormGroup selectedChips={selectedChips} onToggle={handleToggle} {...props} />;
};

const Template: ComponentStory<typeof ChipFormGroupWrapper> = (args) => <ChipFormGroupWrapper {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Work Sites',
  description: 'Filter work orders by work sites.',
  selectedChips: ['toronto'],
  options: [
    { key: 'toronto', label: 'Toronto'},
    { key: 'hamilton', label: 'Hamilton'},
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: 'Assets',
  description: 'Filter work orders by asset types.',
  selectedChips: [],
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
  selectedChips: [],
  options: [
    { key: 'toronto', label: 'Toronto', size: 'small'},
    { key: 'hamilton', label: 'Hamilton', size: 'small'},
    { key: 'sarnia', label: 'Sarnia', size: 'small'},
    { key: 'windsor', label: 'Windsor', size: 'small'},
  ],
  size: 'small',
};

// CompanyErrorPopup.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyErrorPopup } from './CompanyErrorPopup';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default {
  title: 'Molecules/CompanyErrorPopup',
  component: CompanyErrorPopup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CompanyErrorPopup>;

const Template: ComponentStory<typeof CompanyErrorPopup> = (args) => <CompanyErrorPopup {...args} />;

export const DefaultErrorPopup = Template.bind({});
DefaultErrorPopup.args = {
  open: true,
  errorMessage: 'An unexpected error occurred.',
  errorIcon: <ErrorOutlineIcon />,
  onClose: () => alert('Close button clicked'),
};

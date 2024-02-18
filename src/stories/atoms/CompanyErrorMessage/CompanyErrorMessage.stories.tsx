import React from 'react';
import ErrorIcon from '@mui/icons-material/Error'; // Importing an error icon for demonstration
import { CompanyErrorMessage } from './CompanyErrorMessage'; // Ensure correct import path

export default {
  title: 'Atoms/CompanyErrorMessage',
  component: CompanyErrorMessage,
  argTypes: {
    backgroundColor: { control: 'color' }, // Optional, if your component supports changing the background color
  },
};

const Template = (args) => <CompanyErrorMessage {...args} />;

export const DefaultErrorMessage = Template.bind({});
DefaultErrorMessage.args = {
  icon: <ErrorIcon />, // Example usage of an error icon
  description: 'An error occurred while fetching data.', // Example error description
};

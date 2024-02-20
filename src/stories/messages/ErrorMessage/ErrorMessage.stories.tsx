import React from 'react';
import ErrorIcon from '@mui/icons-material/Error'; // Importing an error icon for demonstration
import { ErrorMessage } from './ErrorMessage'; // Ensure correct import path

export default {
  title: 'Message/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    backgroundColor: { control: 'color' }, // Optional, if your component supports changing the background color
  },
};

const Template = (args) => <ErrorMessage {...args} />;

export const DefaultErrorMessage = Template.bind({});
DefaultErrorMessage.args = {
  icon: <ErrorIcon />, // Example usage of an error icon
  description: 'An error occurred while fetching data.', // Example error description
};

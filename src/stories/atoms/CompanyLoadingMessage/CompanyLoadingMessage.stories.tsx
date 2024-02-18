import React from 'react';
import ErrorIcon from '@mui/icons-material/Error'; // Importing an error icon for demonstration
import  CompanyLoadingMessage from './CompanyLoadingMessage'; // Ensure correct import path

export default {
  title: 'Atoms/CompanyLoadingMessage',
  component: CompanyLoadingMessage,
  argTypes: {
    backgroundColor: { control: 'color' }, // Optional, if your component supports changing the background color
  },
};

const Template = (args) => <CompanyLoadingMessage {...args} />;

export const DefaultErrorMessage = Template.bind({});
DefaultErrorMessage.args = {
  icon: <ErrorIcon />, // Example usage of an error icon
  message: 'Loading Data....', // Example error description
};

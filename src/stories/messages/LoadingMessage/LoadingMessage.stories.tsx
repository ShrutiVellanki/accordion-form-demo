import React from 'react';
import ErrorIcon from '@mui/icons-material/Error'; // Importing an error icon for demonstration
import  LoadingMessage from './LoadingMessage'; // Ensure correct import path

export default {
  title: 'Message/LoadingMessage',
  component: LoadingMessage,
  argTypes: {
    backgroundColor: { control: 'color' }, // Optional, if your component supports changing the background color
  },
};

const Template = (args) => <LoadingMessage {...args} />;

export const DefaultLoadingMessage = Template.bind({});
DefaultLoadingMessage.args = {
  icon: <ErrorIcon />, // Example usage of an error icon
  message: 'Loading Data....', // Example error description
};

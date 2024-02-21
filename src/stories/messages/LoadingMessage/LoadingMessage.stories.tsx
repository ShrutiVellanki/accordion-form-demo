import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import  LoadingMessage from './LoadingMessage';

export default {
  title: 'Message/LoadingMessage',
  component: LoadingMessage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LoadingMessage {...args} />;

export const DefaultLoadingMessage = Template.bind({});
DefaultLoadingMessage.args = {
  icon: <ErrorIcon />, 
  message: 'Loading Data....',
};

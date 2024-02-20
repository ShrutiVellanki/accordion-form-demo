import React from 'react';
import Typography from '@mui/material/Typography';
import { AccordionContainer } from './AccordionContainer';

export default {
  title: 'Container/AccordionContainer',
  component: AccordionContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AccordionContainer {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  accordionData: [
    {
      id: 'panel1',
      headerComponent: (
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          General settings
        </Typography>
      ),
      secondaryHeaderComponent: (
        <Typography sx={{ color: 'text.secondary' }}>
          I am an accordion
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
        </Typography>
      ),
    },
    {
      id: 'panel2',
      headerComponent: (
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Users
        </Typography>
      ),
      secondaryHeaderComponent: (
        <Typography sx={{ color: 'text.secondary' }}>
          You are currently not an owner
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
        </Typography>
      ),
      // No need to specify expandIcon if using the default
    },
  ],
  backgroundColor: '', // Allows control to change the background color from Storybook UI
};

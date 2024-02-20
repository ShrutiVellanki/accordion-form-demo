import React from 'react';
import Typography from '@mui/material/Typography';
import { AccordionContainer } from './AccordionContainer';
import { People, Settings, Group, Security } from '@mui/icons-material';

export default {
  title: 'Container/AccordionContainer',
  component: AccordionContainer,
  argTypes: {
  },
};

const Template = (args) => <AccordionContainer {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  accordionData: [
    {
      id: 'panel1',
      headerComponent: (
        <Typography>
          Work Order Details
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Overview of work order specifics, including task descriptions, deadlines, and assigned personnel.
        </Typography>
      ),
    },
    {
      id: 'panel2',
      headerComponent: (
        <Typography>
          Personnel Assignments
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Detailed list of all personnel assigned to the work order, including roles, responsibilities, and contact information.
        </Typography>
      ),
    },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  accordionData: [
    {
      id: 'panel1',
      icon: <Settings />,
      headerComponent: (
        <Typography>
          Work Order Settings
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Configuration options for this work order, such as priority level, privacy settings, and automation rules.
        </Typography>
      ),
    },
    {
      id: 'panel2',
      icon: <Group />,
      headerComponent: (
        <Typography>
          Team Overview
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Information on the team handling this work order, including team structure, member roles, and collaboration methods.
        </Typography>
      ),
    },
  ],
};

export const DetailedView = Template.bind({});
DetailedView.args = {
  accordionData: [
    {
      id: 'panel1',
      headerComponent: (
        <Typography>
          Detailed Work Order View
        </Typography>
      ),
      secondaryHeaderComponent: (
        <Typography sx={{ color: 'text.secondary' }}>
          An in-depth look at work order tasks and milestones
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Explore the detailed breakdown of tasks, milestones, and progress tracking for this work order.
        </Typography>
      ),
    },
    {
      id: 'panel2',
      headerComponent: (
        <Typography>
          Security and Access Controls
        </Typography>
      ),
      secondaryHeaderComponent: (
        <Typography sx={{ color: 'text.secondary' }}>
          Manage permissions and security settings
        </Typography>
      ),
      detailsComponent: (
        <Typography>
          Set and manage access controls and security protocols for sensitive information within the work order.
        </Typography>
      ),
    },
  ],
};

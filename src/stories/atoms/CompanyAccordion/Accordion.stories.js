import { AccordionWrapper } from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/AccordionWrapper',
  component: AccordionWrapper,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'AccordionWrapper',
  },
};

export const Secondary = {
  args: {
    label: 'AccordionWrapper',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'AccordionWrapper',
  },
};
  
export const Small = {
  args: {
    size: 'small',
    label: 'AccordionWrapper',
  },
};

export const FormAccordion = {
  args: {
    size: 'small',
    label: 'AccordionWrapper',
  },
};
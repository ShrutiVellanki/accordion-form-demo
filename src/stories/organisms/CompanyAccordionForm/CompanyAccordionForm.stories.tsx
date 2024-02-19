import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompanyAccordionForm } from './CompanyAccordionForm';
import { CompanyCheckboxGroup } from '../../molecules/form-groups/CompanyCheckboxGroup/CompanyCheckboxGroup';
import { CompanyChipGroup } from '../../molecules/form-groups/CompanyChipGroup/CompanyChipGroup';
import { CompanyRadioGroup } from '../../molecules/form-groups/CompanyRadioGroup/CompanyRadioGroup';
import { CompanyErrorMessage } from '../../atoms/CompanyErrorMessage/CompanyErrorMessage';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CompanyLoadingMessage from '../../atoms/CompanyLoadingMessage/CompanyLoadingMessage';
import { CompanySelectGroup } from '../../molecules/form-groups/CompanySelectGroup/CompanySelectGroup';

export default {
  title: 'Organisms/CompanyAccordionForm',
  component: CompanyAccordionForm,
} as ComponentMeta<typeof CompanyAccordionForm>;

const Template: ComponentStory<typeof CompanyAccordionForm> = (args) => <CompanyAccordionForm {...args} />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  accordionData: [
    {
      id: 'checkboxGroup',
      headerComponent: <Typography>Checkbox Group</Typography>,
      detailsComponent: <CompanyCheckboxGroup
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' }
        ]}
        name="checkboxGroupExample"
        onChange={(selectedValues) => console.log('CheckboxGroup Selected:', selectedValues)}
      />,
    },
    {
      id: 'chipGroup',
      headerComponent: <Typography>Chip Group</Typography>,
      detailsComponent: <CompanyChipGroup
        chipData={[
          { key: 'chip1', label: 'Chip 1' },
          { key: 'chip2', label: 'Chip 2' }
        ]}
      />,
    },
    {
      id: 'selectGroup',
      headerComponent: <Typography>Select Group</Typography>,
      detailsComponent: <CompanyRadioGroup
        options={[
          { value: 'radio1', label: 'Radio 1' },
          { value: 'radio2', label: 'Radio 2' }
        ]}
        name="radioGroupExample"
        onChange={(event) => console.log('RadioGroup Selected:', event.target.value)} label={''}      />,
    },
  
    {
      id: 'selectGroup',
      headerComponent: <Typography>Radio Group</Typography>,
      detailsComponent: <CompanySelectGroup
        options={[
          { value: 'radio1', label: 'Radio 1' },
          { value: 'radio2', label: 'Radio 2' }
        ]}
        onChange={(event) => console.log('RadioGroup Selected:', event.target.value)} label={''}      />,
    },
    {
      id: 'error',
      headerComponent: <Typography>Error Message</Typography>,
      detailsComponent: <CompanyErrorMessage
        description="An error has occurred."
        icon={<ErrorOutlineIcon />}
      />,
    },
    {
      id: 'loading',
      headerComponent: <Typography>Loading Section</Typography>,
      detailsComponent: <CompanyLoadingMessage
        message="An error has occurred."
        showIcon={true}
      />
    }
  ],
  onSubmit: (event) => {
    event.preventDefault();
    alert('Form submission logic here.');
  },
};

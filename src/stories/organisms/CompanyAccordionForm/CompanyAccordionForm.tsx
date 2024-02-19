// CompanyAccordionForm.tsx
import React from 'react';
import { CompanyAccordion } from '../../atoms/CompanyAccordion/CompanyAccordion';
import { Typography } from '@mui/material';

interface AccordionPanel {
  id: string;
  headerComponent: React.ReactNode;
  detailsComponent: React.ReactNode;
}

interface CompanyAccordionFormProps {
  accordionData: AccordionPanel[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const CompanyAccordionForm: React.FC<CompanyAccordionFormProps> = ({
  accordionData,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <CompanyAccordion accordionData={accordionData} backgroundColor={'white'}/>
      <button type="submit">Submit</button>
    </form>
  );
};

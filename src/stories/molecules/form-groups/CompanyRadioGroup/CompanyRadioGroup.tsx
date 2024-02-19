// CompanyRadioGroup.tsx
import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface CompanyRadioGroupProps {
  options: { value: string; label: string }[];
  name: string;
  label: string;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CompanyRadioGroup: React.FC<CompanyRadioGroupProps> = ({
  options,
  name,
  label,
  defaultValue,
  onChange,
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup name={name} defaultValue={defaultValue} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

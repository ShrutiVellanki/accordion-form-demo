// CompanyCheckboxGroup.tsx
import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface CompanyCheckboxGroupProps {
  options: Option[];
  name: string;
  label?: string;
  defaultCheckedValues?: string[];
  onChange: (selectedValues: string[]) => void;
}

export const CompanyCheckboxGroup: React.FC<CompanyCheckboxGroupProps> = ({
  options,
  name,
  label,
  defaultCheckedValues = [],
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let newCheckedValues = [...defaultCheckedValues];

    if (event.target.checked) {
      newCheckedValues = [...newCheckedValues, value];
    } else {
      newCheckedValues = newCheckedValues.filter((checkedValue) => checkedValue !== value);
    }

    onChange(newCheckedValues);
  };

  return (
    <FormGroup>
      {label && <div>{label}</div>}
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<Checkbox checked={defaultCheckedValues.includes(option.value)} onChange={handleChange} value={option.value} name={name} />}
          label={option.label}
        />
      ))}
    </FormGroup>
  );
};

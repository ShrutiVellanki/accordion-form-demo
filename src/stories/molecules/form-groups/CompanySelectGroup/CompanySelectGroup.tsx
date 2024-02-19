// CompanySelectGroup.tsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface CompanySelectGroupProps {
  options: Option[];
  label: string;
  value?: string;
  onChange: (event: SelectChangeEvent) => void;
}

export const CompanySelectGroup: React.FC<CompanySelectGroupProps> = ({
  options,
  label,
  value,
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

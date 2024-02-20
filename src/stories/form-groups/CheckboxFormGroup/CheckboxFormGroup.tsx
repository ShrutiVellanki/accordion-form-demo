import React, { useEffect, useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormLabel, FormControl, Box, FormHelperText } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface CheckboxFormGroupProps {
  options: Option[];
  name: string;
  label: string;
  checkedValues: string[];
  onCheckboxChanged: (value: string) => void;
  onSelectAllChanged: (isAllSelected: boolean) => void;
  description?: string;
  disabledValues?: string[];
  indeterminate?: boolean;
}

export const CheckboxFormGroup: React.FC<CheckboxFormGroupProps> = ({
  options,
  name,
  label,
  description,
  checkedValues,
  onCheckboxChanged,
  onSelectAllChanged,
  disabledValues = [],
  indeterminate = false,
}) => {
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    const allChecked = options.every(option => checkedValues.includes(option.value) && !disabledValues.includes(option.value));
    const someChecked = options.some(option => checkedValues.includes(option.value) && !disabledValues.includes(option.value));
    setIsCheckedAll(allChecked);
    setIsIndeterminate(!allChecked && someChecked);
  }, [checkedValues, options, disabledValues]);

  const handleSelectAll = () => {
    const isAllSelected = options.length === checkedValues.length;
    onSelectAllChanged(!isAllSelected);
  };

  const handleCheckboxChange = (event) => {
    onCheckboxChanged(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl component="fieldset" variant="standard" role="group" aria-labelledby={`${name}-label`} aria-describedby={`${name}-description`}>
        <FormLabel id={`${name}-label`} component="legend">{label}</FormLabel>
        {description && <FormHelperText id={`${name}-description`}>{description}</FormHelperText>}
        <FormGroup>
          {indeterminate && (
            <FormControlLabel
              control={
                <Checkbox
                  indeterminate={isIndeterminate}
                  checked={isCheckedAll}
                  onChange={handleSelectAll}
                  name={`${name}-all`}
                  aria-label="Select All"
                  aria-checked={isCheckedAll ? 'true' : isIndeterminate ? 'mixed' : 'false'}
                />
              }
              label="Select All"
            />
          )}
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  checked={checkedValues.includes(option.value)}
                  onChange={handleCheckboxChange}
                  value={option.value}
                  name={name}
                  disabled={disabledValues.includes(option.value)}
                  aria-checked={checkedValues.includes(option.value) ? 'true' : 'false'}
                  aria-disabled={disabledValues.includes(option.value) ? 'true' : 'false'}
                />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

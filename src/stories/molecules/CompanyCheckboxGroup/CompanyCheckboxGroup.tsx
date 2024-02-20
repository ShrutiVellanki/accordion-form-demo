import React, { useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormLabel, FormControl, Box, FormHelperText } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface CompanyCheckboxGroupProps {
  options: Option[];
  name: string;
  label?: string;
  description?: string;
  defaultCheckedValues?: string[];
  disabledValues?: string[];
  indeterminate?: boolean;
}

export const CompanyCheckboxGroup: React.FC<CompanyCheckboxGroupProps> = ({
  options,
  name,
  label,
  description,
  defaultCheckedValues = [],
  disabledValues = [],
  indeterminate = false,
}) => {
  const [checked, setChecked] = useState<string[]>(defaultCheckedValues);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    const allChecked = options.every(option => checked.includes(option.value) && !disabledValues.includes(option.value));
    const someChecked = options.some(option => checked.includes(option.value) && !disabledValues.includes(option.value));
    setIsCheckedAll(allChecked);
    setIsIndeterminate(!allChecked && someChecked);
  }, [checked, options, disabledValues]);

  const handleParentChange = () => {
    if (isCheckedAll || isIndeterminate) {
      setChecked(checked.filter(value => disabledValues.includes(value))); // Keep only disabled values checked
    } else {
      setChecked(options.filter(option => !disabledValues.includes(option.value)).map(option => option.value)); // Check all except disabled
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setChecked(current => 
      event.target.checked
        ? [...current, value]
        : current.filter(checkedValue => checkedValue !== value)
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        {label && <FormLabel component="legend">{label}</FormLabel>}
        {description && <FormHelperText>{description}</FormHelperText>}
        <FormGroup>
          {indeterminate && <FormControlLabel
            control={
              <Checkbox
                indeterminate={isIndeterminate}
                checked={isCheckedAll}
                onChange={handleParentChange}
                name={`${name}-all`}
                aria-label={"Select All"}
              />
            }
            label={""}
          />}
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  checked={checked.includes(option.value)}
                  onChange={handleChange}
                  value={option.value}
                  name={name}
                  disabled={disabledValues.includes(option.value)}
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

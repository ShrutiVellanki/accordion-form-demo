import React, { useState } from 'react';
import { Chip, Stack, FormControl, FormLabel, FormGroup, FormHelperText, IconClasses } from '@mui/material';

// expected shape of ChipData
interface ChipData {
  key: string;
  label: string;
  icon?: React.ReactElement; // optional icon
  size?: 'small' | 'medium'; // optional size
}

// inputs to ChipFormGroups
interface ChipFormGroupProps {
  options: ChipData[];
  selectedChips: string[];
  onToggle: (chipKey: string) => void;
  label: string; 
  description?: string; // optional description
}

export const ChipFormGroup: React.FC<ChipFormGroupProps> = ({ options, selectedChips, onToggle, label, description}) => {

  return (
      <FormControl component="fieldset" variant="standard" aria-labelledby={label ? `${name}-label` : undefined}>
        <FormLabel id={`${name}-label`} component="legend">{label}</FormLabel>
        {description && <FormHelperText id={`${name}-description`}>{description}</FormHelperText>}
        <FormGroup aria-describedby={description ? `${name}-description` : undefined}>
          <Stack direction="row" spacing={1} role="group">
            {options.map((data, index) => (
              <Chip
                color={selectedChips.includes(data.key) ? "primary" : "default"}
                key={data.key}
                label={data.label}
                onClick={() => onToggle(data.key)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onToggle(data.key);
                    e.preventDefault();
                  }
                }}
                tabIndex={0}
                variant={selectedChips.includes(data.key) ? "filled" : "outlined"}
                icon={data.icon}
                size={data.size}
                role="option"
                aria-selected={selectedChips.includes(data.key) ? 'true' : 'false'}
              />
            ))}
          </Stack>
        </FormGroup>
      </FormControl>
  );
};

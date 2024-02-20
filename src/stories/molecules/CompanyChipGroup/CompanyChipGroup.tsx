import React, { useState } from 'react';
import { Chip, Stack, FormControl, FormLabel, FormGroup, FormHelperText, IconClasses } from '@mui/material';

interface ChipData {
  key: string;
  label: string;
  icon?: React.ReactElement; 
}

interface CompanyChipGroupProps {
  chipData: ChipData[];
  label?: string; 
  helperText?: string;
  size?: 'small' | 'medium';
}

export const CompanyChipGroup: React.FC<CompanyChipGroupProps> = ({ chipData, label, helperText, size = "medium" }) => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleToggle = (chipKey: string) => {
    setSelectedChips((prevSelected) =>
      prevSelected.includes(chipKey)
        ? prevSelected.filter((key) => key !== chipKey) // Unselect
        : [...prevSelected, chipKey] // Select
    );
  };

  return (
    <FormControl component="fieldset" variant="standard">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormGroup>
        <Stack direction="row" spacing={1}>
          {chipData.map((data) => (
            <Chip
              color={selectedChips.includes(data.key) ? "primary" : "default"}
              key={data.key}
              label={data.label}
              onClick={() => handleToggle(data.key)}
              variant={selectedChips.includes(data.key) ? "filled" : "outlined"}
              icon={data.icon}
              size={size} 
            />
          ))}
        </Stack>
      </FormGroup>
    </FormControl>
  );
};

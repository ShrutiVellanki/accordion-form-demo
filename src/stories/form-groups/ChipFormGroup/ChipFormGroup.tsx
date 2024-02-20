import React, { useState } from 'react';
import { Chip, Stack, FormControl, FormLabel, FormGroup, FormHelperText, IconClasses } from '@mui/material';

interface ChipData {
  key: string;
  label: string;
  icon?: React.ReactElement; 
}

interface ChipFormGroupProps {
  options: ChipData[];
  name?: string;
  label?: string; 
  description?: string;
  size?: 'small' | 'medium';
}

export const ChipFormGroup: React.FC<ChipFormGroupProps> = ({ options, label, description, size = "medium" }) => {
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
      {description && <FormHelperText>{description}</FormHelperText>}
      <FormGroup>
        <Stack direction="row" spacing={1}>
          {options.map((data) => (
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

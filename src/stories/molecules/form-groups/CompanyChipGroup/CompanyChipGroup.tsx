import React, { useState } from 'react';
import { Stack, Chip } from '@mui/material';

interface ChipData {
  key: string;
  label: string;
}

interface CompanyChipGroupProps {
  chipData: ChipData[];
}

export const CompanyChipGroup: React.FC<CompanyChipGroupProps> = ({ chipData }) => {
  // State to track selected chips
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  // Handler for chip click - toggles selection status
  const handleToggle = (chipKey: string) => {
    setSelectedChips((prevSelected) =>
      prevSelected.includes(chipKey)
        ? prevSelected.filter((key) => key !== chipKey) // Unselect
        : [...prevSelected, chipKey] // Select
    );
  };

  return (
    <Stack direction="row" spacing={1}>
      {chipData.map((data) => (
        <Chip
          // Change color based on selection status
          color={selectedChips.includes(data.key) ? "primary" : "default"}
          key={data.key}
          label={data.label}
          onClick={() => handleToggle(data.key)}
          // Optionally, you can use `variant` to further distinguish selected chips
          variant={selectedChips.includes(data.key) ? "filled" : "outlined"}
        />
      ))}
    </Stack>
  );
};

// CompanyChipGroup.tsx
import React from 'react';
import { Chip, Stack } from '@mui/material';

interface ChipData {
  key: string;
  label: string;
}

interface CompanyChipGroupProps {
  chipData: ChipData[];
  onDelete?: (key: string) => void;
}

export const CompanyChipGroup: React.FC<CompanyChipGroupProps> = ({
  chipData,
  onDelete,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      {chipData.map((data) => (
        <Chip
          key={data.key}
          label={data.label}
          onDelete={onDelete ? () => onDelete(data.key) : undefined}
        />
      ))}
    </Stack>
  );
};

// CompanyErrorPopup.tsx
import React from 'react';
import { CompanyErrorMessage } from '../../atoms/CompanyErrorMessage/CompanyErrorMessage'; // Adjust the import path as necessary
import Modal from '@mui/material/Modal'; // Using MUI Modal for simplicity
import Box from '@mui/material/Box'; // For styling the modal content
import { Typography } from '@mui/material';

interface CompanyErrorPopupProps {
  open: boolean;
  onClose: () => void;
  errorMessage: string;
  errorIcon?: React.ReactNode;
}

export const CompanyErrorPopup: React.FC<CompanyErrorPopupProps> = ({
  open,
  onClose,
  errorMessage,
  errorIcon,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <CompanyErrorMessage icon={errorIcon} description={errorMessage} />
        <Typography sx={{ mt: 2 }} variant="body2">
          Please try again or contact support if the problem persists.
        </Typography>
      </Box>
    </Modal>
  );
};

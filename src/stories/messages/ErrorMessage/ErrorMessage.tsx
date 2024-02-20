import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error'; // Material-UI error icon
import { useTheme } from '@mui/material/styles';

/**
 * Component for displaying error messages with an optional icon and description.
 */
export const ErrorMessage = ({ icon, description }) => {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" minHeight="100%" p={4}>
      {icon && (
        <Box color={theme.palette.error.main} mb={2}>
          {icon ? icon : <ErrorIcon style={{ fontSize: 60 }} />}
        </Box>
      )}
      <Typography variant="body1" align="center">
        {description}
      </Typography>
    </Box>
  );
};

ErrorMessage.propTypes = {
  icon: PropTypes.node, // Custom icon component, defaults to ErrorIcon if not provided
  description: PropTypes.string.isRequired, // Error description text
  showIcon: PropTypes.bool, // Whether to show the error icon
};

ErrorMessage.defaultProps = {
  showIcon: true, // Show the error icon by default
};

export default ErrorMessage;

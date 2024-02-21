// LoadingMessage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const LoadingMessage = ({ message, showIcon = true }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" minHeight="100%" bgcolor="background.default" color="text.primary">
      {showIcon && <CircularProgress color="secondary" />}
      <Typography variant="body1" style={{ marginTop: 16, color: 'primary' }}>
        {message}
      </Typography>
    </Box>
  );
};

LoadingMessage.propTypes = {
  message: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};

LoadingMessage.defaultProps = {
  showIcon: true,
};

export default LoadingMessage;

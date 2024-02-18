// CompanyLoadingMessage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './CompanyLoadingMessage.css'; // Import the CSS for styling
import CircularProgress from '@mui/material/CircularProgress'; // Material-UI loading spinner
import Typography from '@mui/material/Typography';

const CompanyLoadingMessage = ({ message, showIcon = true }) => {
  return (
    <div className="company-loading-message">
      {showIcon && <CircularProgress />}
      <Typography variant="body1">{message}</Typography>
    </div>
  );
};

CompanyLoadingMessage.propTypes = {
  message: PropTypes.string.isRequired, // The loading message text
  showIcon: PropTypes.bool, // Whether to show the loading icon
};

CompanyLoadingMessage.defaultProps = {
  showIcon: true, // Default to showing the icon
};

export default CompanyLoadingMessage;

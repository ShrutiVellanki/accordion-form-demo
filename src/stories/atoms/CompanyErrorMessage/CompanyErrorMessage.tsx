import PropTypes from 'prop-types';
import './CompanyErrorMessage.css'; // Update the CSS file name accordingly
import React from 'react';
import Typography from '@mui/material/Typography';

/**
 * Component for displaying error messages with an icon and description.
 */
export const CompanyErrorMessage = ({
  icon, // Expecting an MUI Icon or similar
  description, // Text description of the error
  ...props
}) => {
  return (
    <div className="company-error-message" {...props}>
      {/* Display the icon */}
      {icon && <div>{icon}</div>}
      {/* Display the description */}
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};

CompanyErrorMessage.propTypes = {
  icon: PropTypes.node, // Icon component
  description: PropTypes.string.isRequired, // Error description
};

CompanyErrorMessage.defaultProps = {
  icon: null, // No default icon
};

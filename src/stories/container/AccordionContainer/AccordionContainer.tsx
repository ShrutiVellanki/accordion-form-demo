import PropTypes from 'prop-types';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'; 

export const AccordionContainer = ({
  accordionData,
  backgroundColor,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  return (
    <div style={{ backgroundColor }}>
      {accordionData.map((panel) => (
        <Accordion
          key={panel.id}
          expanded={expanded === panel.id}
          onChange={(event, isExpanded) => {
            setExpanded(isExpanded ? panel.id : false);
            if (panel.onChange) panel.onChange(event, isExpanded);
          }}
          TransitionProps={{ unmountOnExit: true }}
          {...props}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panel.id}-content`}
            id={`${panel.id}-header`}
          >
            <Box display="flex" alignItems="center" width="100%">
              {panel.icon && (
                <Box mr={2} component="span" aria-hidden="true">
                  {panel.icon}
                </Box>
              )}
              <Box display="flex" flexDirection="column">
                {panel.headerComponent}
                {panel.secondaryHeaderComponent}
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails id={`${panel.id}-content`} role="region" aria-labelledby={`${panel.id}-header`}>
            {panel.detailsComponent}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

AccordionContainer.propTypes = {
  accordionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.node, // Optional icon to display before the summary
      headerComponent: PropTypes.node.isRequired, // Any React node for the primary header
      secondaryHeaderComponent: PropTypes.node, // Any React node for the secondary header, optional
      detailsComponent: PropTypes.node.isRequired, // Any React node for the details
      onChange: PropTypes.func, // Optional function to call when an accordion panel is expanded or collapsed
    })
  ).isRequired,
  backgroundColor: PropTypes.string,
};

AccordionContainer.defaultProps = {
  backgroundColor: '',
};

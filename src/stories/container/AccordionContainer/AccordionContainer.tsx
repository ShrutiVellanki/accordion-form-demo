import PropTypes from 'prop-types';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMore from '@mui/icons-material/ExpandMore';

/**
 * Primary UI component for user interaction
 */
export const AccordionContainer = ({
  accordionData,
  backgroundColor,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ backgroundColor }}>
      {accordionData.map((panel) => (
        <Accordion
          key={panel.id}
          expanded={expanded === panel.id}
          onChange={handleChange(panel.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`${panel.id}-content`}
            id={`${panel.id}-header`}
          >
            {/* Directly use the provided components or nodes */}
            {panel.headerComponent}
            {panel.secondaryHeaderComponent}
          </AccordionSummary>
          <AccordionDetails>
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
      headerComponent: PropTypes.node.isRequired, // Any React node for the primary header
      secondaryHeaderComponent: PropTypes.node, // Any React node for the secondary header, optional
      detailsComponent: PropTypes.node.isRequired, // Any React node for the details
      expandIcon: PropTypes.node, // Any React node for the expand icon, optional
    })
  ).isRequired,
  backgroundColor: PropTypes.string,
};

AccordionContainer.defaultProps = {
  backgroundColor: '',
};

import React, { useState } from 'react';
import { AccordionContainer } from '../container/AccordionContainer/AccordionContainer';
import { Button, Typography } from '@mui/material';
import { CheckboxFormGroup } from '../form-groups/CheckboxFormGroup/CheckboxFormGroup';
import { ChipFormGroup } from '../form-groups/ChipFormGroup/ChipFormGroup';
import ErrorMessage from '../messages/ErrorMessage/ErrorMessage';
import LoadingMessage from '../messages/LoadingMessage/LoadingMessage';

const fetchOptionsForFilter = async (filterId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filterId === 'error') {
        reject('Failed to fetch options for ' + filterId);
      } else {
        resolve([
          { value: filterId + '-option1', label: 'Option 1' },
          { value: filterId + '-option2', label: 'Option 2' },
        ]);
      }
    }, 1000);
  });
};

export const WorkOrdersFilters = ({ filterOptions, onSubmit }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [errorStates, setErrorStates] = useState({});
  const [options, setOptions] = useState({}); // Holds fetched options for each filter

  const handleAccordionChange = (id) => async (event, isExpanded) => {
    if (isExpanded && !options[id]) {
      setLoadingStates((prev) => ({ ...prev, [id]: true }));
      try {
        const fetchedOptions = await fetchOptionsForFilter(id);
        setOptions((prev) => ({ ...prev, [id]: fetchedOptions }));
        setSelectedFilters((prev) => ({ ...prev, [id]: [] })); // Initialize selected values for this filter
      } catch (error) {
        setErrorStates((prev) => ({ ...prev, [id]: error.toString() }));
      } finally {
        setLoadingStates((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const handleFilterChange = (id, selectedValues) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: selectedValues }));
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
  };

  const renderFilterComponent = (filterConfig) => {
    const { id, type, description, label } = filterConfig;
    console.log(filterConfig.label);
    const isLoading = loadingStates[id];
    const error = errorStates[id];
    const filterOptions = options[id] || [];
    const selectedValues = selectedFilters[id] || [];

    if (isLoading) return <LoadingMessage message="Loading options..." />;
    if (error) return <ErrorMessage description={error} />;

    return type === 'checkbox' ? (
      <CheckboxFormGroup
        key={id}
        name={id}
        options={filterOptions}
        checkedValues={selectedValues}
        onCheckboxChanged={(value) => handleFilterChange(id, [...selectedValues, value])}
        description={description}
        label={label}    />
    ) : (
      <ChipFormGroup
        key={id}
        options={filterOptions}
        selectedChips={selectedValues}
        onToggle={(value) => handleFilterChange(id, [...selectedValues, value])} 
        description={description}
        label={label}
      />
    );
  };

  const accordionData = filterOptions.map(({ id, icon, label, type, description }) => ({
    id,
    icon,
    headerComponent: (
        <Typography>{label}</Typography>
    ),
    detailsComponent: renderFilterComponent({ id, type, icon, label, description }),
    onChange: handleAccordionChange(id), // Attach the change handler to each accordion section
  }));

  return (
    <form onSubmit={onSubmit}>
      <AccordionContainer accordionData={accordionData} backgroundColor="white" />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button type="submit" variant="contained" color="primary">Apply Filters</Button>
        <Button onClick={handleResetFilters} variant="outlined" color="secondary">Reset</Button>
      </div>
    </form>
  );
};

export default WorkOrdersFilters;

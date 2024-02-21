import React, { useState } from 'react';
import { AccordionContainer } from '../container/AccordionContainer/AccordionContainer';
import { Button, Typography } from '@mui/material';
import { CheckboxFormGroup } from '../form-groups/CheckboxFormGroup/CheckboxFormGroup';
import { ChipFormGroup } from '../form-groups/ChipFormGroup/ChipFormGroup';
import ErrorMessage from '../messages/ErrorMessage/ErrorMessage';
import LoadingMessage from '../messages/LoadingMessage/LoadingMessage';


// for now we load hardcoded filter options but this would be ideally fetched from an endpoint and mapped to the type of filter (including icons for chip filter types)
const fetchOptionsForFilter = async (filterId) => {
  console.log(filterId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filterId === 'error') {
        reject('Failed to fetch options for ' + filterId);
      } else {
        resolve([
          { value: filterId + '-option1', label: 'Option 1', key: filterId },
          { value: filterId + '-option2', label: 'Option 2', key: filterId },
        ]);
      }
    }, 1000);
  });
};

export const WorkOrdersFilters = ({ filterOptions }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [errorStates, setErrorStates] = useState({});
  const [options, setOptions] = useState({});

  const handleAccordionChange = (id) => async (event, isExpanded) => {
    if (isExpanded && !options[id]) {
      setLoadingStates((prev) => ({ ...prev, [id]: true }));
      try {
        const fetchedOptions = await fetchOptionsForFilter(id);
        setOptions((prev) => ({ ...prev, [id]: fetchedOptions }));
        setSelectedFilters((prev) => ({ ...prev, [id]: [] })); 
      } catch (error) {
        setErrorStates((prev) => ({ ...prev, [id]: error.toString() }));
      } finally {
        setLoadingStates((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const handleFilterChange = (id, selectedValues) => {
    console.log(id, selectedValues);
    setSelectedFilters((prev) => ({ ...prev, [id]: selectedValues }));
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFilters);
  }

  const renderFilterComponent = (filterConfig) => {
    const { id, type, description, label } = filterConfig;
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
        onCheckboxChanged={(value) => handleFilterChange(id, selectedValues.includes(value) ? selectedValues.filter(v => v !== value) : [...selectedValues, value])}
        description={description}
        label={label}    />
    ) : (
      <ChipFormGroup
        key={id}
        options={filterOptions}
        selectedChips={selectedValues}
        onToggle={(value) => handleFilterChange(id, selectedValues.includes(value) ? selectedValues.filter(v => v !== value) : [...selectedValues, value])}
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

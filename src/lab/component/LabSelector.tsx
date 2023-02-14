import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useCountry } from '../hook/useCountry';

import './LabSelector.css';

const LabSelector = () => {
  const [country, selectCountry] = useState();
  const { countries, isLoading } = useCountry();

  return (
    <div className="lab-container">
      <div>Laboratory selection</div>
      <Dropdown
        value={country}
        options={countries}
        optionLabel="name"
        placeholder="Select a Country"
        className="country-dropdown"
        onChange={(e) => selectCountry(e.target.value)}
        disabled={isLoading}
      />
      <Dropdown
        options={undefined}
        optionLabel="name"
        placeholder="Select a Laboratory"
        className="lab-dropdown"
        disabled={isLoading}
      />
      {isLoading && (
        <FontAwesomeIcon icon={faSpinner} size="1x" spin className="ml-10" />
      )}
    </div>
  );
};

export { LabSelector };

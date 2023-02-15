import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Country, Lab } from '../../context/optemis';

import './LabSelector.css';

const LabSelector = ({
  countries,
  labs,
  onSelectLab,
  onSelectCountry,
  isLoading,
}: Props) => {
  const [country, selectCountry] = useState<Country>();
  const [lab, selectLab] = useState<Lab>();

  return (
    <div className="lab-container">
      <div>Laboratory selection</div>
      <Dropdown
        value={country}
        options={countries}
        optionLabel="name"
        placeholder="Select a Country"
        className="country-dropdown"
        onChange={(e) => {
          selectCountry(e.target.value);
          onSelectCountry(e.target.value);
          onSelectLab();
        }}
        disabled={isLoading}
      />
      <Dropdown
        value={lab}
        options={labs}
        optionLabel="name"
        placeholder="Select a Laboratory"
        className="lab-dropdown"
        onChange={(e) => {
          selectLab(e.target.value);
          onSelectLab(e.target.value);
        }}
        disabled={isLoading}
      />
      {isLoading && (
        <FontAwesomeIcon icon={faSpinner} size="1x" spin className="ml-10" />
      )}
    </div>
  );
};

type Props = {
  countries: Country[];
  labs: Lab[];
  onSelectLab(lab?: Lab): void;
  onSelectCountry(country: Country): void;
  isLoading: boolean;
};

export { LabSelector };

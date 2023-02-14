import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Country, Lab } from '../../context/optemis';

import { useCountries } from '../hook/useCountries';
import { useLabs } from '../hook/useLabs';

import './LabSelector.css';

const LabSelector = ({ onSelectLab, onChangeAllowDuplicates }: Props) => {
  const [country, selectCountry] = useState<Country>();
  const [lab, selectLab] = useState<Lab>();

  const { countries, isLoading: isLoadingCountries } = useCountries();
  const { labs, isLoading: isLoadingLabs } = useLabs(country?.id);

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
          onChangeAllowDuplicates(e.target.value.allowDuplicates);
          onSelectLab();
        }}
        disabled={isLoadingCountries}
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
        disabled={isLoadingCountries || isLoadingLabs}
      />
      {(isLoadingCountries || isLoadingLabs) && (
        <FontAwesomeIcon icon={faSpinner} size="1x" spin className="ml-10" />
      )}
    </div>
  );
};

type Props = {
  onSelectLab(lab?: Lab): void;
  onChangeAllowDuplicates(allow: boolean): void;
};

export { LabSelector };

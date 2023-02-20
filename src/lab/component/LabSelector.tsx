import { Dropdown } from 'primereact/dropdown';
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
  selectedCountry,
  selectedLab,
}: Props) => {
  return (
    <div className="lab-container">
      <div>Laboratory selection</div>
      <Dropdown
        value={selectedCountry?.id}
        options={countries}
        optionLabel="name"
        optionValue="id"
        placeholder="Select a Country"
        className="country-dropdown"
        onChange={(e) => {
          onSelectCountry(e.target.value);
          onSelectLab(undefined);
        }}
        disabled={isLoading}
      />
      <Dropdown
        value={selectedLab?.id}
        options={labs}
        optionLabel="name"
        optionValue="id"
        placeholder="Select a Laboratory"
        className="lab-dropdown"
        onChange={(e) => {
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
  onSelectLab(id?: string): void;
  onSelectCountry(id: string): void;
  isLoading: boolean;
  selectedCountry?: Country;
  selectedLab?: Lab;
};

export { LabSelector };

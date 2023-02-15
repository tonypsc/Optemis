import { TabView } from 'primereact/tabview';
import { TabPanel } from 'primereact/tabview';

import { LabSelector } from '../../lab';
import { Head } from '../../shared';
import { Lab, Country } from '../../context/optemis';
import { LoadingView, ErrorView } from '../../shared';

import { useHomeReducer } from './useHomeReducer';
import { useCountries } from '../hook/useCountries';
import { useLabs } from '../hook/useLabs';

import './Home.css';

const Home = () => {
  const { selectedLab, selectedCountry, setCurrentLab, setCurrentCountry } =
    useHomeReducer();
  const {
    countries,
    isLoading: isLoadingCountries,
    isError,
    error,
  } = useCountries();
  const { labs, isLoading: isLoadingLabs } = useLabs(selectedCountry?.id);

  const handleSelectLab = (lab?: Lab) => {
    setCurrentLab(lab);
  };

  const handleSelectCountry = (country: Country) => {
    setCurrentCountry(country);
  };

  if (isLoadingCountries) return <LoadingView />;
  if (isError) return <ErrorView error={error!} />;

  return (
    <div className="container">
      <Head />
      <LabSelector
        countries={countries!}
        labs={labs!}
        onSelectLab={handleSelectLab}
        onSelectCountry={handleSelectCountry}
        isLoading={isLoadingCountries || isLoadingLabs}
      />
      {selectedLab ? (
        <TabView>
          <TabPanel header="Groups">
            <p className="m-0">{selectedLab.name}</p>
          </TabPanel>
          <TabPanel header="Stains">
            <p className="m-0">
              {selectedCountry?.allowDuplicates ? 'si' : 'no'}
            </p>
          </TabPanel>
        </TabView>
      ) : (
        <div className="p-10">Please select a lab to continue</div>
      )}
    </div>
  );
};

export { Home };

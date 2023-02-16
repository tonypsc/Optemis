import { TabView } from 'primereact/tabview';
import { TabPanel } from 'primereact/tabview';

import { LabSelector } from '../../lab';
import { Head } from '../../shared';
import { Lab, Country } from '../../context/optemis';
import { LoadingView, ErrorView } from '../../shared';
import { StainContainer } from '../../stain';
import { StainGroupContainer } from '../../staingroup';

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
            <StainGroupContainer labId={selectedLab.id!} />
          </TabPanel>
          <TabPanel header="Stains">
            <StainContainer labId={selectedLab.id!} />
          </TabPanel>
        </TabView>
      ) : (
        <div className="p-10 text-muted">Please select a lab to continue</div>
      )}
    </div>
  );
};

export { Home };

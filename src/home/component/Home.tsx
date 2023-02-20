import { TabMenu } from 'primereact/tabmenu';

import { LabSelector } from '../../lab';
import { Head } from '../../shared';
import { Lab, Country } from '../../context/optemis';
import { LoadingView, ErrorView } from '../../shared';
import { StainContainer } from '../../stain';
import { StainGroupContainer } from '../../staingroup';

import { useHomeReducer } from '../hook/useHomeReducer';
import { useCountries } from '../hook/useCountries';
import { useLabs } from '../hook/useLabs';
import { CountryContextProvider } from '../context/countryContextProvider';

import './Home.css';

const Home = () => {
  const {
    selectedLab,
    selectedCountry,
    currentView,
    setCurrentLab,
    setCurrentCountry,
    setCurrentView,
  } = useHomeReducer();
  const {
    countries,
    isLoading: isLoadingCountries,
    isError,
    error,
    refetch: reloadCountries,
  } = useCountries();
  const { labs, isLoading: isLoadingLabs } = useLabs(selectedCountry?.id);

  const handleSelectLab = (id?: string) => {
    setCurrentLab(labs?.find((lab) => lab.id === id));
  };

  const handleSelectCountry = (id: string) => {
    setCurrentCountry(countries?.find((country) => country.id === id));
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
        selectedCountry={selectedCountry}
        selectedLab={selectedLab}
      />
      <CountryContextProvider
        country={selectedCountry!}
        refreshData={reloadCountries}
      >
        <div className="container-main-area">
          {selectedLab ? (
            <>
              <TabMenu
                model={[{ label: 'Groups' }, { label: 'Stains' }]}
                activeIndex={currentView}
                onTabChange={(e) => setCurrentView(e.index)}
              />
              <div className="pt-20 h-100">
                {currentView === 0 ? (
                  <StainGroupContainer labId={selectedLab.id!} />
                ) : (
                  <StainContainer labId={selectedLab.id!} />
                )}
              </div>
            </>
          ) : (
            <div className="p-10 text-muted">
              Please select a lab to continue
            </div>
          )}
        </div>
      </CountryContextProvider>
    </div>
  );
};

export { Home };

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
          <div className="p-10 text-muted">Please select a lab to continue</div>
        )}
      </div>
    </div>
  );
};

export { Home };

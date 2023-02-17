import { createContext, PropsWithChildren, useContext } from 'react';
import { Country } from '../../context/optemis';

const CountryContext = createContext<CountryContextState | undefined>(
  undefined
);
CountryContext.displayName = 'CountryContext';

const CountryContextProvider = ({
  refreshData,
  country,
  children,
}: PropsWithChildren<Props>) => {
  if (!country?.id) {
    throw new Error('Invalid country id');
  }

  return (
    <CountryContext.Provider
      value={{
        countryId: country.id,
        country,
        refreshData,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

const useCountryContext = () => {
  const context = useContext(CountryContext);

  if (context === undefined) {
    throw new Error('useLabContext must be used within a LabContextProvider');
  }

  return context;
};

type Props = {
  country: Country;
  refreshData(): void;
};

type CountryContextState = Props & {
  countryId: string;
};

export { CountryContextProvider, useCountryContext };

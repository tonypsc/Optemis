import { useCountry } from '../hook/useCountry';

const LabSelector = () => {
  const { countries, isLoading } = useCountry();

  console.log(countries);

  return <div>country {countries?.length}</div>;
};

export { LabSelector };

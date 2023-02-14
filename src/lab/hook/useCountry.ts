import { useQuery } from 'react-query';
import { read } from '../../api/client';
import { Country } from '../../context/optemis';

const useCountry = () => {
  const queryKey = ['country'];

  const { data, isLoading, isError, error, refetch } = useQuery(
    queryKey,
    async () => {
      const countries = await read('country');
      return countries as Country[];
    },
    { onError: (error: Error) => {} }
  );

  return { countries: data, isLoading, isError, error, refetch };
};

export { useCountry };

import { useQuery } from 'react-query';
import { read } from '../../api/client';
import { Lab } from '../../context/optemis';

const useLabs = (countryId?: string) => {
  const queryKey = ['laboratory', countryId];

  const { data, isLoading, isError, error, refetch } = useQuery(
    queryKey,
    async () => {
      const labs = await read(`lab?countryId=${countryId}`);
      return labs as Lab[];
    },
    { onError: (error: Error) => {} }
  );

  return { labs: data, isLoading, isError, error, refetch };
};

export { useLabs };

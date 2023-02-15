import { useQuery } from 'react-query';
import { read } from '../../api/client';
import { Stain } from '../../context/optemis';

const useStains = (labId: string) => {
  const queryKey = ['stains', labId];

  const { data, isLoading, isError, error, refetch } = useQuery(
    queryKey,
    async () => {
      const stains = await read(`stain?labId=${labId}`);
      return stains as Stain[];
    },
    { onError: (error: Error) => {} }
  );

  return { stains: data, isLoading, isError, error, refetch };
};

export { useStains };

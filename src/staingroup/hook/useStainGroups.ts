import { useQuery } from 'react-query';
import { read } from '../../api/client';
import { StainGroup } from '../../context/optemis';

const useStainGroups = (labId: string) => {
  const queryKey = ['staingroups', labId];

  const { data, isLoading, isError, error, refetch } = useQuery(
    queryKey,
    async () => {
      const staingroups = await read(
        `staingroup?labId=${labId}&_sort=createdAt&_order=desc`
      );
      return staingroups as StainGroup[];
    },
    { onError: (error: Error) => {} }
  );

  return {
    staingroups: data,
    isLoading,
    isError,
    error,
    reloadStainGroups: refetch,
  };
};

export { useStainGroups };

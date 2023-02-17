import { useMutation } from 'react-query';

import { create } from '../../api/client';
import { StainGroup } from '../../context/optemis';
import {
  displayNotificationError,
  displayNotificationSuccess,
} from '../../shared';

const useCreateStainGroup = (
  onSettled: () => void,
  reloadStainGroupData?: () => void
) => {
  const createFn = async (stainGroup: StainGroup) => {
    stainGroup.createdAt = new Date().getTime();
    create<StainGroup>('staingroup', stainGroup);
  };

  const { mutate: createStainGroup, isLoading } = useMutation(createFn, {
    onError: (error: Error) => {
      displayNotificationError(error);
    },
    onSuccess: () => {
      displayNotificationSuccess('Stain group created successfully!');
      reloadStainGroupData?.();
    },
    onSettled,
  });

  return { createStainGroup, isLoading };
};

export { useCreateStainGroup };

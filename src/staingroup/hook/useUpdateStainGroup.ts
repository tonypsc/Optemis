import { useMutation } from 'react-query';

import { update } from '../../api/client';
import { StainGroup } from '../../context/optemis';
import {
  displayNotificationError,
  displayNotificationSuccess,
} from '../../shared';

const useUpdateStainGroup = (
  onSettled: () => void,
  reloadStainGroupData?: () => void
) => {
  const createFn = async (stainGroup: StainGroup) => {
    stainGroup.createdAt = new Date().getTime();
    update<StainGroup>('staingroup', stainGroup);
  };

  const { mutate: updateStainGroup, isLoading } = useMutation(createFn, {
    onError: (error: Error) => {
      displayNotificationError(error);
    },
    onSuccess: () => {
      displayNotificationSuccess('Stain group updated successfully!');
      reloadStainGroupData?.();
    },
    onSettled,
  });

  return { updateStainGroup, isLoading };
};

export { useUpdateStainGroup };

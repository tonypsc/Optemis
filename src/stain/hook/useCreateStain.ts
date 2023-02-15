import { useMutation } from 'react-query';

import { create } from '../../api/client';
import { Stain } from '../../context/optemis';
import {
  displayNotificationError,
  displayNotificationSuccess,
} from '../../shared';

const useCreateStain = (hideForm: () => void, reloadStainData?: () => void) => {
  const createFn = async (stain: Stain) => {
    stain.createdAt = new Date().getTime();
    create<Stain>('stain', stain);
  };

  const { mutate: createStain, isLoading } = useMutation(createFn, {
    onError: (error: Error, context) => {
      displayNotificationError(error);
    },
    onSuccess: () => {
      displayNotificationSuccess('Stain created successfully!');
      reloadStainData?.();
    },
    onSettled: hideForm,
  });

  return { createStain, isLoading };
};

export { useCreateStain };

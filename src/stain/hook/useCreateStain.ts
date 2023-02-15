import { useMutation } from 'react-query';

import { create } from '../../api/client';
import { Stain } from '../../context/optemis';
import { displayNotificationError } from '../../shared';

const useCreateStain = (hideForm: () => void, reloadStainData?: () => void) => {
  const createFn = async (stain: Stain) => create<Stain>('stain', stain);

  const { mutate: createStain, isLoading } = useMutation(createFn, {
    onError: (error: Error, context) => {
      displayNotificationError(error);
    },
    onSuccess: (patient) => {
      //displayNotificationSuccess('Stain created successfully!');
      reloadStainData?.();
    },
    onSettled: hideForm,
  });

  return { createStain, isLoading };
};

export { useCreateStain };

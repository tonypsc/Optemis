import { Form, Formik, FormikProps } from 'formik';

import { FormButtonBar } from '../../shared';
import { Stain } from '../../context/optemis';

import { StainForm } from './StainForm';

const StainFormContainer = ({ onSubmit, onCancel, initialValues }: Props) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => {
        return (
          <Form>
            <StainForm />
            <FormButtonBar onCancel={onCancel} loading={isSubmitting} />
          </Form>
        );
      }}
    </Formik>
  );
};

type Props = {
  onSubmit(stain: Stain): void;
  onCancel(): void;
  initialValues: Stain;
};

export { StainFormContainer };

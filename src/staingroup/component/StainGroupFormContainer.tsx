import { Form, Formik } from 'formik';

import { FormButtonBar } from '../../shared';
import { StainGroup } from '../../context/optemis';

import { StainGroupForm } from './StainGroupForm';

const StainGroupFormContainer = ({
  onSubmit,
  onCancel,
  initialValues,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => {
        return (
          <Form className="pb-30">
            <StainGroupForm />
            <FormButtonBar onCancel={onCancel} loading={isSubmitting} />
          </Form>
        );
      }}
    </Formik>
  );
};

type Props = {
  onSubmit(stainGroup: StainGroup): void;
  onCancel(): void;
  initialValues: StainGroup;
};

export { StainGroupFormContainer };

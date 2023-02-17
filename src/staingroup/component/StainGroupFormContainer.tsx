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
      {({ isSubmitting, values }) => {
        return (
          <Form className="pb-30">
            <StainGroupForm labId={values.labId} />
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

import { InputField } from '../../shared';

const StainForm = () => {
  return (
    <fieldset className="custom-fieldset">
      <InputField
        field="description"
        label="Description"
        validation={(value) => (!value ? 'Description is required' : undefined)}
      />
    </fieldset>
  );
};

export { StainForm };

import { InputField, SwitchField } from '../../shared';

import { StainField } from './StainField';

const StainGroupForm = ({ labId }: Props) => {
  return (
    <fieldset className="custom-fieldset pl-3">
      <InputField
        field="description"
        label="Description"
        validation={(value) => (!value ? 'Description is required' : undefined)}
      />
      <SwitchField
        field="inactive"
        label="Inactive"
        trueValue={true}
        falseValue={false}
      />

      <StainField labId={labId} />
    </fieldset>
  );
};

type Props = {
  labId: string;
};

export { StainGroupForm };

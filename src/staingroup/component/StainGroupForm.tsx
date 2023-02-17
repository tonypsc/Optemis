import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { InputField, SwitchField } from '../../shared';

import { StainField } from './StainField';

const StainGroupForm = () => {
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

      <StainField />
    </fieldset>
  );
};

export { StainGroupForm };

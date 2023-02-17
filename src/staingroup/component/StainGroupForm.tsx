import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { InputField, SwitchField } from '../../shared';

import './StainGroupForm.css';

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

      <div className="form-stain-container-header">
        <span>Stain list</span>
        <Button
          type="button"
          label="Add stain"
          className="p-button-text p-button-sm"
          icon={<FontAwesomeIcon icon={faPlus} className="pr-3" />}
        />
        {}
      </div>
    </fieldset>
  );
};

export { StainGroupForm };

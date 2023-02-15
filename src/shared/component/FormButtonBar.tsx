import { Button } from 'primereact/button';

import './FormButtonBar.css';

const FormButtonBar = ({ onCancel, loading }: Props) => (
  <div className="form-button-bar-container">
    <Button
      label="Cancel"
      type="button"
      onClick={onCancel}
      className="p-button-sm p-button-secondary p-button-outlined form-button-bar-button"
    />
    <Button
      label="Save"
      type="submit"
      className="p-button-sm p-button-primary form-button-bar-button"
      loading={loading}
    />
  </div>
);

type Props = {
  onCancel(): void;
  loading: boolean;
};

export { FormButtonBar };

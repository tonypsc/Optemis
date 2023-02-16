import { Field, FieldProps, ErrorMessage } from 'formik';
import { classNames } from 'primereact/utils';
import { InputSwitch } from 'primereact/inputswitch';

const SwitchField = ({ field, label, trueValue, falseValue }: Props) => (
  <Field name={field}>
    {({
      field: { name, value, onChange },
      meta: { touched, error },
    }: FieldProps) => (
      <div className="field">
        {label && (
          <label htmlFor={name} className="text-sm mb-2">
            {label}
          </label>
        )}
        <InputSwitch
          id={name}
          name={name}
          onChange={onChange}
          checked={value}
          className={classNames({ 'p-invalid': touched && error })}
          trueValue={trueValue}
          falseValue={falseValue}
        />
        <ErrorMessage name={field}>
          {(msg) => <small>{msg}</small>}
        </ErrorMessage>
      </div>
    )}
  </Field>
);

type Props = {
  field: string;
  label?: string;
  className?: string;
  rows?: number;
  trueValue?: string | number | object | boolean;
  falseValue?: string | number | object | boolean;
};

export { SwitchField };

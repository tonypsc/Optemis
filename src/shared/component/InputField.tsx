import { Field, FieldProps, ErrorMessage } from 'formik';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';

const InputField = ({
  field,
  label,
  className,
  inputClassName,
  validation,
  disabled,
}: Props) => (
  <Field name={field} validate={validation}>
    {({
      field: { name, value, onChange },
      meta: { touched, error },
    }: FieldProps) => (
      <div className={classNames('field', className)}>
        {label && (
          <label htmlFor={name} className="mb-5">
            {label}
          </label>
        )}

        <InputText
          type={'text'}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
          className={classNames(
            'p-inputtext-sm',
            { 'p-invalid': touched && error },
            inputClassName
          )}
        />

        <ErrorMessage name={field}>
          {(msg) => <small className="p-error text-sm pt-5 pl-3">{msg}</small>}
        </ErrorMessage>
      </div>
    )}
  </Field>
);

type Props = {
  field: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  validation?(value: string): void;
  disabled?: boolean;
};

export { InputField };

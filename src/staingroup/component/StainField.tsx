import { useState } from 'react';
import { FieldArray, FieldArrayRenderProps } from 'formik';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ConfirmDialog } from 'primereact/confirmdialog';

import { StainListItem } from '../../stain';
import { Stain } from '../../context/optemis';

import './StainField.css';

const StainField = () => {
  const [confirmDeleteItem, setConfirmDeleteItem] = useState(-1);

  return (
    <FieldArray name="stains">
      {({
        push,
        remove,
        name,
        form: { values, setFieldValue, validateForm, setFieldTouched },
      }: FieldArrayRenderProps) => {
        console.log(values.stains);
        return (
          <>
            <div className="stainfield-header">
              <span>Stain list</span>
              <Button
                type="button"
                label="Add stain"
                className="p-button-text p-button-sm"
                icon={<FontAwesomeIcon icon={faPlus} className="pr-3" />}
              />
            </div>
            <div className="stainfield-list">
              {values.stains && values.stains.length > 0 ? (
                values.stains.map((stain: Stain, index: number) => (
                  <StainListItem
                    stain={stain}
                    external
                    allowDelete
                    onDelete={() => setConfirmDeleteItem(index)}
                  />
                ))
              ) : (
                <span className="text-sm text-muted">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-3" />
                  No stains found
                </span>
              )}
            </div>
            <ConfirmDialog
              visible={confirmDeleteItem !== -1}
              onHide={() => setConfirmDeleteItem(-1)}
              message="Are you sure you want to delete the stain? "
              header="Confirmation"
              icon="pi pi-exclamation-triangle"
              accept={() => remove(confirmDeleteItem)}
              reject={() => setConfirmDeleteItem(-1)}
            />
          </>
        );
      }}
    </FieldArray>
  );
};

export { StainField };

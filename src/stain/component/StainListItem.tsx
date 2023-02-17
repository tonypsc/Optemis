import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faTrash } from '@fortawesome/free-solid-svg-icons';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';

import { Stain } from '../../context/optemis';

import './StainListItem.css';

const StainListItem = ({ stain, external, allowDelete, onDelete }: Props) => (
  <div
    className={classNames('stain-item-container', {
      'text-sm': external,
      'stain-item-sm': allowDelete,
    })}
  >
    <div>
      <FontAwesomeIcon icon={faFlask} className="mr-5" />
      <span>{stain.description}</span>
    </div>
    {allowDelete && onDelete && (
      <div>
        <Button
          type="button"
          icon={<FontAwesomeIcon icon={faTrash} className="mr-3" />}
          className="p-button-text p-button-icon p-button-sm p-button-rounded ring-0"
          onClick={() => onDelete(stain)}
          title="Delete stain"
        />
      </div>
    )}
  </div>
);

type Props = {
  stain: Stain;
  external?: boolean;
  allowDelete?: boolean;
  onDelete?(stain: Stain): void;
};

export { StainListItem };

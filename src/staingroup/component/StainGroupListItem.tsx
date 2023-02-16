import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

import { StainGroup } from '../../context/optemis';

import './StainGroupListItem.css';
import { classNames } from 'primereact/utils';

const StainGroupListItem = ({ stainGroup, onSelect, selected }: Props) => (
  <div
    className={classNames('staingroup-item-container', {
      'text-muted': stainGroup.inactive,
      'staingroup-item-selected': selected,
    })}
    onClick={() => onSelect(stainGroup)}
  >
    <FontAwesomeIcon icon={faTags} className="mr-5" />
    <span>{stainGroup.description}</span>
    <span className="ml-5">[{stainGroup.stains.length}]</span>
  </div>
);

type Props = {
  stainGroup: StainGroup;
  onSelect(stainGroup: StainGroup): void;
  selected: boolean;
};

export { StainGroupListItem };

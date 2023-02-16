import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

import { StainGroup } from '../../context/optemis';

import './StainGroupListItem.css';
import { classNames } from 'primereact/utils';

const StainGroupListItem = ({ stainGroup }: Props) => (
  <div
    className={classNames('staingroup-item-container', {
      'text-muted': stainGroup.inactive,
    })}
  >
    <FontAwesomeIcon icon={faTags} className="mr-5" />
    <span>{stainGroup.description}</span>
    <span className="ml-5">[{stainGroup.stains.length}]</span>
  </div>
);

type Props = {
  stainGroup: StainGroup;
};

export { StainGroupListItem };

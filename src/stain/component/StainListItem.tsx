import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

import { Stain } from '../../context/optemis';

import './StainListItem.css';

const StainListItem = ({ stain }: Props) => (
  <div className="stain-item-container">
    <FontAwesomeIcon icon={faFlask} className="mr-5" />
    <span>{stain.description}</span>
  </div>
);

type Props = {
  stain: Stain;
};

export { StainListItem };

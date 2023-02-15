import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NoRecord = ({ resource }: Props) => (
  <div className="content-center text-muted">
    <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="mb-5" />
    </div>
    <div>{`No ${resource} found.`}</div>
  </div>
);

type Props = {
  resource: string;
};

export { NoRecord };

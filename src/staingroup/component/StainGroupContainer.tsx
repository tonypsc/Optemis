import { Button } from 'primereact/button';
import { useWindowSize } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from 'primereact/utils';

import { ErrorMessage, ListSkeleton, NoRecord } from '../../shared';

import { useStainGroups } from '../hook/useStainGroups';
import { StainGroupListItem } from './StainGroupListItem';
import { useStainGroupReducer } from './useStainGroupReducer';

import './StainGroupContainer.css';

const StainGroupContainer = ({ labId }: Props) => {
  const { staingroups, isLoading, isError, error } = useStainGroups(labId);
  const { selectedStainGroup, showForm, edit, add, setCurrentGroup } =
    useStainGroupReducer();

  const { width } = useWindowSize();

  if (isLoading) return <ListSkeleton />;
  if (isError) return <ErrorMessage message={error?.message!} />;

  return (
    <div>
      <Button
        label="New stain"
        className="mb-10"
        onClick={() => {}}
        disabled={isLoading}
      />
      <div className="staingroup-container">
        {(width > 600 || !showForm) && (
          <>
            {!staingroups || staingroups.length === 0 ? (
              <NoRecord resource="stain groups" />
            ) : (
              <div className="staingroup-list">
                {staingroups?.map((group) => (
                  <StainGroupListItem key={group.id} stainGroup={group} />
                ))}
              </div>
            )}
          </>
        )}
        <div
          className={classNames('right-panel', {
            'border-none w-100 p-0': width < 600 && showForm,
            'display-none': width < 600 && !showForm,
          })}
        >
          right panel
        </div>
      </div>
    </div>
  );
};

type Props = {
  labId: string;
};

export { StainGroupContainer };

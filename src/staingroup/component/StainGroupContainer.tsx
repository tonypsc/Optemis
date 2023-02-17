import { Button } from 'primereact/button';
import { useWindowSize } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from 'primereact/utils';
import { faTimes, faPencil } from '@fortawesome/free-solid-svg-icons';

import { ErrorMessage, ListSkeleton, NoRecord } from '../../shared';
import { StainGroup } from '../../context/optemis';

import {
  useStainGroups,
  useStainGroupReducer,
  useCreateStainGroup,
  useUpdateStainGroup,
} from '../hook';
import { StainGroupListItem } from './StainGroupListItem';
import { StainGroupDetail } from './StainGroupDetail';
import { StainGroupFormContainer } from './StainGroupFormContainer';

import './StainGroupContainer.css';

const StainGroupContainer = ({ labId }: Props) => {
  const { staingroups, isLoading, isError, error, reloadStainGroups } =
    useStainGroups(labId);
  const {
    selectedStainGroup,
    showPanel,
    edit,
    add,
    reset,
    isNew,
    showForm,
    panelTitle,
    setCurrentGroup,
  } = useStainGroupReducer();

  const { createStainGroup } = useCreateStainGroup(reset, reloadStainGroups);

  const { updateStainGroup } = useUpdateStainGroup(reset, reloadStainGroups);

  const { width } = useWindowSize();

  if (isLoading) return <ListSkeleton />;
  if (isError) return <ErrorMessage message={error?.message!} />;

  const defaultGroupValues = {
    description: '',
    stains: [],
    inactive: false,
    labId,
  };

  const handleSubmit = (stainGroup: StainGroup) => {
    if (isNew) {
      createStainGroup(stainGroup);
    } else {
      updateStainGroup(stainGroup);
    }
  };

  return (
    <>
      <Button
        label="New stain group"
        className="mb-10"
        onClick={add}
        disabled={isLoading || isNew}
      />
      <div className="staingroup-container">
        {(width > 600 || !showPanel) && (
          <>
            {!staingroups || staingroups.length === 0 ? (
              <NoRecord resource="stain groups" />
            ) : (
              <div className="staingroup-list">
                {staingroups?.map((group) => (
                  <StainGroupListItem
                    key={group.id}
                    stainGroup={group}
                    onSelect={setCurrentGroup}
                    selected={group.id === selectedStainGroup?.id}
                  />
                ))}
              </div>
            )}
          </>
        )}
        {showPanel && (selectedStainGroup || isNew) && (
          <div
            className={classNames('right-panel', {
              'border-none w-100 p-0': width < 600 && showPanel,
              'display-none': width < 600 && !showPanel,
            })}
          >
            <div className="right-panel-title mb-15">
              <span>{panelTitle}</span>
              <div>
                {!showForm && (
                  <Button
                    className="p-button-text p-button-sm"
                    onClick={edit}
                    icon={
                      <FontAwesomeIcon icon={faPencil} title="Edit group" />
                    }
                  />
                )}
                <Button
                  className="p-button-text p-button-sm"
                  onClick={reset}
                  icon={<FontAwesomeIcon icon={faTimes} title="Close panel" />}
                />
              </div>
            </div>
            <div className="right-panel-container">
              {showForm ? (
                <StainGroupFormContainer
                  initialValues={selectedStainGroup ?? defaultGroupValues}
                  onSubmit={handleSubmit}
                  onCancel={reset}
                />
              ) : (
                <StainGroupDetail stainGroup={selectedStainGroup!} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

type Props = {
  labId: string;
};

export { StainGroupContainer };

import { Button } from 'primereact/button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from 'react-use';

import { Stain } from '../../context/optemis';
import { ErrorMessage, ListSkeleton, NoRecord } from '../../shared';

import { useStains } from '../hook/useStains';
import { useCreateStain } from '../hook/useCreateStain';
import { StainListItem } from './StainListItem';
import { StainFormContainer } from './StainFormContainer';

import './StainContainer.css';
import { classNames } from 'primereact/utils';

const StainContainer = ({ labId }: Props) => {
  const hideForm = () => setShowForm(false);
  const { stains, isLoading, isError, error, refetch } = useStains(labId);
  const { createStain } = useCreateStain(hideForm, refetch);
  const [showForm, setShowForm] = useState(false);
  const { width } = useWindowSize();

  const handleSubmit = (stain: Stain) => {
    createStain(stain);
  };

  if (isLoading) return <ListSkeleton />;
  if (isError) return <ErrorMessage message={error?.message!} />;

  return (
    <>
      <Button
        label="New stain"
        className="mb-10"
        onClick={() => setShowForm(true)}
        disabled={showForm || isLoading}
      />
      <div className="stain-container">
        {(width > 600 || !showForm) && (
          <>
            {!stains || stains.length === 0 ? (
              <NoRecord resource="stains" />
            ) : (
              <div className="stain-list">
                {stains?.map((stain) => (
                  <StainListItem key={stain.id!} stain={stain} />
                ))}
              </div>
            )}
          </>
        )}
        {showForm && (
          <div
            className={classNames('right-panel', {
              'border-none w-100 p-0': width < 600,
            })}
          >
            <div className="right-panel-title">
              <span>Stain details</span>
              <Button
                className="p-button-text p-button-sm"
                onClick={hideForm}
                title="Close panel"
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
            <div className="right-panel-container">
              <StainFormContainer
                onSubmit={handleSubmit}
                onCancel={hideForm}
                initialValues={{ description: '', labId }}
              />
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

export { StainContainer };

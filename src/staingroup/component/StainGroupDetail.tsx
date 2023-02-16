import { classNames } from 'primereact/utils';

import { StainGroup } from '../../context/optemis';
import { StainListItem } from '../../stain/';

import './StainGroupDetail.css';

const StainGroupDetail = ({ stainGroup }: Props) => (
  <div className="w-100">
    <div className="detail-field">
      <label>Description</label>
      <div className="text-bold text-sm">{stainGroup.description}</div>
    </div>
    <div className="detail-field">
      <label>Status</label>
      <div
        className={classNames('detail-chip', {
          'detail-inactive-chip': stainGroup.inactive,
          'detail-active-chip': !stainGroup.inactive,
        })}
      >
        {stainGroup.inactive ? 'Inactive' : 'Active'}
      </div>
    </div>
    <div className="detail-field">
      <label>Stains</label>
      {stainGroup.stains.length > 0 ? (
        stainGroup.stains.map((stain) => (
          <StainListItem key={stain.id} stain={stain} />
        ))
      ) : (
        <>No stains includes in this group</>
      )}
    </div>
  </div>
);

type Props = {
  stainGroup: StainGroup;
};

export { StainGroupDetail };

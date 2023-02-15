import { Skeleton } from 'primereact/skeleton';

const ListSkeleton = () => (
  <div>
    <div className="flex mb-3">
      <Skeleton width="10rem" height="3rem" className="mb-10"></Skeleton>
      <Skeleton width="100%" height="2rem" className="mb-10"></Skeleton>
      <Skeleton width="100%" height="2rem" className="mb-10"></Skeleton>
      <Skeleton width="100%" height="2rem" className="mb-10"></Skeleton>
      <Skeleton width="100%" height="2rem" className="mb-10"></Skeleton>
      <Skeleton width="100%" height="2rem" className="mb-10"></Skeleton>
    </div>
  </div>
);

export { ListSkeleton };

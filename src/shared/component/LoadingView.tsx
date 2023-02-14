import { ProgressSpinner } from 'primereact/progressspinner';

const LoadingView = () => (
  <div className="flex items-center justify-center w-full h-full">
    <ProgressSpinner animationDuration="1s" className="h-24 w-24" />
  </div>
);

export { LoadingView };

import { ProgressSpinner } from 'primereact/progressspinner';

import './LoadingView.css';

const LoadingView = () => (
  <div className="loading-center">
    <ProgressSpinner animationDuration="1s" />
  </div>
);

export { LoadingView };

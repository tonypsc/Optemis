import { LabSelector } from '../../lab';
import { Head } from '../../shared';

import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <Head />
      <LabSelector />
    </div>
  );
};

export { Home };

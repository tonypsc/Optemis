import { TabView } from 'primereact/tabview';
import { TabPanel } from 'primereact/tabview';

import { LabSelector } from '../../lab';
import { Head } from '../../shared';
import { Lab } from '../../context/optemis';

import { useHomeReducer } from './useHomeReducer';

import './Home.css';

const Home = () => {
  const { selectedLab, allowDuplicates, setCurrentLab, setAllowDuplicates } =
    useHomeReducer();

  console.log(selectedLab);

  const handleSelectLab = (lab?: Lab) => {
    setCurrentLab(lab);
  };

  const handleChangeAllowDuplicates = (allow: boolean) => {
    setAllowDuplicates(allow);
  };

  return (
    <div className="container">
      <Head />
      <LabSelector
        onSelectLab={handleSelectLab}
        onChangeAllowDuplicates={handleChangeAllowDuplicates}
      />
      {selectedLab ? (
        <TabView>
          <TabPanel header="Groups">
            <p className="m-0">{selectedLab.name}</p>
          </TabPanel>
          <TabPanel header="Stains">
            <p className="m-0">{allowDuplicates ? 'si' : 'no'}</p>
          </TabPanel>
        </TabView>
      ) : (
        <div className="p-10">Please select a lab to continue</div>
      )}
    </div>
  );
};

export { Home };

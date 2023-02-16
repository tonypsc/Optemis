import { useReducer } from 'react';
import { Lab, Country } from '../../context/optemis';

const initialState: HomeState = {
  currentView: 0,
};

const reducer = (
  state: HomeState,
  {
    type,
    payload,
  }: {
    type: 'setCurrentLab' | 'setCurrentCountry' | 'setCurrentView';
    payload?: Lab | Country | number;
  }
) => {
  switch (type) {
    case 'setCurrentLab':
      return { ...state, selectedLab: payload as Lab };
    case 'setCurrentCountry':
      return { ...state, selectedCountry: payload as Country };
    case 'setCurrentView':
      return { ...state, currentView: payload as number };
    default:
      return state;
  }
};

const useHomeReducer = () => {
  const [{ selectedLab, selectedCountry, currentView }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setCurrentLab = (lab?: Lab) =>
    dispatch({ type: 'setCurrentLab', payload: lab });

  const setCurrentCountry = (country?: Country) =>
    dispatch({ type: 'setCurrentCountry', payload: country });

  const setCurrentView = (view: number) =>
    dispatch({ type: 'setCurrentView', payload: view });

  return {
    selectedLab,
    selectedCountry,
    currentView,
    setCurrentLab,
    setCurrentCountry,
    setCurrentView,
  };
};

type HomeState = {
  currentView: number;
  selectedLab?: Lab;
  selectedCountry?: Country;
};

export { useHomeReducer };

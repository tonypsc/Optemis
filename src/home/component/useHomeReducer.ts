import { useReducer } from 'react';
import { Lab, Country } from '../../context/optemis';

const initialState: HomeState = {};

const reducer = (
  state: HomeState,
  {
    type,
    payload,
  }: {
    type: 'setCurrentLab' | 'setCurrentCountry';
    payload: Lab | Country | undefined;
  }
) => {
  switch (type) {
    case 'setCurrentLab':
      return { ...state, selectedLab: payload as Lab };
    case 'setCurrentCountry':
      return { ...state, selectedCountry: payload as Country };
    default:
      return state;
  }
};

const useHomeReducer = () => {
  const [{ selectedLab, selectedCountry }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setCurrentLab = (lab?: Lab) =>
    dispatch({ type: 'setCurrentLab', payload: lab });

  const setCurrentCountry = (country?: Country) =>
    dispatch({ type: 'setCurrentCountry', payload: country });

  return { selectedLab, selectedCountry, setCurrentLab, setCurrentCountry };
};

type HomeState = {
  selectedLab?: Lab;
  selectedCountry?: Country;
};

export { useHomeReducer };

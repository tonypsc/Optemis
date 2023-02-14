import { useReducer } from 'react';
import { Lab } from '../../context/optemis';

const initialState: HomeState = {};

const reducer = (
  state: HomeState,
  {
    type,
    payload,
  }: {
    type: 'setCurrentLab' | 'setAllowDuplicates';
    payload: Lab | boolean | undefined;
  }
) => {
  switch (type) {
    case 'setCurrentLab':
      return { ...state, selectedLab: payload as Lab };
    case 'setAllowDuplicates':
      return { ...state, allowDuplicates: payload as boolean };
    default:
      return state;
  }
};

const useHomeReducer = () => {
  const [{ selectedLab, allowDuplicates }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setCurrentLab = (lab?: Lab) =>
    dispatch({ type: 'setCurrentLab', payload: lab });

  const setAllowDuplicates = (allowDuplicates: boolean) =>
    dispatch({ type: 'setAllowDuplicates', payload: allowDuplicates });

  return { selectedLab, allowDuplicates, setCurrentLab, setAllowDuplicates };
};

type HomeState = {
  selectedLab?: Lab;
  allowDuplicates?: boolean;
};

export { useHomeReducer };

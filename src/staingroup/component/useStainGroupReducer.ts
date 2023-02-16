import { useReducer } from 'react';
import { StainGroup } from '../../context/optemis';

const initialState: StainGroupState = {
  showForm: false,
  isNew: false,
};

const reducer = (
  state: StainGroupState,
  {
    type,
    payload,
  }: {
    type: 'edit' | 'add' | 'reset' | 'selectGroup';
    payload?: StainGroup | boolean;
  }
) => {
  switch (type) {
    case 'edit':
      return { ...state, showForm: true, isNew: false };
    case 'add':
      return { ...state, showForm: true, isNew: false };
    case 'reset':
      return {
        ...state,
        showForm: false,
        isNew: false,
        selectedStainGroup: undefined,
      };
    case 'selectGroup':
      return {
        ...state,
        showForm: false,
        isNew: false,
        selectedStainGroup: payload as StainGroup,
      };
    default:
      return state;
  }
};

const useStainGroupReducer = () => {
  const [{ selectedStainGroup, showForm }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setCurrentGroup = (group?: StainGroup) =>
    dispatch({ type: 'selectGroup', payload: group });

  const edit = () => dispatch({ type: 'edit' });
  const add = () => dispatch({ type: 'add' });

  return { selectedStainGroup, showForm, setCurrentGroup, edit, add };
};

type StainGroupState = {
  selectedStainGroup?: StainGroup;
  showForm: boolean;
  isNew: boolean;
};

export { useStainGroupReducer };

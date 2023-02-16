import { useReducer } from 'react';
import { StainGroup } from '../../context/optemis';

const initialState: StainGroupState = {
  showPanel: true,
  isNew: false,
  showForm: false,
};

const reducer = (
  state: StainGroupState,
  {
    type,
    payload,
  }: {
    type: 'edit' | 'add' | 'reset' | 'setShowPanel' | 'selectGroup';
    payload?: StainGroup | boolean;
  }
) => {
  switch (type) {
    case 'edit':
      return { ...state, showPanel: true, isNew: false, showForm: true };
    case 'add':
      return { ...state, showPanel: true, isNew: true, showForm: true };
    case 'setShowPanel':
      return { ...state, showPanel: payload as boolean };
    case 'reset':
      return {
        ...state,
        showPanel: false,
        isNew: false,
        selectedStainGroup: undefined,
      };
    case 'selectGroup':
      return {
        ...state,
        showPanel: false,
        isNew: false,
        selectedStainGroup: payload as StainGroup,
      };
    default:
      return state;
  }
};

const useStainGroupReducer = () => {
  const [{ selectedStainGroup, showPanel, isNew, showForm }, dispatch] =
    useReducer(reducer, initialState);

  const setCurrentGroup = (group?: StainGroup) =>
    dispatch({ type: 'selectGroup', payload: group });

  const edit = () => dispatch({ type: 'edit' });
  const add = () => dispatch({ type: 'add' });
  const reset = () => dispatch({ type: 'reset' });
  const openPanel = () => dispatch({ type: 'setShowPanel', payload: true });
  const closePanel = () => dispatch({ type: 'setShowPanel', payload: false });

  return {
    selectedStainGroup,
    showPanel,
    setCurrentGroup,
    edit,
    add,
    reset,
    isNew,
    showForm,
    openPanel,
    closePanel,
  };
};

type StainGroupState = {
  selectedStainGroup?: StainGroup;
  showPanel: boolean;
  isNew: boolean;
  showForm: boolean;
};

export { useStainGroupReducer };

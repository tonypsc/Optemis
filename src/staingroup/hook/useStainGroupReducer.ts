import { useReducer } from 'react';
import { StainGroup } from '../../context/optemis';

const initialState: StainGroupState = {
  showPanel: true,
  isNew: false,
  showForm: false,
  panelTitle: 'Group detail',
  showDeleteDialog: false,
};

const reducer = (
  state: StainGroupState,
  {
    type,
    payload,
  }: {
    type:
      | 'edit'
      | 'add'
      | 'setShowDeleteDialog'
      | 'reset'
      | 'setShowPanel'
      | 'selectGroup';
    payload?: StainGroup | boolean;
  }
) => {
  switch (type) {
    case 'edit':
      return {
        ...state,
        showPanel: true,
        isNew: false,
        showForm: true,
        panelTitle: 'Editing group',
      };
    case 'add':
      return {
        ...state,
        showPanel: true,
        isNew: true,
        showForm: true,
        panelTitle: 'New group',
        selectedStainGroup: undefined,
      };
    case 'setShowDeleteDialog':
      return {
        ...state,
        isNew: false,
        showForm: false,
        showDeleteDialog: payload as boolean,
      };
    case 'setShowPanel':
      return { ...state, showPanel: payload as boolean };
    case 'reset':
      return {
        ...state,
        showPanel: false,
        isNew: false,
        panelTitle: 'Group details',
        selectedStainGroup: undefined,
        showDeleteDialog: false,
      };
    case 'selectGroup':
      return {
        ...state,
        showPanel: true,
        showForm: false,
        isNew: false,
        panelTitle: 'Group details',
        selectedStainGroup: payload as StainGroup,
      };
    default:
      return state;
  }
};

const useStainGroupReducer = () => {
  const [
    {
      selectedStainGroup,
      showPanel,
      isNew,
      showForm,
      panelTitle,
      showDeleteDialog,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const setCurrentGroup = (group?: StainGroup) =>
    dispatch({ type: 'selectGroup', payload: group });

  const edit = () => dispatch({ type: 'edit' });
  const add = () => dispatch({ type: 'add' });
  const setShowDeleteDialog = (show: boolean) =>
    dispatch({ type: 'setShowDeleteDialog', payload: show });
  const reset = () => dispatch({ type: 'reset' });
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
    panelTitle,
    closePanel,
    showDeleteDialog,
    setShowDeleteDialog,
  };
};

type StainGroupState = {
  selectedStainGroup?: StainGroup;
  showPanel: boolean;
  isNew: boolean;
  showForm: boolean;
  panelTitle: string;
  showDeleteDialog?: boolean;
};

export { useStainGroupReducer };

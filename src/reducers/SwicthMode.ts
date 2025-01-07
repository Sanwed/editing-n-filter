import {SWITCH_EDIT_MODE} from "../actions/actionTypes.ts";

const initialState = {
  isEditMode: false,
}

interface IAction {
  type: string;
  payload: null
}

export default function switchMode(state = initialState, action: IAction) {
  switch (action.type) {
    case SWITCH_EDIT_MODE:
      return {...state, isEditMode: !state.isEditMode};
    default:
      return state;
  }
}
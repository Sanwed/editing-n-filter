import {FORM_FILTER_CHANGE} from "../actions/actionTypes.ts";

const initialState = ""

interface IAction {
  type: string,
  payload: string
}

export default function filterTasks(state = initialState, action: IAction) {
  switch (action.type) {
    case FORM_FILTER_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
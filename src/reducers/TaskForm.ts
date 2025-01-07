import {FORM_TASK_CHANGE, CLEAR_FORM} from "../actions/actionTypes.ts";
import {ITaskForm} from "../interfaces/interfaces.ts";

const initialState: ITaskForm = {
  taskTitle: "",
  taskPrice: "",
  taskId: "",
}

interface IAction {
  type: string;
  payload: { name: keyof ITaskForm, value: string };
}

export default function taskFormReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case FORM_TASK_CHANGE:
      return {...state, [action.payload.name]: action.payload.value};
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
}
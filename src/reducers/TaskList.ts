import {ITask} from "../interfaces/interfaces.ts";
import {TASK_CREATE, TASK_DELETE, TASK_UPDATE} from "../actions/actionTypes.ts";

const initialState: ITask[] = [];

interface IAction {
  type: string;
  payload: ITask | string;
}

export default function taskListReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case TASK_CREATE:
      return [...state, action.payload];
    case TASK_DELETE:
      const index = action.payload as string;
      const deleteIndex = state.findIndex(task => task.id === index);
      if (deleteIndex !== -1) {
        const newState = state.filter((_, index) => index !== deleteIndex);
        return [...newState];
      }
      return state;
    case TASK_UPDATE:
      const task = action.payload as ITask;
      const id = task.id;
      const editIndex = state.findIndex(task => task.id === id);
      if (editIndex !== -1) {
        return [
          ...state.slice(0, editIndex),
          {...state[editIndex], ...task},
          ...state.slice(editIndex + 1),
        ];
      }
      return state;
    default:
      return state;
  }
}
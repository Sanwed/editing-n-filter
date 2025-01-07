import {legacy_createStore, combineReducers} from "redux";
import taskFormReducer from "../reducers/TaskForm.ts"
import taskListReducer from "../reducers/TaskList.ts";
import switchMode from "../reducers/SwicthMode.ts";
import filterTasks from "../reducers/TaskFilterForm.ts";

const reducers = combineReducers({
  taskForm: taskFormReducer,
  taskList: taskListReducer,
  switchMode: switchMode,
  filterTasks: filterTasks,
})

const store = legacy_createStore(reducers)
export default store;
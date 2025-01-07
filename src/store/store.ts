import {legacy_createStore, combineReducers} from "redux";
import taskFormReducer from "../reducers/TaskForm.ts"
import taskListReducer from "../reducers/TaskList.ts";
import switchMode from "../reducers/SwicthMode.ts";

const reducers = combineReducers({
  taskForm: taskFormReducer,
  taskList: taskListReducer,
  switchMode: switchMode,
})

const store = legacy_createStore(reducers)
export default store;
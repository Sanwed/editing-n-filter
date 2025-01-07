import {ITaskForm} from "../interfaces/interfaces.ts";
import {TASK_CREATE, FORM_VALUE_CHANGE, CLEAR_FORM, TASK_DELETE, SWITCH_EDIT_MODE, TASK_UPDATE} from "./actionTypes.ts";

export function setTaskForm(name: keyof ITaskForm, value: string) {
  return {type: FORM_VALUE_CHANGE, payload: {name, value}};
}

export function clearForm() {
  return {type: CLEAR_FORM};
}

export function createTask(id: string, title: string, price: string) {
  return {type: TASK_CREATE, payload: {id, title, price}}
}

export function deleteTask(id: string) {
  return {type: TASK_DELETE, payload: id}
}

export function editTask(id: string, title: string, price: string) {
  return {type: TASK_UPDATE, payload: {id, title, price}}
}

export function switchEditMode() {
  return {type: SWITCH_EDIT_MODE};
}
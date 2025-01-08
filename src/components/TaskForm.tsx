import {useDispatch, useSelector} from "react-redux";
import {IState, ITaskForm} from "../interfaces/interfaces.ts";
import {ChangeEvent, FormEvent} from "react";
import {setTaskForm, clearForm, createTask, switchEditMode, editTask} from "../actions/actionCreators.ts";

function TaskForm() {
  const dispatch = useDispatch();
  const items = useSelector((state: IState) => state.taskForm);
  const isEditMode = useSelector((state: IState) => state.switchMode.isEditMode);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof ITaskForm;
    const value = event.target.value;
    dispatch(setTaskForm(name, value))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = self.crypto.randomUUID();
    dispatch(createTask(id, items.taskTitle, items.taskPrice));
    dispatch(clearForm());
  }

  const onEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editTask(items.taskId, items.taskTitle, items.taskPrice));
    dispatch(clearForm());
    dispatch(switchEditMode());
  }

  const onCancel = () => {
    dispatch(clearForm());
    dispatch(switchEditMode());
  }

  return (
    <form onSubmit={isEditMode ? onEdit : onSubmit} className="task-form">
      <input type="hidden" name="taskId" value={items.taskId}/>
      <input onChange={onChange} value={items.taskTitle} type="text" name="taskTitle" className="input"
             placeholder="Название" required maxLength={20}/>
      <input onChange={onChange} value={items.taskPrice} type="number" name="taskPrice" className="input"
             placeholder="0" required max="10000000"/>
      <button type="submit" className="task-form__submit">{isEditMode ? 'Редактировать' : 'Добавить'}</button>
      <button onClick={onCancel} type="button" className={`task-form__cancel ${!isEditMode && 'hidden'}`}>Отмена
      </button>
    </form>
  )
}

export default TaskForm;
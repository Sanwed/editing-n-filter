import {useSelector, useDispatch} from "react-redux";
import {IState} from "../interfaces/interfaces.ts";
import {deleteTask, setTaskForm, switchEditMode} from "../actions/actionCreators.ts";

function TaskList() {
  const isEditMode = useSelector((state: IState) => state.switchMode.isEditMode);
  const tasks = useSelector((state: IState) => state.taskList);
  const dispatch = useDispatch();

  const onDelete = (id: string) => {
    dispatch(deleteTask(id));
  }

  const onEdit = (id: string, title: string, price: string) => {
    dispatch(switchEditMode())

    dispatch(setTaskForm("taskId", id))
    dispatch(setTaskForm("taskTitle", title));
    dispatch(setTaskForm("taskPrice", price));
  }

  return (
    <div className="task-list">
      {tasks && tasks.map((task) => (
        <div id={task.id} key={task.id} className="task">
          <span>{task.title}</span> <b>{task.price}</b>
          <button disabled={isEditMode} onClick={() => onDelete(task.id)}>Delete</button>
          <button disabled={isEditMode} onClick={() => onEdit(task.id, task.title, task.price)}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default TaskList;
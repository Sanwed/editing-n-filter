export interface ITaskForm {
  taskId: string;
  taskTitle: string;
  taskPrice: string;
}

export interface ITask {
  id: string;
  title: string;
  price: string;
}

export interface IMode {
  isEditMode: boolean;
}

export interface IState {
  taskForm: ITaskForm;
  taskList: ITask[];
  switchMode: IMode;
  filterTasks: string;
}
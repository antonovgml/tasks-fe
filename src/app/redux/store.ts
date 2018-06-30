import { Action, AnyAction } from 'redux';
import { Task } from '../model/task';
import { TaskActions } from './task.actions';

export interface IAppState {
  tasks: Task[];
  editingTaskId: number;
}

export const INITIAL_STATE: IAppState = {
  tasks: [],
  editingTaskId: 0,
};


export function rootReducer(lastState: IAppState, action: Action): IAppState {

  return Object.assign({}, lastState, {
    tasks: tasks (lastState, action),
    editingTaskId: editingTaskId(lastState, action)
  });
}

// reducer for tasks property
function tasks(lastState: IAppState, action: AnyAction): Task[] {
  switch (action.type) {
    case TaskActions.DELETE_TASK: return lastState.tasks.filter(task => task.id !== action.id);
    case TaskActions.UPDATE_TASK: return lastState.tasks.map(task => (task.id === action.task.id) ? action.task : task);
    case TaskActions.DELETE_ALL_TASKS: return [];
    case TaskActions.READ_TASKS:  return action.tasks;
    case TaskActions.ADD_TASK: return [... lastState.tasks, action.task];
    default: return lastState.tasks;
  }
}

// reducer for editingTaskId
function editingTaskId(lastState: IAppState, action: AnyAction): number {
  switch (action.type) {
    case TaskActions.START_EDITING_TASK: return action.id;
    case TaskActions.FINISH_EDITING_TASK: return 0;
    default: return lastState.editingTaskId;
  }
}


import { Injectable } from '@angular/core';
import { Action, AnyAction } from 'redux';
import { Task } from '../model/task';

@Injectable(
)
export class TaskActions {
  static ADD_TASK = 'ADD_TASK';
  static UPDATE_TASK = 'UPDATE_TASK';
  static DELETE_TASK = 'DELETE_TASK';
  static DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';
  static READ_TASKS = 'READ_TASKS';
  static START_EDITING_TASK = 'START_EDITING_TASK';
  static FINISH_EDITING_TASK = 'FINISH_EDITING_TASK';

  addTask(task: Task): AnyAction {
    return { type: TaskActions.ADD_TASK, task: task};
  }

  updateTask(task: Task): AnyAction {
    return { type: TaskActions.UPDATE_TASK, task: task};
  }


  deleteTask(taskId: number): AnyAction {
    return { type: TaskActions.DELETE_TASK, id: taskId};
  }

  deleteAllTasks(): AnyAction {
    return { type: TaskActions.DELETE_ALL_TASKS};
  }


  readTasks(tasks: Task[]): AnyAction {
    return {
      type: TaskActions.READ_TASKS,
      tasks: tasks
     };
  }

  startEditingTask(taskId: number) {
    return {type: TaskActions.START_EDITING_TASK, id: taskId};
  }

  finishEditingTask() {
    return {type: TaskActions.START_EDITING_TASK};
  }

}

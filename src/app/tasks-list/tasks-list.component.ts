import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

import { TaskService } from '../services/task.service';
import { IAppState } from '../redux/store';
import { TaskActions } from '../redux/task.actions';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @select() tasks: Observable<Task[]>;
  @select() editingTaskId$: Observable<number>;

  constructor(
    private taskService: TaskService,
    private ngRedux: NgRedux<IAppState>,
    private taskActions: TaskActions,
  ) {
  }

  ngOnInit() {
    this.getTasks();
  }

  onStartedEditingTask(event, task: Task) {
    this.ngRedux.dispatch(this.taskActions.startEditingTask(task.id));

    event.stopPropagation();
  }

  onFinishedEditingTask(event, task: Task) {
    this.ngRedux.dispatch(this.taskActions.updateTask(task));
    this.ngRedux.dispatch(this.taskActions.finishEditingTask());
    this.taskService.updateTask(task as Task).subscribe();

    event.stopPropagation();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(
        (tasks: Task[]) => this.ngRedux.dispatch(this.taskActions.readTasks(tasks))
      );
  }

  addTask(): void {
    const newTask = new Task();
    this.taskService.addTask(newTask).subscribe(
      (task: Task) => {
        this.ngRedux.dispatch(this.taskActions.addTask(task));
      }
    );
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(
      _ => this.ngRedux.dispatch(this.taskActions.deleteTask(taskId))
    );
  }

  deleteAllTasks(): void {
    this.taskService.deleteAllTasks().subscribe(
      () => {
        this.ngRedux.dispatch(this.taskActions.finishEditingTask());
        this.ngRedux.dispatch(this.taskActions.deleteAllTasks());
      }
    );
  }

}

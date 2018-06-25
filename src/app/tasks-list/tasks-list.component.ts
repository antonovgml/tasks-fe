import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

import { TaskService } from '../services/task.service';
import { IEditable } from '../model/i-editable';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[];
  editingTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  onEditTask(event, task: Task) {
    if (!this.editingTask) {
      task['isEdit'] = true;
      this.editingTask = task;
      event.stopPropagation();
    }

  }

  onClickedOutside(event, task: Task) {
    console.log("Clicked outside of " + JSON.stringify(task));
    if (task['isEdit']) {
      task['isEdit'] = false;
      this.editingTask = null;
      this.taskService.updateTask(task as Task).subscribe();
    }

    event.stopPropagation();

  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask(): void {
    const newTask = new Task();
    this.taskService.addTask(newTask).subscribe(
      () => this.getTasks()
    );
  }

  deleteTask(taskId: number): void {
    this.editingTask = null;
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.taskService.deleteTask(taskId).subscribe(
      () => this.getTasks()
    );
  }

  deleteAllTasks(): void {
    this.taskService.deleteAllTasks().subscribe(
      () => this.getTasks()
    );
  }

}

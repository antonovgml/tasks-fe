import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
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
    this.tasks = this.tasks.filter( task => task.id !== taskId);
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

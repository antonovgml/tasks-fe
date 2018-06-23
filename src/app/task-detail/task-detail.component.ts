import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location) { }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    let taskId = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(taskId).subscribe(task => this.task = task);
  }

  saveTask() {
    this.taskService.updateTask(this.task).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}

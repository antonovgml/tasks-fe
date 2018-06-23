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

  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }


  addTask(): void{
    var maxId = this.tasks.reduce((prev, curr)=>{return (curr.id > prev.id)? curr: prev;}).id
    var newTask = new Task();    
    newTask.title = "NewTask";
    this.taskService.addTask(newTask).subscribe((task) => this.tasks.push(task));


  }

  deleteTask(taskId: number): void{

    this.tasks = this.tasks.filter( task => task.id != taskId)
    this.taskService.deleteTask(taskId).subscribe();
    
  }

}

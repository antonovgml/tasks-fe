import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[];

  selectedTask: Task;

  constructor() { }

  ngOnInit() {
    this.tasks = TASKS;
  }

  onSelect(task: Task): void{
    console.log("SELECTED TASK: " + task);
    this.selectedTask = task;

  }

  addTask(): void{
    var maxId = this.tasks.reduce((prev, curr)=>{return (curr.id > prev.id)? curr: prev;}).id
    var newTask = new Task();
    newTask.id = maxId + 1;
    this.tasks.push(newTask);


  }

  deleteTask(taskId: number): void{


    this.tasks = this.tasks.filter( task => task.id != taskId)
  }

}

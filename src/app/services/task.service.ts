import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  getTasks(): Observable<Task[]>{
    return of(TASKS);
  }

  getTask(taskId: number): Observable<Task> {

    return of(TASKS.find(task => task.id == taskId))
  }
}

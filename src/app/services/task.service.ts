import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from '../model/task';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'api/tasks';



  constructor(private http: HttpClient) { }


  /** GET: retrieve all tasks */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError<Task[]>('getTasks()', []))
      );
  }

  /** GET: retrieve task by id */
  getTask(taskId: number): Observable<Task> {

    return this.http.get<Task>(`${this.tasksUrl}/${taskId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Task>(`getHero id=${taskId}`))
      );

  }

  /** POST: add a new Task to the server */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions)
      .pipe(
        catchError(this.handleError<Task>('addTask'))
      );
  }

  /** PUT: update specific task */
  updateTask(task: Task): Observable<Task> {

    return this.http.put<Task>(`${this.tasksUrl}/${task.id}`, task, httpOptions)
  }

  /** DELETE: delete specified task by ID */
  deleteTask(task: Task | number) {

    const taskId = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}/${taskId}`;

    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError<Task>('adTask'))
      );
  }

  handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      console.error(error); // log to console

      return of(result as T);
    };

  }
}

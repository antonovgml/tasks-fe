import { Injectable } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActionsObservable } from 'redux-observable';
import { TaskActions } from './task.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class TaskEpics {

    constructor(
        private taskService: TaskService) {
    }
/*
    readTasks = (action$: ActionsObservable<any>) => {
        return action$.ofType(TaskActions.READ_TASKS)
          .mergeMap(() => {
            return this.http.post(`${BASE_URL}/auth/login`, payload)
              .map(result => ({
                type: TaskActions.LOGIN_USER_SUCCESS,
                payload: result.json().meta
              }))
              .catch(error => Observable.of({
                type: SessionActions.LOGIN_USER_ERROR
              }));
            });
      }
*/
}

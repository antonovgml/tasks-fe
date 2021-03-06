import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskService } from './services/task.service';
import { AppRoutingModule } from './/app-routing.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { environment } from '../environments/environment';

import { createEpicMiddleware } from 'redux-observable';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './redux/store';
import { TaskActions } from './redux/task.actions';
import { TaskEpics } from './redux/task.epics';


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    environment.production ? [] :
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false, delay: 1000 }),

    NgbModule.forRoot(),
    ClickOutsideModule,
    NgReduxModule,
  ],
  providers: [TaskActions, TaskEpics],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    private taskEpics: TaskEpics,
    devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ?
      [devTools.enhancer()] :
      [];

    /*
    const middleware = [
      createEpicMiddleware(this.taskEpics.readTasks)
    ];
*/
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);


  }
}

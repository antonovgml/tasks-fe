import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskService } from './services/task.service';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    environment.production ? []:
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1000 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

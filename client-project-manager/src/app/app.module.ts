import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';


import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TaskService } from './services/task.service';
import { SearchTaskPipe } from './pipes/search-task.pipe';
import { SearchEndDatePipe } from './pipes/search-end-date.pipe';
import { SearchParentPipe } from './pipes/search-parent.pipe';
import { SearchPriorityPipe } from './pipes/search-priority.pipe';
import { SearchStartDatePipe } from './pipes/search-start-date.pipe';
import { SearchPriorityFromPipe } from './pipes/search-priority-from.pipe';
import { SearchPriorityToPipe } from './pipes/search-priority-to.pipe';

import { UserfirstPipe } from './pipes/userfirst.pipe';
import { UserlastPipe } from './pipes/userlast.pipe';
import { UseridPipe } from './pipes/userid.pipe';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddtaskComponent,
    AdduserComponent,
    AddprojectComponent,
    UpdatetaskComponent,
    UpdateuserComponent,
    UpdateprojectComponent,
    SearchTaskPipe,
    SearchEndDatePipe,
    SearchParentPipe,
    SearchPriorityPipe,
    SearchStartDatePipe,
    SearchPriorityFromPipe,
    SearchPriorityToPipe,
    UserfirstPipe,
    UserlastPipe,
    UseridPipe
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
    HttpClientModule,
    AppRoutingModule,
	ReactiveFormsModule
  ],
  providers: [
	TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


import { UserfirstPipe } from './pipes/userfirst.pipe';


import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SortfirstnamePipe } from './pipes/sortfirstname.pipe';
import { SorttaskPipe } from './pipes/sorttask.pipe';
import { SortprojectPipe } from './pipes/sortproject.pipe';
import { SearchprojectPipe } from './pipes/searchproject.pipe';



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
    UserfirstPipe,
    SortfirstnamePipe,
    SorttaskPipe,
    SortprojectPipe,
    SearchprojectPipe,
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

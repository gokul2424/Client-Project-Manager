
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'addtask', component: AddtaskComponent },
{ path: 'updatetask', component: UpdatetaskComponent },

{ path: 'addproject', component: AddprojectComponent },
{ path: 'updateproject/:id', component: UpdateprojectComponent },

{ path: 'adduser', component: AdduserComponent },
{ path: 'updateuser/:id', component: UpdateuserComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './domain/home/home/home.component';
import { FullLayoutComponent } from './base/containers/full-layout/full-layout.component';
import { AppointmentTypeCreateComponent } from './domain/gymapp/appointmenttype/appointment-type-create/appointment-type-create.component';
import { AppointmentTypeEditComponent } from './domain/gymapp/appointmenttype/appointment-type-edit/appointment-type-edit.component';
import { AppointmentTypeDeleteComponent } from './domain/gymapp/appointmenttype/appointment-type-delete/appointment-type-delete.component';
import { AppointmentTypeListComponent } from './domain/gymapp/appointmenttype/appointment-type-list/appointment-type-list.component';
import { AppointmentTypeDetailComponent } from './domain/gymapp/appointmenttype/appointment-type-detail/appointment-type-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'appointmenttype/list', component: AppointmentTypeListComponent },
      { path: 'appointmenttype/create', component: AppointmentTypeCreateComponent },
      { path: 'appointmenttype/details/:id', component: AppointmentTypeDetailComponent },
      { path: 'appointmenttype/edit/:id', component: AppointmentTypeEditComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './domain/home/home/home.component';
import { FullLayoutComponent } from './base/containers/full-layout/full-layout.component';
import { AppointmentTypeCreateComponent } from './domain/gymapp/appointmenttype/appointment-type-create/appointment-type-create.component';
import { AppointmentTypeEditComponent } from './domain/gymapp/appointmenttype/appointment-type-edit/appointment-type-edit.component';
import { AppointmentTypeDeleteComponent } from './domain/gymapp/appointmenttype/appointment-type-delete/appointment-type-delete.component';
import { AppointmentTypeListComponent } from './domain/gymapp/appointmenttype/appointment-type-list/appointment-type-list.component';
import { AppointmentTypeDetailComponent } from './domain/gymapp/appointmenttype/appointment-type-detail/appointment-type-detail.component';
import { CoachCreateComponent } from './domain/gymapp/coach/coach-create/coach-create.component';
import { CoachEditComponent } from './domain/gymapp/coach/coach-edit/coach-edit.component';
import { CoachDetailComponent } from './domain/gymapp/coach/coach-detail/coach-detail.component';
import { CoachListComponent } from './domain/gymapp/coach/coach-list/coach-list.component';
import { MemberCreateComponent } from './domain/gymapp/member/member-create/member-create.component';
import { MemberEditComponent } from './domain/gymapp/member/member-edit/member-edit.component';
import { MemberDetailComponent } from './domain/gymapp/member/member-detail/member-detail.component';
import { MemberListComponent } from './domain/gymapp/member/member-list/member-list.component';
import { TrainingScheduleCreateComponent } from './domain/gymapp/trainingshedule/training-schedule-create/training-schedule-create.component';
import { TrainingScheduleEditComponent } from './domain/gymapp/trainingshedule/training-schedule-edit/training-schedule-edit.component';
import { TrainingScheduleDetailComponent } from './domain/gymapp/trainingshedule/training-schedule-detail/training-schedule-detail.component';
import { TrainingScheduleListComponent } from './domain/gymapp/trainingshedule/training-schedule-list/training-schedule-list.component';
import { AppointmentCreateComponent } from './domain/gymapp/appointment/appointment-create/appointment-create.component';
import { AppointmentDetailComponent } from './domain/gymapp/appointment/appointment-detail/appointment-detail.component';
import { AppointmentEditComponent } from './domain/gymapp/appointment/appointment-edit/appointment-edit.component';
import { AppointmentListComponent } from './domain/gymapp/appointment/appointment-list/appointment-list.component';
import { PictureComponent } from './base/layout/picture/picture.component';

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

      { path: 'coach/list', component: CoachListComponent },
      { path: 'coach/create', component: CoachCreateComponent },
      { path: 'coach/details/:id', component: CoachDetailComponent },
      { path: 'coach/edit/:id', component: CoachEditComponent },

      { path: 'member/list', component: MemberListComponent },
      { path: 'member/create', component: MemberCreateComponent },
      { path: 'member/details/:id', component: MemberDetailComponent },
      { path: 'member/edit/:id', component: MemberEditComponent },

      { path: 'trainingschedule/list', component: TrainingScheduleListComponent },
      { path: 'trainingschedule/create', component: TrainingScheduleCreateComponent },
      { path: 'trainingschedule/details/:id', component: TrainingScheduleDetailComponent },
      { path: 'trainingschedule/edit/:id', component: TrainingScheduleEditComponent },

      { path: 'appointment/list', component: AppointmentListComponent },
      { path: 'appointment/create', component: AppointmentCreateComponent },
      { path: 'appointment/details/:id', component: AppointmentDetailComponent },
      { path: 'appointment/edit/:id', component: AppointmentEditComponent },
      { path: 'unsplash/hero', component: PictureComponent },

    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

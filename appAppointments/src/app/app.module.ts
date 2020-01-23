import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './domain/home/home/home.component';
import { NavComponent } from './base/layout/nav/nav.component';
import { FullLayoutComponent } from './base/containers/full-layout/full-layout.component';
import { FooterComponent } from './base/layout/footer/footer.component';
import { JumbotronComponent } from './base/layout/jumbotron/jumbotron.component';
import { AppointmentTypeCreateComponent } from './domain/gymapp/appointmenttype/appointment-type-create/appointment-type-create.component';
import { AppointmentTypeEditComponent } from './domain/gymapp/appointmenttype/appointment-type-edit/appointment-type-edit.component';
import { AppointmentTypeDeleteComponent } from './domain/gymapp/appointmenttype/appointment-type-delete/appointment-type-delete.component';
import { AppointmentTypeListComponent } from './domain/gymapp/appointmenttype/appointment-type-list/appointment-type-list.component';
import { AppointmentTypeDetailComponent } from './domain/gymapp/appointmenttype/appointment-type-detail/appointment-type-detail.component';
import { from } from 'rxjs';
import { BreadcrumbComponent } from './base/layout/breadcrumb/breadcrumb/breadcrumb.component';
import { CoachCreateComponent } from './domain/gymapp/coach/coach-create/coach-create.component';
import { CoachEditComponent } from './domain/gymapp/coach/coach-edit/coach-edit.component';
import { CoachDetailComponent } from './domain/gymapp/coach/coach-detail/coach-detail.component';
import { CoachDeleteComponent } from './domain/gymapp/coach/coach-delete/coach-delete.component';
import { CoachListComponent } from './domain/gymapp/coach/coach-list/coach-list.component';
import { MemberCreateComponent } from './domain/gymapp/member/member-create/member-create.component';
import { MemberEditComponent } from './domain/gymapp/member/member-edit/member-edit.component';
import { MemberDetailComponent } from './domain/gymapp/member/member-detail/member-detail.component';
import { MemberDeleteComponent } from './domain/gymapp/member/member-delete/member-delete.component';
import { MemberListComponent } from './domain/gymapp/member/member-list/member-list.component';
import { TrainingScheduleCreateComponent } from './domain/gymapp/trainingshedule/training-schedule-create/training-schedule-create.component';
import { TrainingScheduleEditComponent } from './domain/gymapp/trainingshedule/training-schedule-edit/training-schedule-edit.component';
import { TrainingScheduleDetailComponent } from './domain/gymapp/trainingshedule/training-schedule-detail/training-schedule-detail.component';
import { TrainingScheduleDeleteComponent } from './domain/gymapp/trainingshedule/training-schedule-delete/training-schedule-delete.component';
import { TrainingScheduleListComponent } from './domain/gymapp/trainingshedule/training-schedule-list/training-schedule-list.component';
import { AppointmentCreateComponent } from './domain/gymapp/appointment/appointment-create/appointment-create.component';
import { AppointmentDeleteComponent } from './domain/gymapp/appointment/appointment-delete/appointment-delete.component';
import { AppointmentDetailComponent } from './domain/gymapp/appointment/appointment-detail/appointment-detail.component';
import { AppointmentEditComponent } from './domain/gymapp/appointment/appointment-edit/appointment-edit.component';
import { AppointmentListComponent } from './domain/gymapp/appointment/appointment-list/appointment-list.component';
import { PictureComponent } from './base/layout/picture/picture.component';
import { ApiUnsplashService } from './base/layout/api-unsplash/api-unsplash.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FullLayoutComponent,
    FooterComponent,
    JumbotronComponent,
    AppointmentTypeCreateComponent,
    AppointmentTypeEditComponent,
    AppointmentTypeDeleteComponent,
    AppointmentTypeListComponent,
    AppointmentTypeDetailComponent,
    BreadcrumbComponent,
    CoachCreateComponent,
    CoachEditComponent,
    CoachDetailComponent,
    CoachDeleteComponent,
    CoachListComponent,
    MemberCreateComponent,
    MemberEditComponent,
    MemberDetailComponent,
    MemberDeleteComponent,
    MemberListComponent,
    TrainingScheduleCreateComponent,
    TrainingScheduleEditComponent,
    TrainingScheduleDetailComponent,
    TrainingScheduleDeleteComponent,
    TrainingScheduleListComponent,
    AppointmentCreateComponent,
    AppointmentDeleteComponent,
    AppointmentDetailComponent,
    AppointmentEditComponent,
    AppointmentListComponent,
    PictureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    ApiUnsplashService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

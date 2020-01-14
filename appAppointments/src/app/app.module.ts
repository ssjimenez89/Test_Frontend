import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
    AppointmentTypeDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

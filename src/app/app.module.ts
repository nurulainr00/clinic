import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiserviceService } from './apiservice.service';
import { UpdatereviewComponent } from './updatereview/updatereview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    FaqComponent,
    AddappointmentComponent,
    ViewappointmentComponent,
    UpdateappointmentComponent,
    ViewreviewComponent,
    AddreviewComponent,
    UpdatereviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

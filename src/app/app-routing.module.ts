import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';
import { UpdatereviewComponent } from './updatereview/updatereview.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'addappointment', component:AddappointmentComponent},
  {path: 'viewappointment', component:ViewappointmentComponent},
  {path: 'updateappointment/:appointment_no', component:UpdateappointmentComponent},
  {path: 'addreview', component:AddreviewComponent},
  {path: 'viewreview', component:ViewreviewComponent},
  {path: 'updatereview/:appointment_no', component:UpdatereviewComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

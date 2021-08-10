import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAdminComponent } from '../welcome-admin/welcome-admin.component';
import { AddFlightComponent } from '../add-flight/add-flight.component';
import { flightService } from '../service/flight.service';
import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from '../flight-list/flight-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[
  {
    path:"welcome",
    component:WelcomeAdminComponent,
    children:[
      {
        path:"addFlight",
        component:AddFlightComponent
      },
      {
        path:"flightList",
        component:FlightListComponent
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AdminroutermoduleModule { }

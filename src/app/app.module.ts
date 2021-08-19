import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeAdminComponent } from './admin/welcome-admin/welcome-admin.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { flightService } from './admin/service/flight.service';
import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from './admin/flight-list/flight-list.component';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { TicketbookingComponent } from './user/components/ticketbooking/ticketbooking.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CouponComponent } from './coupon/coupon.component';
import { DatePipe } from '@angular/common';
import { TicketHistoryComponent } from './user/components/ticket-history/ticket-history.component';
// import {MatDialogModule} from '@angular/material/dialog';
const routes:Routes=[
  // {
  //   path:"**",
  //   component:HomeComponent
  // },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  // {
  //   path:'admin/addFlight',
  //   component:AddFlightComponent
  // }
  {
    path:'admin',
    // loadChildren: ()=>import('./admin/adminroutermodule/adminroutermodule.module').then(m=>m.AdminroutermoduleModule)
   component:AdminComponent
  },
  {
    path:'admin/addFlight',
    component:AddFlightComponent
  },
  {
    path:'admin/flightList',
    component:FlightListComponent
  },
  // {
  //   path:'admin/addAirPort'
  // },
  // {
  //   path:'admin/airport'
  // },
  // {
  //   path:'admin/scheduleFlight'
  // },
  {
    path:'',
    redirectTo:'home', 
    pathMatch: 'full' 
  },
  {
    path:'ticketbook',
    component:TicketbookingComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'admin/couponManage',
    component:CouponComponent
  },
  {
    path:'ticketbook/ticketHistory',
    component:TicketHistoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    WelcomeComponent,
    AboutComponent,
    AdminComponent,
    WelcomeAdminComponent,
    AddFlightComponent,
    FlightListComponent,
    UserComponent,
    TicketbookingComponent,
    SignUpComponent,
    CouponComponent,
    TicketHistoryComponent
  ],
  entryComponents:[TicketbookingComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [flightService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

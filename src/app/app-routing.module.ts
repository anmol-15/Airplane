import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import { FlighComponent } from './FlightBookingcomponent/fligh/fligh.component';
import { HomeComponent } from './myhomeComponents/home/home.component';
import { IndexcomponentComponent } from './indexcomponent/indexcomponent.component';
import { PilotsignupcomponentComponent } from './pilotsignupcomponent/pilotsignupcomponent.component';
import { PilotpagecomponentComponent } from './pilotpagecomponent/pilotpagecomponent.component';

import { PassengercomponentComponent } from './passengercomponent/passengercomponent.component';
import { PilotcomponentComponent } from './pilotcomponent/pilotcomponent.component';
import { SignupComponent } from './signupcomponent/signup/signup.component';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';
import { TicketcomponentComponent } from './ticketcomponent/ticketcomponent.component';
import { AdminsignupComponent } from './adminsignupComponent/adminsignup/adminsignup.component';
import { ManageflightsComponent } from './manageComponent/manageflights/manageflights.component';
import { NotificationcomponentComponent } from './notificationcomponent/notificationcomponent.component';
import { AddflightcomponentComponent } from './addflightcomponent/addflightcomponent.component';
import { UpdateflightcomponentComponent } from './updateflightcomponent/updateflightcomponent.component';
import { AllflightscomponentComponent } from './allflightscomponent/allflightscomponent.component';
import { DeleteflightcomponentComponent } from './deleteflightcomponent/deleteflightcomponent.component';
import { AddpilotcomponentComponent } from './addpilotcomponent/addpilotcomponent.component';
import { UpdatepilotcomponentComponent } from './updatepilotcomponent/updatepilotcomponent.component';
import { AllpilotscomponentComponent } from './allpilotscomponent/allpilotscomponent.component';
import { DeletepilotcomponentComponent } from './deletepilotcomponent/deletepilotcomponent.component';



const routes: Routes = [
  {path:'manageflight',component:ManageflightsComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path: "adminlogin", component:AdmincomponentComponent},
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"register",component:FlighComponent},
  {path: "passenger", component:PassengercomponentComponent},
  {path: "pilot", component:PilotcomponentComponent},
  {path: "", component:IndexcomponentComponent},
  {path: "payment", component:PaymentcomponentComponent},
  {path: "ticket", component:TicketcomponentComponent},
  {path: "pilotsignup", component:PilotsignupcomponentComponent},
  {path: "notification", component:NotificationcomponentComponent},
  {path: "addflight", component:AddflightcomponentComponent},
  {path: "updateflight", component:UpdateflightcomponentComponent},
  {path: "allflights", component:AllflightscomponentComponent},
  {path: "deleteflight", component:DeleteflightcomponentComponent},
  {path: "addpilot", component:AddpilotcomponentComponent},
  {path: "updatepilot", component:UpdatepilotcomponentComponent},
  {path: "allpilots", component:AllpilotscomponentComponent},
  {path: "deletepilot", component:DeletepilotcomponentComponent},
  {path: "pilotpage", component:PilotpagecomponentComponent},

  
// {path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

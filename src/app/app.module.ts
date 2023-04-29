import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import { PassengercomponentComponent } from './passengercomponent/passengercomponent.component';
import { PilotcomponentComponent } from './pilotcomponent/pilotcomponent.component';

import { HomeComponent } from './myhomeComponents/home/home.component';
import { SignupComponent } from './signupcomponent/signup/signup.component';
import { FlighComponent } from './FlightBookingcomponent/fligh/fligh.component';
import { IndexcomponentComponent } from './indexcomponent/indexcomponent.component';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';
import { TicketcomponentComponent } from './ticketcomponent/ticketcomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminsignupComponent } from './adminsignupComponent/adminsignup/adminsignup.component';
import { ManageflightsComponent } from './manageComponent/manageflights/manageflights.component';
import { PilotsignupcomponentComponent } from './pilotsignupcomponent/pilotsignupcomponent.component';
import { NotificationcomponentComponent } from './notificationcomponent/notificationcomponent.component';
import { AddflightcomponentComponent } from './addflightcomponent/addflightcomponent.component';
import { UpdateflightcomponentComponent } from './updateflightcomponent/updateflightcomponent.component';
import { AllflightscomponentComponent } from './allflightscomponent/allflightscomponent.component';
import { DeleteflightcomponentComponent } from './deleteflightcomponent/deleteflightcomponent.component';
import { AddpilotcomponentComponent } from './addpilotcomponent/addpilotcomponent.component';
import { UpdatepilotcomponentComponent } from './updatepilotcomponent/updatepilotcomponent.component';
import { AllpilotscomponentComponent } from './allpilotscomponent/allpilotscomponent.component';
import { DeletepilotcomponentComponent } from './deletepilotcomponent/deletepilotcomponent.component';
import { PilotpagecomponentComponent } from './pilotpagecomponent/pilotpagecomponent.component';




@NgModule({
  declarations: [
    AppComponent,
    AdmincomponentComponent,
    PassengercomponentComponent,
    PilotcomponentComponent,

    HomeComponent,
     SignupComponent,
     FlighComponent,
     IndexcomponentComponent,
     PaymentcomponentComponent,
     TicketcomponentComponent,
     AdminsignupComponent,
     ManageflightsComponent,
     PilotsignupcomponentComponent,
     NotificationcomponentComponent,
     AddflightcomponentComponent,
     UpdateflightcomponentComponent,
     AllflightscomponentComponent,
     DeleteflightcomponentComponent,
     AddpilotcomponentComponent,
     UpdatepilotcomponentComponent,
     AllpilotscomponentComponent,
     DeletepilotcomponentComponent,
     PilotpagecomponentComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

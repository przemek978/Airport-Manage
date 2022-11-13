import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PassengerComponent } from './passenger/passenger.component';
import { PassengersComponent } from './passengers/passengers.component';
import { FlightComponent } from './flight/flight.component';
import { FlightsComponent } from './flights/flights.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AddpassengertoflyComponent } from './addpassengertofly/addpassengertofly.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    PassengersComponent,
    FlightComponent,
    FlightsComponent,
    AddflightComponent,
    AddpassengertoflyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

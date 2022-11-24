import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassengerComponent } from './passenger/passenger.component';
import { PassengersComponent } from './passengers/passengers.component';
import { FlightComponent } from './flight/flight.component';
import { FlightsComponent } from './flights/flights.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AddpassengertoflyComponent } from './addpassengertofly/addpassengertofly.component';
import { EditflightComponent } from './editflight/editflight.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from '@angular/material/select'
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EditpassengerComponent } from './editpassenger/editpassenger.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanesComponent } from './planes/planes.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    PassengersComponent,
    FlightComponent,
    FlightsComponent,
    AddflightComponent,
    AddpassengertoflyComponent,
    EditflightComponent,
    EditpassengerComponent,
    LoginComponent,
    PlanesComponent,
    DeleteflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

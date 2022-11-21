import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AddpassengertoflyComponent } from './addpassengertofly/addpassengertofly.component';
import { FlightsComponent } from './flights/flights.component';
import { LoginComponent } from './login/login.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PassengersComponent } from './passengers/passengers.component';

const routes: Routes = [{ path: 'flights', component: FlightsComponent },{ path: 'login', component: LoginComponent },{ path: 'passengers/:id', component: PassengersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

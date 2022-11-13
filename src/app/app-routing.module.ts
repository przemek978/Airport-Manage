import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';
import { PassengersComponent } from './passengers/passengers.component';

const routes: Routes = [{ path: 'comp1', component: PassengersComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

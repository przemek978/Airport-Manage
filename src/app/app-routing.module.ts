import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIsComponent } from './apis/apis.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassengersComponent } from './passengers/passengers.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full' },{ path: 'home', component: HomeComponent } ,{ path: 'planes', component: PlanesComponent },{ path: 'flights', component: FlightsComponent },{ path: 'login', component: LoginComponent },{ path: 'API', component: APIsComponent },{ path: 'passengers/:id', component: PassengersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [

   ]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddflightComponent } from '../addflight/addflight.component';
import { EditflightComponent } from '../editflight/editflight.component';
import { AuthService } from '../Server/services/auth.service';
import { FlightService } from '../Server/services/flight.service';
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  passengers: Passenger[]=[];
  flights: Flight[]=[];
  private _selectedFlight!:Flight;
  newflight!:Flight;
  constructor(public auth:AuthService, public dialog: MatDialog,private flightservice:FlightService,private router: Router) {
  }

  ngOnInit(): void {
    this.flightservice.getFlight().subscribe(res=>{this.flights=res})
  }
  onSelect(flight:Flight): void {
    this.selectedFlight = flight;
  }
  openDialog(add: boolean,edit: boolean) {

    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddflightComponent, {
        width: '50%',
        data: {}
      })
    } else if (edit) {
      dialogRef = this.dialog.open(EditflightComponent, {
        width: '50%',
        data: this.selectedFlight
      })
    } else
      return;

      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.newflight=new Flight(result.id, result.plane, result.pilot1, result.pilot2, result.date);
          if(add){
            this.flights.push(this.newflight);
          }
          else if(edit){
            this.flights.forEach((obj, index, tab) =>{
              if(obj === this.selectedFlight){
                tab[index] = this.newflight;
                this.selectedFlight = tab[index];
              }
            })
          }
        }
      })
  }

  deleteFlight(): void {
    this.flightservice.deleteFlight(this.selectedFlight.id)
      .subscribe({
        next: (res) => {
          alert("Usunieto")
        },
        error: () => {
            alert("blad")
        }
      });
      this.flightservice.getFlight().subscribe(res=>{this.flights=res});
      window.location.reload();
  }
  FlightRoute(Flight:Flight,ind:number):void{
    var sind="";
    sind+=Flight.id;
    console.log('passengers/' + sind);
    if(Number(sind)>=0)
    {
      this.router.navigate(['passengers/' + sind]);
    }
  }
  get selectedFlight():Flight{
    return this._selectedFlight;
  }
  set selectedFlight(fl:Flight){
    this._selectedFlight=fl;
  }
}

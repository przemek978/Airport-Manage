import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddflightComponent } from '../addflight/addflight.component';
import { EditflightComponent } from '../editflight/editflight.component';
import { FlightService } from '../Server/services/flight.service';
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';
import { Pilot } from '../types/pilot';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {


  // passengers: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000",1),
  //                           new Passenger("Adam","Nowak",606232556,"12-05-1984",2),
  //                           new Passenger("Andrzej","Malinowski",506243445,"30-09-1996",3),
  //                           new Passenger("Anna","Wiśniewska",786345322,"19-01-1967",4)];

  // flights: Flight[]=[ new Flight(1,new Plane(1,"Samolot1",100), new Pilot("Franek","Nowal", 1), new Pilot("Sebastian","Kowal", 2), new Date("2000-01-21")),
  //                     new Flight(2,new Plane(2,"Samolot2",200), new Pilot("Franek","Nowal", 1), new Pilot("Sebastian","Kowal", 2), new Date("2001-01-21"))];
  passengers: Passenger[]=[];
  flights: Flight[]=[];
  selectedFlight!:Flight;
  constructor(public dialog: MatDialog,private flightservice:FlightService,private router: Router) {
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
        width: '100%',
        data: {}
      })
    } else if (edit) {
      dialogRef = this.dialog.open(EditflightComponent, {
        width: '100%',
        data: this.selectedFlight
      })
    } else
      return;
  }
  decide():boolean{
    return true;
  }
  deleteFlight(): void {

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
}

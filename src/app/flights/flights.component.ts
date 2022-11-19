import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddflightComponent } from '../addflight/addflight.component';
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


  passengers: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000"),
                            new Passenger("Adam","Nowak",606232556,"12-05-1984"),
                            new Passenger("Andrzej","Malinowski",506243445,"30-09-1996"),
                            new Passenger("Anna","Wiśniewska",786345322,"19-01-1967")];

  pilots: Pilot[]=[ new Pilot("Franek","Nowal", 1),
                        new Pilot("Sebastian","Kowal", 2)];

  flights: Flight[]=[ new Flight(1,new Plane("Samolot1",100), this.passengers, this.pilots, new Date("2000-01-21")),
                      new Flight(2,new Plane("Samolot2",200), this.passengers, this.pilots, new Date("2001-01-21"))];
  whichClicked:number=-1;

  constructor(public dialog: MatDialog,private router: Router) {
  }

  ngOnInit(): void {
  }
  openDialog(add: boolean,edit: boolean) {

    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddflightComponent, {
        width: '30%',
        data: {plane:'', passengers:"" }
      })
    // } else if (edit) {
    //   dialogRef = this.dialog.open(EditFilmComponent, {
    //     width: '30%',
    //     data: this.selectedFilm
    //   })
    } else
      return;
  }
  decide():boolean{
    return true;
  }

  FlightClicked(Flight:Flight,ind:number):void{
    this.whichClicked=ind;
    var sind="";
    sind=ind.toString();
    console.log('passengers/' + sind);
    this.router.navigate(['passengers/' + sind]);
    console.log(this.router);
  }
}

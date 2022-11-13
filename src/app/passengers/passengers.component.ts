import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';
import { Pilot } from '../types/pilot';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  passengers1: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000"),
                        new Passenger("Adam","Nowak",606232556,"12-05-1984"),
                        new Passenger("Andrzej","Malinowski",506243445,"30-09-1996"),
                        new Passenger("Anna","Wiśniewska",786345322,"19-01-1967")];
  passengers2: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000"),
                        new Passenger("Adam","Nowak",606232556,"12-05-1984"),
                        new Passenger("Anna","Wiśniewska",786345322,"19-01-1967")];

  pilots: Pilot[]=[ new Pilot("Franek","Nowal", 1),
                        new Pilot("Sebastian","Kowal", 2)];

  flights: Flight[]=[ new Flight(1,new Plane("Samolot1",100), this.passengers1, this.pilots, new Date("2000-01-21")),
                      new Flight(2,new Plane("Samolot2",200), this.passengers2, this.pilots, new Date("2001-01-21"))];
  whichClicked:number=-1;
  private flightid!: string;
  passengers!: Passenger[];





  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //this.route.paramMap.subscribe(params => this.Flightid = params.get('id'));
   console.log(this.route.snapshot.queryParams);
    //console.log(this.route.paramMap.subscribe(params => this.flightsid = params.get('id')));
    //this.passengers=this.flights[this.flightsid].passengers;
  }

  decide():boolean{
    return true;
  }

  PassengerClicked(Passenger:Passenger,ind:number):void{
    this.whichClicked=ind;
    console.log("Passenger clicked",Passenger,this.whichClicked);

  }
  get Flightid(){
    return this.flightid;
  }
  set Flightid(flightid:string){
    this.flightid=flightid;
  }

}

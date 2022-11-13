import { Component, OnInit } from '@angular/core';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  passengers: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000"),
                        new Passenger("Adam","Nowak",606232556,"12-05-1984")];
  whichClicked:number=-1;

  constructor() {
    this.passengers.push(new Passenger("Andrzej","Malinowski",506243445,"30-09-1996"));
    this.passengers.push(new Passenger("Anna","Wiśniewska",786345322,"19-01-1967"));
  }

  ngOnInit(): void {
  }

  decide():boolean{
    return true;
  }

  PassengerClicked(Passenger:Passenger,ind:number):void{
    this.whichClicked=ind;
    console.log("Passenger clicked",Passenger,this.whichClicked);

  }

}

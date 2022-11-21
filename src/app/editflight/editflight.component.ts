import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';
import { Pilot } from '../types/pilot';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.css']
})
export class EditflightComponent implements OnInit {

  passengers: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000"),
  new Passenger("Adam","Nowak",606232556,"12-05-1984"),
  new Passenger("Andrzej","Malinowski",506243445,"30-09-1996"),
  new Passenger("Anna","Wiśniewska",786345322,"19-01-1967")];

  pilots: Pilot[]=[ new Pilot("Franek","Nowal", 1),
  new Pilot("Sebastian","Kowal", 2),];

  planes: Plane[]=[new Plane("Samolot1",100),new Plane("Samolot2",200)];

  flights: Flight[]=[ new Flight(1,this.planes[0], this.passengers, this.pilots, new Date("2000-01-21")),
  new Flight(2,this.planes[1], this.passengers, this.pilots, new Date("2001-01-21"))];
  constructor(private dialogRef: MatDialogRef<EditflightComponent>, @Inject(MAT_DIALOG_DATA) public data: Flight) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }



}

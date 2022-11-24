import { Component, Inject, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FlightService } from '../Server/services/flight.service';
import { PilotService } from '../Server/services/pilot.service';
import { PlaneService } from '../Server/services/plane.service';
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';
import { Pilot } from '../types/pilot';
import { Plane } from '../types/plane';



@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css'],
})
export class AddflightComponent implements OnInit {

  passengers: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000",1),

  new Passenger("Adam","Nowak",606232556,"12-05-1984",2),
  new Passenger("Andrzej","Malinowski",506243445,"30-09-1996",3),
  new Passenger("Anna","Wiśniewska",786345322,"19-01-1967",4)];

  // pilots: Pilot[]=[ new Pilot("Franek","Nowal", 1),
  // new Pilot("Sebastian","Kowal", 2),];

  //planes: Plane[]=[new Plane(1,"Samolot1",100),new Plane(2,"Samolot2",200)];
  planes:Plane[]=[];
  pilots:Pilot[]=[];
  flightForm!:FormGroup;
  newflight:Flight=new Flight(0,new Plane(0,"",0),new Pilot("","", 1), new Pilot("","", 2) ,new Date());
  constructor(private formBuilder: FormBuilder,private flightservice:FlightService,private planeservice:PlaneService,private pilotservice:PilotService, private dialogRef: MatDialogRef<AddflightComponent>, @Inject(MAT_DIALOG_DATA) public data: Flight) { }

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      id: ['', Validators.required,],
      plane: ['', Validators.required],
      pilot1: ['', Validators.required],
      pilot2: ['', Validators.required],
      date: [new Date(), Validators.required],
    })
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;});
    this.pilotservice.getPilot().subscribe(res=>{this.pilots=res;});
    //console.log(this.flightForm.value);
  }

  addflight(){
    console.log(this.flightForm.valid);

    if(this.flightForm.valid){
      this.flightservice.postFlight(this.flightForm.value)
      .subscribe({
        next:(res)=>{
          alert("Lot został dodany")
        },
        error:()=>{
          alert("Blad")
        }
      })
      this.dialogRef.close(new Flight(this.flightForm.value.id,this.flightForm.value.plane,this.flightForm.value.pilot1,this.flightForm.value.pilot2,this.flightForm.value.date));
    }
  }
  onNoClick() {
    this.dialogRef.close();
  }



}

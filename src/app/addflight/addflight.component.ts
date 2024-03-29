import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
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

  passengers: Passenger[]=[];

  planes:Plane[]=[];
  pilots:Pilot[]=[];
  flightForm!:FormGroup;
  pom!:Date;
  newflight:Flight=new Flight(0,new Plane(0,"",0),new Pilot("","", 1), new Pilot("","", 2) ,new Date());
  constructor(private formBuilder: FormBuilder,private flightservice:FlightService,private planeservice:PlaneService,private pilotservice:PilotService, private dialogRef: MatDialogRef<AddflightComponent>, @Inject(MAT_DIALOG_DATA) public data: Flight) { }

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      id: ['', [Validators.required,Validators.pattern("[0-9]*")]],
      plane: ['', Validators.required],
      pilot1: ['', Validators.required],
      pilot2: ['', Validators.required],
      date: [new Date(), Validators.required],
    })
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;});
    this.pilotservice.getPilot().subscribe(res=>{this.pilots=res;});
  }

  addflight(){
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

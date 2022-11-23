import { Component, Inject, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { ApiService } from '../Server/services/api.service';
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

  pilots: Pilot[]=[ new Pilot("Franek","Nowal", 1),
  new Pilot("Sebastian","Kowal", 2),];

  planes: Plane[]=[new Plane(1,"Samolot1",100),new Plane(2,"Samolot2",200)];

  flights: Flight[]=[ new Flight(1,this.planes[0], this.passengers, this.pilots, new Date("2000-01-21")),
  new Flight(2,this.planes[1], this.passengers, this.pilots, new Date("2001-01-21"))];

  flightForm!:FormGroup;
  newflight:Flight=new Flight(0,new Plane(),);
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder,private api:ApiService, private dialogRef: MatDialogRef<AddflightComponent>, @Inject(MAT_DIALOG_DATA) public data: Flight) { }

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      id: ['', Validators.required,],
      plane: ['', Validators.required],
      pilot1: ['', Validators.required],
      pilot2: ['', Validators.required],
      date: [new Date(), Validators.required],
    })
    console.log(this.flightForm.value);
  }

  addflight(){
    if(this.flightForm.valid){
      this.api.postFlight(this.flightForm.value)
      .subscribe({
        next:(res)=>{
          alert("Lot został dodany")
        },
        error:()=>{
          alert("Blad")
        }
      })

    }
  }
  onNoClick() {
    this.dialogRef.close();
  }



}

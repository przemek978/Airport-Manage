import { Component, Inject, Input, OnInit } from '@angular/core';
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

  planes: Plane[]=[new Plane("Samolot1",100),new Plane("Samolot2",200)];

  flights: Flight[]=[ new Flight(1,this.planes[0], this.passengers, this.pilots, new Date("2000-01-21")),
  new Flight(2,this.planes[1], this.passengers, this.pilots, new Date("2001-01-21"))];

  flightForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private api:ApiService, private dialogRef: MatDialogRef<AddflightComponent>, @Inject(MAT_DIALOG_DATA) public data: Flight) { }

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      plane: ['', Validators.required,],
      pilots: ['', Validators.required],
      date: [new Date(), Validators.required],
    })
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

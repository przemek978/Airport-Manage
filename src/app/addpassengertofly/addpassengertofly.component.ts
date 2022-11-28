import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FlightService } from '../Server/services/flight.service';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-addpassengertofly',
  templateUrl: './addpassengertofly.component.html',
  styleUrls: ['./addpassengertofly.component.css']
})
export class AddpassengertoflyComponent implements OnInit {

  passForm!:FormGroup;
  newPass:Passenger=new Passenger("","",0,"",0);
  constructor(private formBuilder: FormBuilder,private flightservice:FlightService, private dialogRef: MatDialogRef<AddpassengertoflyComponent> , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.passForm = this.formBuilder.group({
      name: ['', Validators.required,],
      surname: ['', Validators.required],
      date: [new Date(), Validators.required],
      phone: ['',[ Validators.required,Validators.pattern("[0-9]*")]],
    })
  }

  addPassenger(){
    this.newPass=new Passenger(this.passForm.value.name,this.passForm.value.surname,this.passForm.value.phone,this.passForm.value.date,0);
    if(this.data.flight.passengers==undefined){
      this.data.flight.passengers=[];
    }
    this.data.flight.passengers.push({id:this.data.flight.passengers.length+1,name:this.passForm.value.name,surname:this.passForm.value.surname,phone_nr:this.passForm.value.phone,birthday:this.passForm.value.date});

    this.flightservice.putFlight(this.data.flight,this.data.flight.id).subscribe({
         next: (res) => {
           alert("Dodano pasażera")
         },
         error: () => {
           alert("Wystąpił błąd");
         }
       });
    }

  onNoClick() {
    this.dialogRef.close();
  }
}

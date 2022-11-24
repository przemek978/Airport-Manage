import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';
import { Pilot } from '../types/pilot';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-addpassengertofly',
  templateUrl: './addpassengertofly.component.html',
  styleUrls: ['./addpassengertofly.component.css']
})
export class AddpassengertoflyComponent implements OnInit {

  passForm!:FormGroup;
  newPass:Passenger=new Passenger("","",0,"",0);
 // @Output() newPassengers: EventEmitter<Passenger[]>=new  EventEmitter();
    //@Input() data!:Passenger;
  constructor(private formBuilder: FormBuilder,private dialogRef: MatDialogRef<AddpassengertoflyComponent> , @Inject(MAT_DIALOG_DATA) public data: Passenger) { }

  ngOnInit(): void {
    this.passForm = this.formBuilder.group({
      name: ['', Validators.required,],
      surname: ['', Validators.required],
      date: [new Date(), Validators.required],
      phone: ['', Validators.required],
    })
    //console.log(this.formBuilder.group);

  }

  addPassenger(){
    this.newPass=new Passenger(this.passForm.value.name,this.passForm.value.surname,this.passForm.value.phone,this.passForm.value.date,0);
    //console.log(this.passForm);
    this.dialogRef.close({data:this.newPass});
  }


  onNoClick() {
    this.dialogRef.close();
  }
}

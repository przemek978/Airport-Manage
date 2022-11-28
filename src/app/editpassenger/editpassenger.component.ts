
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightService } from '../Server/services/flight.service';
import { PilotService } from '../Server/services/pilot.service';
import { PlaneService } from '../Server/services/plane.service';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-editpassenger',
  templateUrl: './editpassenger.component.html',
  styleUrls: ['./editpassenger.component.css']
})
export class EditpassengerComponent implements OnInit {

  editpassForm!:FormGroup;
  newPass:Passenger=new Passenger("","",0,"",0);
  constructor(private formBuilder: FormBuilder,private flightservice:FlightService,private planeservice:PlaneService,private pilotservice:PilotService,private dialogRef: MatDialogRef<EditpassengerComponent>, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.editpassForm = this.formBuilder.group({
      name: ['', Validators.required,],
      surname: ['', Validators.required],
      date: [new Date(), Validators.required],
      phone: ['', [Validators.required,Validators.pattern("[0-9]*")]],
    });
    if (this.editData) {
      this.editpassForm.controls['name'].setValue(this.editData.pass.name);
      this.editpassForm.controls['surname'].setValue(this.editData.pass.surname);
      this.editpassForm.controls['date'].setValue(this.editData.pass.birthday);
      this.editpassForm.controls['phone'].setValue(this.editData.pass.phone_nr);
    }
  }

  editPassenger(){

    console.log(this.editData);
    if(this.editData.flight.passengers==undefined){
      this.editData.flight.passengers=[];
    }
    console.log(this.editData.flight);
    for(let i=0;i<this.editData.flight.passengers.length;i++){
      console.log(this.editData.flight.passengers[i].id);
      console.log(this.editData.pass.id);
      if(this.editData.flight.passengers[i].id==this.editData.pass.id){
        this.editData.flight.passengers[i]={id:this.editData.flight.passengers[i].id,name:this.editpassForm.value.name,surname:this.editpassForm.value.surname,phone_nr:this.editpassForm.value.phone,birthday:this.editpassForm.value.date};

      }
    }
    this.flightservice.putFlight(this.editData.flight,this.editData.flight.id).subscribe({
         next: (res) => {
           alert("Edytowano pasażera")
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

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FlightService } from '../Server/services/flight.service';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-addplane',
  templateUrl: './addplane.component.html',
  styleUrls: ['./addplane.component.css']
})
export class AddplaneComponent implements OnInit {

  planeForm!:FormGroup;
  newPlane:Plane=new Plane(0,"",0);
  constructor(private formBuilder: FormBuilder,private flightservice:FlightService, private dialogRef: MatDialogRef<AddplaneComponent> , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.planeForm = this.formBuilder.group({
      name: ['', Validators.required,],
      capaticy: ['', Validators.required],
    })
  }

  addPlane(){
    this.newPlane=new Plane(this.planeForm.value.name,this.planeForm.value.capacity,0);
    if(this.data.flight.planes==undefined){
      this.data.flight.planes=[];
    }
    this.data.flight.planes.push({id:this.data.flight.planes.length+1,name:this.planeForm.value.name,capacity:this.planeForm.value.capacity});

    this.flightservice.putFlight(this.data.flight,this.data.flight.id).subscribe({
         next: (res) => {
           alert("Dodano samolot")
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






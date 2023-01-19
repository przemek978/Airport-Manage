import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FlightService } from '../Server/services/flight.service';
import { PlaneService } from '../Server/services/plane.service';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-addplane',
  templateUrl: './addplane.component.html',
  styleUrls: ['./addplane.component.css']
})
export class AddplaneComponent implements OnInit {

  planeForm!:FormGroup;
  newPlane:Plane=new Plane(0,"",0);
  constructor(private planeservice:PlaneService,private formBuilder: FormBuilder,private flightservice:FlightService, private dialogRef: MatDialogRef<AddplaneComponent> , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.planeForm = this.formBuilder.group({
      id: ['', Validators.required,],
      name: ['', Validators.required,],
      capacity: ['', Validators.required],
    })
  }

  addPlane(){
    this.newPlane=new Plane(this.planeForm.value.name,this.planeForm.value.capacity,0);
    if(this.planeForm.valid){
      this.planeservice.postPlane(this.planeForm.value)
      .subscribe({
        next:(res)=>{
          alert("Samolot dodany")
        },
        error:()=>{
          alert("Blad")
        }
      })
      this.dialogRef.close(new Plane(this.planeForm.value.nr,this.planeForm.value.name,this.planeForm.value.capacity));
    }
    }

  onNoClick() {
    this.dialogRef.close();
  }
}






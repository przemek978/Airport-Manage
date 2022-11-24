import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Flight } from '../types/flight';
import { Pilot } from '../types/pilot';
import { Plane } from '../types/plane';
import { FlightService } from '../Server/services/flight.service';
import { PlaneService } from '../Server/services/plane.service';
import { PilotService } from '../Server/services/pilot.service';

@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.css']
})
export class EditflightComponent implements OnInit {


  planes:Plane[]=[];
  pilots:Pilot[]=[];
  editflightForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private flightservice:FlightService,private planeservice:PlaneService,private pilotservice:PilotService,private dialogRef: MatDialogRef<EditflightComponent>, @Inject(MAT_DIALOG_DATA) public editData: Flight) { }

  ngOnInit(): void {

    this.editflightForm = this.formBuilder.group({
      id: ['', Validators.required,],
      plane: ['', Validators.required],
      pilot1: ['', Validators.required],
      pilot2: ['', Validators.required],
      date: [new Date(), Validators.required],
    })
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;});
    this.pilotservice.getPilot().subscribe(res=>{this.pilots=res;});
    //console.log(this.editData);
    //console.log(this.editflightForm.controls);
    if (this.editData) {
      this.editflightForm.controls['id'].setValue(this.editData.id);
      this.editflightForm.controls['plane'].setValue(this.editData.plane);
      this.editflightForm.controls['pilot1'].setValue(this.editData.pilot1);
      this.editflightForm.controls['pilot2'].setValue(this.editData.pilot2);
      this.editflightForm.controls['date'].setValue(this.editData.date);
    }
  }
  // change(){
  //   console.log(this.editflightForm.controls);
  // }
  editflight(){
    this.flightservice.putFlight(this.editflightForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert("Lot został edytowany");
      },
      error: () => {
        alert("Blad");
      }
    })
    this.dialogRef.close(new Flight(this.editflightForm.value.id,this.editflightForm.value.plane,this.editflightForm.value.pilot1,this.editflightForm.value.pilot2,this.editflightForm.value.date));
  }

  onNoClick() {
    this.dialogRef.close();
  }



}

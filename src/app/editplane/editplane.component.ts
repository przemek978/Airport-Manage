import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightService } from '../Server/services/flight.service';
import { PlaneService } from '../Server/services/plane.service';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-editplane',
  templateUrl: './editplane.component.html',
  styleUrls: ['./editplane.component.css']
})
export class EditplaneComponent implements OnInit {

  editplaneForm!:FormGroup;
  newPlane:Plane=new Plane(0,"",0);

  constructor(private planeservice:PlaneService,private formBuilder: FormBuilder,private flightservice:FlightService, private dialogRef: MatDialogRef<EditplaneComponent> , @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.editplaneForm = this.formBuilder.group({
      id: ['', [Validators.required,Validators.pattern("[0-9]*")]],
      name: ['', Validators.required,],
      capacity: ['', [Validators.required,Validators.pattern("[0-9]*")]],
    })


    if (this.editData) {
      this.editplaneForm.controls['id'].setValue(this.editData.id);
      this.editplaneForm.controls['name'].setValue(this.editData.name);
      this.editplaneForm.controls['capacity'].setValue(this.editData.capacity);
    }
    console.log(this.editData)
  }


  editPlane(){
    console.log(this.editData)
    this.planeservice.putPlane(this.editplaneForm.value,this.editData.id).subscribe({
         next: (res) => {
           alert("Edytowano samolot")
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

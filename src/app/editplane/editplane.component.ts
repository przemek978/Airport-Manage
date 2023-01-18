import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightService } from '../Server/services/flight.service';
import { Plane } from '../types/plane';

@Component({
  selector: 'app-editplane',
  templateUrl: './editplane.component.html',
  styleUrls: ['./editplane.component.css']
})
export class EditplaneComponent implements OnInit {

  editpassForm!:FormGroup;
  newPass:Plane=new Plane(0,"",0);
  constructor(private formBuilder: FormBuilder,private flightservice:FlightService,private dialogRef: MatDialogRef<EditplaneComponent>, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.editpassForm = this.formBuilder.group({
      name: ['', Validators.required,],
      capacity: ['', Validators.required],
    });
    if (this.editData) {
      this.editpassForm.controls['name'].setValue(this.editData.pass.name);
      this.editpassForm.controls['capacity'].setValue(this.editData.pass.surname);
    }
  }

  editPassenger(){

    console.log(this.editData);
    if(this.editData.flight.planes==undefined){
      this.editData.flight.planes=[];
    }
    console.log(this.editData.flight);
    for(let i=0;i<this.editData.flight.planes.length;i++){
      console.log(this.editData.flight.planes[i].id);
      console.log(this.editData.pass.id);
      if(this.editData.flight.planes[i].id==this.editData.pass.id){
        this.editData.flight.planes[i]={id:this.editData.flight.planes[i].id,name:this.editpassForm.value.name,capacity:this.editpassForm.value.capacity};

      }
    }
    this.flightservice.putFlight(this.editData.flight,this.editData.flight.id).subscribe({
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

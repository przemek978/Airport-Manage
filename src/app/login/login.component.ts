import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employees: Employee[] = [
    new Employee('Arek', 'Łiski', 'Administrator', 'Arek1', 'Arek1'),
    new Employee('Przemo', 'K', 'Administrator', 'P1', 'P1'),
  ];
  employeeForm!: FormGroup;
  newlogin!: Employee;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public newlog: Employee
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });




      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(result);
      //   if (result !== undefined) {
      //     if (result.Name.length === 0) {

      //     }
      //     if(result.id== undefined){
      //       result.id=this.passengers.length+1;
      //     }
      //     //this.newPass = new Passenger(result.Name,result.Surname,result.Phone,result.Birth,result.Id);

      //     if(add){
      //       this.passengers.push(this.newPass);
      //     }
      //     else if(edit){
      //       this.passengers.forEach((obj, index, tab) =>{
      //         if(obj === this.selectedPassenger){
      //           tab[index] = this.selectedPassenger;
      //           //this.passengers.editPassenger(this.newPass, this.selectedPassenger); dodac dodanie do serwisu
      //           this.selectedPassenger = tab[index];
      //         }
      //       })
      //     }

      //   }
      // })
  }
  onNoClick() {
    this.dialogRef.close();
  }

}

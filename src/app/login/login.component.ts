import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public newlog: Employee
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}

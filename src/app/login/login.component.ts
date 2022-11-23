import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // employees: Employee[] = [
  //   new Employee('Arek', 'Łiski', 'Administrator', 'Arek1', 'Arek1'),
  //   new Employee('Przemo', 'K', 'Administrator', 'P1', 'P1'),
  // ];
  loginForm!: FormGroup;
  newlogin!: Employee;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private http: HttpClient,) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login(){
    this.http.get<any>("http://localhost:3000/users")
      .subscribe(res => {
        const user = res.find((a: Employee) => {
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        });
          console.log(user);
      })
  }
}

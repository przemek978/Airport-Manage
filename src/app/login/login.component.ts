import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
        if (user) {
          localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
          if (user.role == 'admin') {
            localStorage.setItem('userType', 'admin');
          }
          else {
            localStorage.setItem('userType', 'user');
          }
          this.loginForm.reset();
        }
        else {
          alert({ detail: "Error", summary: "User not found. Check the correctness of typed data.", duration: 5000 })
        }
      }, err => {
        alert({ detail: "Error", summary: "Something went wrong! Try again.", duration: 5000 })
      })
  }
}

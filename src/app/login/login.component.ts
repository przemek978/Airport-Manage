import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Server/services/auth.service';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  newlogin!: Employee;
  constructor(private formBuilder: FormBuilder,private auth:AuthService, private router:Router) {

  }

  ngOnInit(): void {
    if(this.auth.username==null)
    {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
    else {
      //console.log(this.auth.username)
      this.router.navigate(['home']);
    }
  }
  login(){

      {this.auth.Login().subscribe(res => {
        const user = res.find((a: Employee) => {
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        });
        if (user) {
          localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
          if (user.role == 'admin') {
            localStorage.setItem('role', 'admin');
          }
          else {
            localStorage.setItem('role', 'pracownik');
          }
          localStorage.setItem('userName', user.username);
          console.log(localStorage);
          this.loginForm.reset();
          alert("Zalogowano");
          window.location.reload();
        }
        else {
          alert("Nieprawidłowe dane");
        }
      }, err => {
        alert("Błąd");
      })
    }
  }
}

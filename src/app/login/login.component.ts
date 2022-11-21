import { Component, OnInit } from '@angular/core';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employees: Employee[]=[new Employee("Arek","Łiski","Administrator","Arek1","Arek1"),new Employee("Przemo","K","Administrator","P1","P1")];
  constructor() { }

  ngOnInit(): void {
  }


}

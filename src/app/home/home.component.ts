import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Server/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: any = localStorage.getItem("userName");
  role:any =localStorage.getItem('role');
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}

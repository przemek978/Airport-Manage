import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Server/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airport_Managment';

  username: any = localStorage.getItem("userName");
  constructor(public auth:AuthService,private router:Router){}

  Logout(){
    this.auth.Logout();
    window.location.reload();
    //this.router.navigate(['home']);
  }
}

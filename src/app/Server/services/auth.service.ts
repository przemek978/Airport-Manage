import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: any = localStorage.getItem("userName");
  role:any =localStorage.getItem('role');
  constructor(private http:HttpClient) { }

  Login(){
      return this.http.get<any>("http://localhost:3000/users");
  }
  Logout(){
      if(this.username!=null){
        localStorage.clear();
      }
  }
  IsLogged():boolean{
    if(this.username!=null){
      return true;
    }
    return false;
  }
  IsAdmin(){
    console.log(this.role);
    if(this.role=='admin'){
      return true;
    }
    return false;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor(private http:HttpClient) { }
  postPlane(data:any){
    return this.http.post<any>("http://localhost:3000/planes/",data);
  }
  getPlane(){
    console.log(this.http.get<any>("http://localhost:3000/planes/"));
    return this.http.get<any>("http://localhost:3000/planes/");
  }

}

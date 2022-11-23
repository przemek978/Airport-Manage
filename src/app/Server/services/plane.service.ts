import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plane } from 'src/app/types/plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor(private http:HttpClient) { }
  postPlane(data:Plane){
    return this.http.post<Plane[]>("http://localhost:3000/planes/",data);
  }
  getPlane(){
    //console.log(this.http.get<any>("http://localhost:3000/planes/"));
    return this.http.get<Plane[]>("http://localhost:3000/planes/");
  }

}

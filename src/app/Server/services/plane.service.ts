import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plane } from 'src/app/types/plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  private url="http://localhost:3000/planes/";
  constructor(private http:HttpClient) { }

  postPlane(data:Plane){
    return this.http.post<Plane[]>(this.url,data);
  }
  getPlane(){
    return this.http.get<Plane[]>(this.url);
  }

}

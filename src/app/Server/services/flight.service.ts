import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }
  postFlight(data:any){
    return this.http.post<any>("http://localhost:3000/flights/",data);
  }
  getFlight(){
    return this.http.get<any>("http://localhost:3000/flights/");
  }
}

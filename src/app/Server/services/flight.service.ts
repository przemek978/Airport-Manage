import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from 'src/app/types/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }
  postFlight(data: Flight){
    return this.http.post<any>("http://localhost:3000/flights/",data);
  }
  getFlight(){
    return this.http.get<any>("http://localhost:3000/flights/");
  }
  putFlight(data: Flight, id: number) {
    return this.http.put<any>("http://localhost:3000/flights/" + id, data)
  }
  deleteFlight(id: number) {
    return this.http.delete<any>("http://localhost:3000/flights/" + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from 'src/app/types/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url="http://localhost:3000/flights/";

  constructor(private http:HttpClient) { }
  postFlight(data: Flight){
    return this.http.post<Flight[]>(this.url,data);
  }
  getFlight(){
    return this.http.get<Flight[]>(this.url);
  }
  getFlightid(id:number){
    return this.http.get<Flight>(this.url+id);
  }
  putFlight(data: any, id: number) {
    return this.http.put<any>(this.url + id, data)
  }
  deleteFlight(id: number) {
    return this.http.delete<any>(this.url + id);
  }
}

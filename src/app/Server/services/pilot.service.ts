import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pilot } from 'src/app/types/pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private url="http://localhost:3000/pilots/";

  constructor(private http:HttpClient) { }

  postPilot(data:Pilot){
    return this.http.post<Pilot[]>(this.url,data);
  }
  getPilot(){
    return this.http.get<Pilot[]>(this.url);
  }
}

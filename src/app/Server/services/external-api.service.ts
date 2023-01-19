import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalAPIService {

  private url='http://api.travelpayouts.com/data/en-GB/airports.json';
  constructor(private http:HttpClient) { }

  options:any;
  getDATA(){
    //this.postAuth();
    console.log(this.http.get<any[]>(this.url));
    this.options={
      header: "Access-Control-Allow-Origin: *"
    };
    return this.http.get<any[]>(this.url,this.options);
  }

}

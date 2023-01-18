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
      header: 'X-Access-Token 321d6a221f8926b5ec41ae89a3b2ae7b'
    };
    return this.http.get<any[]>(this.url,this.options);
  }

}

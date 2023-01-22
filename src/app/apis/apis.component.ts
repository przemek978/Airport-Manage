import { Component, OnInit } from '@angular/core';
import { ExternalAPIService } from '../Server/services/external-api.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class APIsComponent implements OnInit {

  data!:any;
  constructor(private extapi: ExternalAPIService) {
    console.log("AA")
  }

  ngOnInit(): void {

    //console.log(this.data);
  }

  click():void{
    this.extapi.getDATA().subscribe({
      next: (res) => {
        this.data=res;
        //this.data=this.data.data
        console.log(this.data)
      },
      error: () => {
          alert("blad")
      }
    });
  }


}

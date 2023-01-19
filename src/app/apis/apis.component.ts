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
    this.extapi.getDATA().subscribe({
      next: (res) => {
        //this.data=res;
      },
      error: () => {
          alert("blad1")
      }
    });
    //console.log(this.data);
  }


}

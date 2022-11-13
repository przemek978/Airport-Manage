import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../types/flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() flight!: Flight;
  @Input() prefix!:string;
  @Input() isOdd:boolean=true;
  @Input() isClicked:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  doUnClick(){
    this.isClicked=false;
  }

}

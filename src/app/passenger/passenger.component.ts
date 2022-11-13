import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'print-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  @Input() passenger!: Passenger;
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

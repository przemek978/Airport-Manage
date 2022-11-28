import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'print-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  @Input() passenger!: Passenger;

  constructor() { }

  ngOnInit(): void {
  }



}

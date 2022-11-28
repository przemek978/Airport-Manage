import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../types/flight';

@Component({
  selector: 'print-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input() flight!: Flight;

  constructor() { }

  ngOnInit(): void {
  }



}

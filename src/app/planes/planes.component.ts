import { Component, OnInit } from '@angular/core';
import { Plane } from '../types/plane';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  planes: Plane[]=[new Plane(1,"Samolot1",100), new Plane(2,"Samolot2",200)]
  selectedPlane!:Plane;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(plane: Plane): void {
    this.selectedPlane = plane;
  }

}

import { Component, OnInit } from '@angular/core';
import { PlaneService } from '../Server/services/plane.service';
import { Plane } from '../types/plane';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  //planes: Plane[]=[new Plane(1,"Samolot1",100), new Plane(2,"Samolot2",200)]
  selectedPlane!:Plane;
  planes: Plane[]=[];
  constructor(private planeservice:PlaneService) { }

  ngOnInit(): void {
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;
      console.log(res);});
    console.log(this.planes);
  }
  onSelect(plane: Plane): void {
    console.log(this.planes);
    console.log(plane);
    this.selectedPlane = plane;
  }

}

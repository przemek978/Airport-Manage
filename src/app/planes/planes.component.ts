import { Component, OnInit } from '@angular/core';
import { PlaneService } from '../Server/services/plane.service';
import { Plane } from '../types/plane';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  selectedPlane!:Plane;
  planes: Plane[]=[];
  constructor(private planeservice:PlaneService) { }

  ngOnInit(): void {
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;
      console.log(res);});
    console.log(this.planes);
  }
  onSelect(plane: Plane): void {
    //console.log(this.planes);
    //console.log(plane);
    this.selectedPlane = plane;
  }

}

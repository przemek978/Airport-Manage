import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Server/services/auth.service';
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
  constructor(public auth:AuthService,private planeservice:PlaneService) { }

  ngOnInit(): void {
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;});
  }
  onSelect(plane: Plane): void {
    this.selectedPlane = plane;
  }
  deletePlane(){
    this.planeservice.deletePlane(this.selectedPlane.id).subscribe(res=>{this.planes=res;});
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;});
  }

}

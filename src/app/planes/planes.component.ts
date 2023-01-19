import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Server/services/auth.service';
import { PlaneService } from '../Server/services/plane.service';
import { Plane } from '../types/plane';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddplaneComponent } from '../addplane/addplane.component';
import { EditplaneComponent } from '../editplane/editplane.component';
import { FlightService } from '../Server/services/flight.service';
import { Flight } from '../types/flight';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  selectedPlane!:Plane;
  planes: Plane[]=[];
  newPlane!:Plane;
  constructor(public dialog: MatDialog,public auth:AuthService,private planeservice:PlaneService) { }

  ngOnInit(): void {
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;});
  }
  onSelect(plane: Plane): void {
    this.selectedPlane = plane;
    console.log(this.selectedPlane);
  }
  deletePlane(){
    this.planeservice.deletePlane(this.selectedPlane.id).subscribe(res=>{this.planes=res;});
    this.planeservice.getPlane().subscribe(res=>{this.planes=res;});
    window.location.reload();
  }

  openDialog(add: boolean,edit: boolean) {
    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddplaneComponent, {
        width: '50%',
        data: {}
      })
    } else if (edit) {
      console.log(this.selectedPlane);
      dialogRef = this.dialog.open(EditplaneComponent, {
        width: '50%',
        data: this.selectedPlane
      })
    } else
      return;
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.planeservice.getPlane().subscribe(res=>{this.planes=res;});


        }
      })
  }

}

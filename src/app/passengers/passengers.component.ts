import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddpassengertoflyComponent } from '../addpassengertofly/addpassengertofly.component';
import { EditpassengerComponent } from '../editpassenger/editpassenger.component';
import { AuthService } from '../Server/services/auth.service';
import { FlightService } from '../Server/services/flight.service';
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  private flightid!: number;
  passengers: Passenger[]=[];
  selectedPassenger!:Passenger;
  private newPass:Passenger=new Passenger("","",0,"",0);
  flight!:Flight;
  constructor(public auth:AuthService,public dialog: MatDialog,private flightservice:FlightService,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.flightid = Number(params.get('id')));
    this.flightservice.getFlightid(this.flightid)
    .subscribe(res=>{
          this.flight=res;
    });

  }

  onSelect(passenger:Passenger): void {
    this.selectedPassenger = passenger;
  }
  deletePassenger(){
    this.flight.passengers.forEach((passenger,index) => {
      if(passenger.id==this.selectedPassenger.id){
        this.flight.passengers.splice(index,1);
        console.log(this.flight.passengers)
        console.log(index)
      }
    });

    this.flightservice.putFlight(this.flight,this.flight.id).subscribe({
      next: (res) => {
        alert("Usunięto pasażera")
      },
      error: () => {
        alert("Wystąpił błąd");
      }
    });
  }

  openDialog(add: boolean,edit: boolean) {
    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddpassengertoflyComponent, {
        width: '50%',
        data: {pass: this.newPass,flight: this.flight}
      })
    } else if (edit) {
      console.log(this.selectedPassenger);
      dialogRef = this.dialog.open(EditpassengerComponent, {
        width: '50%',
        data: {pass:this.selectedPassenger,flight: this.flight}
      })
    } else
      return;
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {

          if (result.data.name.length <3) {
              alert("Za krótkie imie")
          }
          if(result.data.id== undefined){
            result.data.id=this.passengers.length+1;
          }

        }
      })
  }
}

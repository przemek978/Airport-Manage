import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddpassengertoflyComponent } from '../addpassengertofly/addpassengertofly.component';
import { EditpassengerComponent } from '../editpassenger/editpassenger.component';
import { FlightService } from '../Server/services/flight.service';
import { Flight } from '../types/flight';
import { Passenger } from '../types/passenger';
import { Pilot } from '../types/pilot';
import { Plane } from '../types/plane';

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
  constructor(public dialog: MatDialog,private flightservice:FlightService,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.flightid = Number(params.get('id')));
    //this.passengers=this.flight.passengers;
    this.flightservice.getFlightid(this.flightid).subscribe(res=>{
          this.flight=res;});
  }


  onSelect(passenger:Passenger): void {
    this.selectedPassenger = passenger;
  }
  openDialog(add: boolean,edit: boolean) {
    //console.log(this.flight);
    //console.log(this.passengers);
    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddpassengertoflyComponent, {
        width: '30%',
        data: this.newPass
        // {name: this.newPass.name ,surname: 'a',phone: '',date: ''}
      })
    } else if (edit) {
      console.log(this.selectedPassenger);
      dialogRef = this.dialog.open(EditpassengerComponent, {
        width: '30%',
        data: this.selectedPassenger
      })
    } else
      return;
      dialogRef.afterClosed().subscribe(result => {
        //console.log(result.data);
        if (result !== undefined) {

          if (result.data.name.length <3) {
              alert("Za krótkie imie")
          }
          if(result.data.id== undefined){
            result.id=this.passengers.length+1;
          }
          if(add){
            if(this.flight.passengers==undefined){
              this.flight.passengers=[];
            }
            this.flight.passengers.push(new Passenger(result.data.name,result.data.surname,result.data.phone,result.data.birth,this.flight.passengers.length+1));
            this.flightservice.putFlight(this.flight,this.flightid).subscribe({
              next: (res) => {
                alert("Dodano pasażera")
              },
              error: () => {
                alert("Wystąpił błąd");
              }
            });
          }
          else if(edit){
            this.passengers.forEach((obj, index, tab) =>{
              if(obj === this.selectedPassenger){
                tab[index] = this.selectedPassenger;
                //this.passengers.editPassenger(this.newPass, this.selectedPassenger); dodac dodanie do serwisu
                this.selectedPassenger = tab[index];
              }
            })
          }

        }
      })
  }

  // PassengerClicked(Passenger:Passenger,ind:number):void{
  //   this.whichClicked=ind;
  //   console.log("Passenger clicked",Passenger,this.whichClicked);

  // }
  // get Flightid(){
  //   return this.flightid;
  // }
  // set Flightid(flightid:string){
  //   this.flightid=flightid;
  // }

}

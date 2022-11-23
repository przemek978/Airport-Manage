import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddpassengertoflyComponent } from '../addpassengertofly/addpassengertofly.component';
import { EditpassengerComponent } from '../editpassenger/editpassenger.component';
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
  passengers!: Passenger[];
  selectedPassenger!:Passenger;
  private newPass!:Passenger;
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  passengers1: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000",1),
  new Passenger("Adam","Nowak",606232556,"12-05-1984",2),
  new Passenger("Andrzej","Malinowski",506243445,"30-09-1996",3),
  new Passenger("Anna","Wiśniewska",786345322,"19-01-1967",4)];
  passengers2: Passenger[]=[ new Passenger("Jan","Kowalski",517355566,"24-12-2000",1),
  new Passenger("Adam","Nowak",606232556,"12-05-1984",2),
  new Passenger("Anna","Wiśniewska",786345322,"19-01-1967",4)];

  flights: Flight[]=[ new Flight(1,new Plane(1,"Samolot1",100), new Pilot("Franek","Nowal", 1), new Pilot("Sebastian","Kowal", 2), new Date("2000-01-21")),
  new Flight(2,new Plane(2,"Samolot2",200), new Pilot("Franek","Nowal", 1), new Pilot("Sebastian","Kowal", 2), new Date("2001-01-21"))];
 // whichClicked:number=-1;
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(public dialog: MatDialog,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.flightid = Number(params.get('id')));
    //console.log(this.route.snapshot.queryParams);
    //console.log(this.route.paramMap.subscribe(params => this.flightsid = params.get('id')));
    this.passengers=this.flights[this.flightid-1].passengers;
    //this.passengers=this.passengers1;
  }

  decide():boolean{
    return true;
  }
  onSelect(passenger:Passenger): void {
    this.selectedPassenger = passenger;
  }
  openDialog(add: boolean,edit: boolean) {

    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddpassengertoflyComponent, {
        width: '30%',
        data: {name: '',surname: '',phone: '',date: ''}
      })
    } else if (edit) {
      dialogRef = this.dialog.open(EditpassengerComponent, {
        width: '30%',
        data: this.selectedPassenger
      })
    } else
      return;
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result !== undefined) {
          if (result.Name.length === 0) {

          }
          if(result.id== undefined){
            result.id=this.passengers.length+1;
          }
          //this.newPass = new Passenger(result.Name,result.Surname,result.Phone,result.Birth,result.Id);

          if(add){
            this.passengers.push(this.newPass);
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

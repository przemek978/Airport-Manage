import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddpassengertoflyComponent } from '../addpassengertofly/addpassengertofly.component';
import { EditpassengerComponent } from '../editpassenger/editpassenger.component';
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
  temp!:any;
  constructor(public dialog: MatDialog,private flightservice:FlightService,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.flightid = Number(params.get('id')));
    //this.passengers=this.flight.passengers;
    this.flightservice.getFlightid(this.flightid)
    .subscribe(res=>{
          this.flight=res;
          // this.temp=this.flight;
          // this.flight.passengers=[];
          // for(let i=0;i<this.temp.passnger;i++){
          //   this.flight.passengers.push(new Passenger(this.temp.passengers._name,this.temp.passengers._surname,this.temp.passengers._phone_nr,this.temp.passengers._birthday,this.temp.passengers._id));
          // }
    });

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
        data: {pass: this.newPass,flight: this.flight}
        // {name: this.newPass.name ,surname: 'a',phone: '',date: ''}
      })
    } else if (edit) {
      console.log(this.selectedPassenger);
      dialogRef = this.dialog.open(EditpassengerComponent, {
        width: '30%',
        data: {pass:this.selectedPassenger,flight: this.flight}
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
            result.data.id=this.passengers.length+1;
          }
          if(add){

           // console.log(result);
          //  this.newPass=new Passenger(result.data.name,result.data.surname,result.data.phone_nr,result.data.birthday,this.flight.passengers.length+1);
          //  // this.newPass.id=this.flight.passengers.length+1;
          //  // this.newPass.name=result.data.name;
          //  // this.newPass.surname=result.data.surname;
          //  // this.newPass.phone_nr=result.data.phone_nr;
          //  // this.newPass.birthday=result.data.birthday;
          //  console.log(this.newPass);
          //  this.flight.passengers.push(this.newPass);
          //  console.log(this.flight);
          //  this.flightservice.putFlight(this.flight,this.flightid).subscribe({
          //    next: (res) => {
          //      alert("Dodano pasażera")
          //    },
          //    error: () => {
          //      alert("Wystąpił błąd");
          //    }
          //  });
          }
          else if(edit){
            // this.passengers.forEach((obj, index, tab) =>{
            //   if(obj === this.selectedPassenger){
            //     tab[index] = this.selectedPassenger;
            //     //this.passengers.editPassenger(this.newPass, this.selectedPassenger); dodac dodanie do serwisu
            //     this.selectedPassenger = tab[index];
            //   }
            // })
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

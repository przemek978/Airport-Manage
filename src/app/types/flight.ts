import { Passenger } from "./passenger"
import { Pilot } from "./pilot";
import { Plane } from "./plane";

export class Flight {

  private passengers!: Passenger[];
  constructor(
    private id:number,
    private plane: Plane,
    private pilots: Pilot[],
    private date: Date
  ) {}

  public addpassager(pass:Passenger){
    this.passengers.push(pass);
  }
  public addpilots(pilot1:Pilot,pilot2:Pilot){
    this.pilots.push(pilot1);
    this.pilots.push(pilot2);
  }
  get Id():number{
    return this.id;
  }
  get Plane(): Plane {
    return this.plane;
  }
  get Passengers(): Passenger[] {
    return this.passengers;
  }
  get Pilots(): Pilot[] {
    return this.pilots;
  }
  get Date(): Date {
    return this.date;
  }
  set Id(id:number){
    this.id=id;
  }
  set Plane(p: Plane) {
    this.plane = p;
  }
  set Passengers(Passengers: Passenger[]) {
    this.passengers = this.passengers;
  }
  set Pilots(pilots: Pilot[]) {
    this.pilots = pilots;
  }
  set Date(date: Date) {
    this.date = date;
  }
}

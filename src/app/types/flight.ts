import { Passenger } from "./passenger"
import { Pilot } from "./pilot";
import { Plane } from "./plane";

export class Flight {

  private passengers!: Passenger[];
  constructor(
    private id:number,
    private plane: Plane,
    private pilot1: Pilot,
    private pilot2: Pilot,
    private date: Date
  ) {}

  public addpassager(pass:Passenger){
    this.passengers.push(pass);
  }
  public addpilots(pilot1:Pilot,pilot2:Pilot){
    this.pilot1=pilot1;
    this.pilot2=pilot2;
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
  get Pilot1(): Pilot {
    return this.pilot1;
  }
  get Pilot2(): Pilot {
    return this.pilot2;
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
  set Pilot1(pilot:Pilot) {
    this.pilot1 = pilot;
  }
  set Pilot2(pilot:Pilot) {
    this.pilot2 = pilot;
  }
  set Date(date: Date) {
    this.date = date;
  }
}

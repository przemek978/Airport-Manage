import { Passenger } from "./passenger"
import { Pilot } from "./pilot";
import { Plane } from "./plane";

export class Flight {

  private passengers!: Passenger[];
  constructor(
    private _id:number,
    private _plane: Plane,
    private _pilot1: Pilot,
    private _pilot2: Pilot,
    private _date: Date
  ) {}

  public addpassager(pass:Passenger){
    this.passengers.push(pass);
  }
  public addpilots(pilot1:Pilot,pilot2:Pilot){
    this._pilot1=pilot1;
    this._pilot2=pilot2;
  }
  get Id():number{
    return this._id;
  }
  get Plane(): Plane {
    return this._plane;
  }
  get Passengers(): Passenger[] {
    return this.passengers;
  }
  get Pilot1(): Pilot {
    return this._pilot1;
  }
  get Pilot2(): Pilot {
    return this._pilot2;
  }
  get Date(): Date {
    return this._date;
  }
  set Id(id:number){
    this._id=id;
  }
  set Plane(p: Plane) {
    this._plane = p;
  }
  set Passengers(Passengers: Passenger[]) {
    this.passengers = this.passengers;
  }
  set Pilot1(pilot:Pilot) {
    this._pilot1 = pilot;
  }
  set Pilot2(pilot:Pilot) {
    this._pilot2 = pilot;
  }
  set Date(date: Date) {
    this._date = date;
  }
}

import { Passenger } from "./passenger"
import { Pilot } from "./pilot";
import { Plane } from "./plane";

export class Flight {

  private _passengers!: Passenger[];
  constructor(
    private _id:number,
    private _plane: Plane,
    private _pilot1: Pilot,
    private _pilot2: Pilot,
    private _date: Date
  ) {}

  public addpassenger(pass:Passenger){
    this.passengers.push(pass);
  }
  public addpilots(pilot1:Pilot,pilot2:Pilot){
    this._pilot1=pilot1;
    this._pilot2=pilot2;
  }
  get id():number{
    return this._id;
  }
  get plane(): Plane {
    return this._plane;
  }
  get passengers(): Passenger[] {
    return this._passengers;
  }
  get pilot1(): Pilot {
    return this._pilot1;
  }
  get pilot2(): Pilot {
    return this._pilot2;
  }
  get date(): Date {
    return this._date;
  }
  set id(id:number){
    this._id=id;
  }
  set plane(p: Plane) {
    this._plane = p;
  }
  set passengers(Passengers: Passenger[]) {
    this.passengers = this.passengers;
  }
  set pilot1(pilot:Pilot) {
    this._pilot1 = pilot;
  }
  set pilot2(pilot:Pilot) {
    this._pilot2 = pilot;
  }
  set date(date: Date) {
    this._date = date;
  }
}

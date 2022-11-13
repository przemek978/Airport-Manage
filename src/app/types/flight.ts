import { Passenger } from "./passenger"
import { Pilot } from "./pilot";
import { Plane } from "./plane";

export class Flight {

  constructor(
    private plane: Plane,
    private passengers: Passenger[],
    private pilots: Pilot[],
    private data: Date
  ) {}

  public addpassager(pass:Passenger){
    this.passengers.push(pass);
  }
  public addpilots(pilot1:Pilot,pilot2:Pilot){
    this.pilots.push(pilot1);
    this.pilots.push(pilot2);
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
  get Data(): Date {
    return this.data;
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
  set Data(data: Date) {
    this.data = data;
  }
}

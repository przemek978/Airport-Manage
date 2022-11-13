import { Passenger } from "./passenger"

export class Flight {
  //private ticket:Ticket;
  constructor(
    private plane: string,
    private passengers: Passenger[],
    private pilots: string,
    private data: Date
  ) {}

  public addpassager(pass:Passenger){
    this.passengers.push(pass);
  }
  get Plane(): string {
    return this.plane;
  }
  get Passengers(): Passenger[] {
    return this.passengers;
  }
  get Pilots(): string {
    return this.pilots;
  }
  get Data(): Date {
    return this.data;
  }
  set Plane(p: string) {
    this.plane = p;
  }
  set Passengers(Passengers: Passenger[]) {
    this.passengers = this.passengers;
  }
  set Pilots(pilots: string) {
    this.pilots = pilots;
  }
  set Data(data: Date) {
    this.data = data;
  }
}

export class Flightroute {
  //private ticket:Ticket;
  constructor(private _departure: string, private _arrival: string) {}

  get Departure(): string {
    return this._departure;
  }
  get Arrival(): string {
    return this._arrival;
  }
  set Departure(d: string) {
    this._departure = d;
  }
  set Arrival(a: string) {
    this._arrival = a;
  }
}

export class Flightroute {
  //private ticket:Ticket;
  constructor(private _departure: string, private _arrival: string) {}

  get departure(): string {
    return this._departure;
  }
  get arrival(): string {
    return this._arrival;
  }
  set departure(d: string) {
    this._departure = d;
  }
  set arrival(a: string) {
    this._arrival = a;
  }
}

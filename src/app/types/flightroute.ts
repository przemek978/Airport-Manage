export class Flightroute {
  //private ticket:Ticket;
  constructor(private departure: string, private arrival: string) {}

  get Departure(): string {
    return this.departure;
  }
  get Arrival(): string {
    return this.arrival;
  }
}

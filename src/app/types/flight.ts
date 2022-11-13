export class Flight {
  //private ticket:Ticket;
  constructor(
    private plane: string,
    private passengers: string,
    private pilots: string,
    private data: Date
  ) {}

  get Plane(): string {
    return this.plane;
  }
  get Passengers(): string {
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
  set Passengers(Passengers: string) {
    this.passengers = this.passengers;
  }
  set Pilots(pilots: string) {
    this.pilots = pilots;
  }
  set Data(data: Date) {
    this.data = data;
  }
}

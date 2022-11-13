export class Plane {
  //private ticket:Ticket;
  constructor(private name: string, private capacity: number) {}

  get Name(): string {
    return this.name;
  }
  get Capacity(): number {
    return this.capacity;
  }
  set Name(n: string) {
    this.name = n;
  }
  set Capacity(c: number) {
    this.capacity = c;
  }
}

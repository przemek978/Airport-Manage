export class Plane {
  //private ticket:Ticket;
  constructor(private id: number, private name: string, private capacity: number) {}

  get Id(): number {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }
  get Capacity(): number {
    return this.capacity;
  }
  set Id(i: number) {
    this.Id = i;
  }
  set Name(n: string) {
    this.name = n;
  }
  set Capacity(c: number) {
    this.capacity = c;
  }
}

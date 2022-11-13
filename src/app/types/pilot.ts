export class Pilot {
  //private ticket:Ticket;
  constructor(
    private name: string,
    private surname: string,
    private licence_id: number
  ) {}

  get Name(): string {
    return this.name;
  }
  get Passengers(): string {
    return this.surname;
  }
  get Licence_id(): number {
    return this.licence_id;
  }
  set Name(n: string) {
    this.name = n;
  }
  set Surname(s: string) {
    this.surname = s;
  }
  set Licence_id(l_id: number) {
    this.licence_id = l_id;
  }
}

import { Person } from "./person";

export class Pilot extends Person{
  //private ticket:Ticket;
  constructor(name: string,surname: string,private _licence_id: number) {
    super(name,surname);
  }

  // get name(): string {
  //   return this._name;
  // }
  // get passengers(): string {
  //   return this._surname;
  // }
  get licence_id(): number {
    return this._licence_id;
  }
  // set name(n: string) {
  //   this._name = n;
  // }
  // set surname(s: string) {
  //   this._surname = s;
  // }
  set licence_id(l_id: number) {
    this._licence_id = l_id;
  }
}

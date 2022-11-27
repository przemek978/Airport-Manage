import { Person } from "./person";

export class Pilot extends Person{
  //private ticket:Ticket;
  constructor(name: string,surname: string,private _licence_id: number) {
    super(name,surname);
  }
  get licence_id(): number {
    return this._licence_id;
  }
  set licence_id(l_id: number) {
    this._licence_id = l_id;
  }
}

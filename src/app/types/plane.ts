export class Plane {
  constructor(private _id: number, private _name: string, private _capacity: number) {}

  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get capacity(): number {
    return this._capacity;
  }
  set id(i: number) {
    this._id = i;
  }
  set name(n: string) {
    this._name = n;
  }
  set capacity(c: number) {
    this._capacity = c;
  }
}

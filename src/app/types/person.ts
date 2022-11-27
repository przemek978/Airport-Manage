export class Person{
  private _name:string;
  private _surname:string;
  constructor(name:string,surname:string){
    this._name=name;
    this._surname=surname;
  }

  get name(): string {
    return this._name;
  }
  get surname(): string {
    return this._surname;
  }
  set name(n: string) {
    this._name = n;
  }
  set surname(s: string) {
    this._surname = s;
  }
}

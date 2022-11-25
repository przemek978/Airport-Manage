export class Passenger{
  private _name:string;
  private _surname:string;
  private _phone_nr:number;
  private _birthday:string;
  private _id:number;

  //private ticket:Ticket;
  constructor(name:string,surname:string,phone_nr:number,birthday:string,id:number){

    this._id=id;
    this._name=name;
    this._surname=surname;
    this._phone_nr=phone_nr;
    this._birthday=birthday;
  }

  get id():number{
    return this._id;
  }
  public get name():string{
    return this._name;
  }
  public get surname():string{
    return this._surname;
  }
  public get phone_nr():number{
    return this._phone_nr;
  }
  public get birthday():string{
    return this._birthday;
  }
  set id(id:number){
    this._id=id;
  }
  set name(n:string){
    this._name=n;
  }
  set surname(sn:string){
    this._surname=sn;
  }
  set phone_nr(phone:number){
    this._phone_nr=phone;
  }
  set birthday(birth:string){
    this._birthday=birth;
  }
}

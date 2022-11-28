import { Person } from "./person";

export class Passenger extends Person{
  private _phone_nr:number;
  private _birthday:string;
  private _id:number;

  constructor(name:string,surname:string,phone_nr:number,birthday:string,id:number){

    super(name,surname);
    this._id=id;
    this._phone_nr=phone_nr;
    this._birthday=birthday;
  }

  get id():number{
    return this._id;
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

  set phone_nr(phone:number){
    this._phone_nr=phone;
  }
  set birthday(birth:string){
    this._birthday=birth;
  }
}

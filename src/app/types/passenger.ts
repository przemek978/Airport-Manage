export class Passenger{


  //private ticket:Ticket;
  constructor(private _name:string,private _surname:string,private _phone_nr:number,private _birthday:string,private _id:number){

  }
  get id():number{
    return this._id;
  }
  get name():string{
    return this._name;
  }
  get surname():string{
    return this._surname;
  }
  get phone():number{
    return this._phone_nr;
  }
  get birth():string{
    return this._birthday;
  }
  set od(id:number){
    this._id=id;
  }
  set name(n:string){
    this._name=n;
  }
  set surname(sn:string){
    this._surname=sn;
  }
  set phone(phone:number){
    this._phone_nr=phone;
  }
  set birth(birth:string){
    this._birthday=birth;
  }
}

export class Passenger{


  //private ticket:Ticket;
  constructor(private name:string,private surname:string,private phone_nr:number,private birthday:string,private id:number){

  }
  get Id():number{
    return this.id;
  }
  get Name():string{
    return this.name;
  }
  get Surname():string{
    return this.surname;
  }
  get Phone():number{
    return this.phone_nr;
  }
  get Birth():string{
    return this.birthday;
  }
  set Id(id:number){
    this.id=id;
  }
  set Name(n:string){
    this.name=n;
  }
  set Surname(sn:string){
    this.surname=sn;
  }
  set Phone(phone:number){
    this.phone_nr=phone;
  }
  set Birth(birth:string){
    this.birthday=birth;
  }
}

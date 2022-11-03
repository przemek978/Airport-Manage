export class Passenger{

  //private ticket:Ticket;
  constructor(private name:string,private surname:string,private phone_nr:number,private birthday:string){

  }
  public get getname():string{
    return this.name;
  }
  public get getsurname():string{
    return this.surname;
  }
  public get getphone():number{
    return this.phone_nr;
  }
  public get getbirth():string{
    return this.birthday;
  }
  public set setname(n:string){
    this.name=n;
  }
  public set setsurname(sn:string){
    this.surname=sn;
  }
  public set setphone(phone:number){
    this.phone_nr=phone;
  }
  public set setbirth(birth:string){
    this.birthday=birth;
  }
}

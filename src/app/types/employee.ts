export class Employee{
  constructor(private _id:number,private _username:string,private _password:string ){
    //private name:string,private surname:string,private position:string,
    //this._username=username;
  }
  public get username():string{
    return this._username;
  }
  get password():string{
    return this._password;
  }
  set username(username:string){
    this._username=username;
  }
  set password(pass:string){
    this._password=pass;
  }
}

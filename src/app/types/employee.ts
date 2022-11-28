import { Person } from "./person";

export class Employee extends Person{
  constructor(private _id:number,private _username:string,private _password:string, private _role:string,name:string,surname:string){
    super(name,surname);
  }
  public get username():string{
    return this._username;
  }
  public get password():string{
    return this._password;
  }
  public get role():string{
    return this._role;
  }
  set username(username:string){
    this._username=username;
  }
  set password(pass:string){
    this._password=pass;
  }
  set role(role:string){
    this._role=role;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveSession(user:string){
    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('userLogged',user);
  }
  getSession(user:string):boolean{
    const usuario=localStorage.getItem('userLogged');

    return (usuario==user);
  }
  removeSession(user:string):boolean{
    localStorage.removeItem('userLogged');
    return true;
  }
}

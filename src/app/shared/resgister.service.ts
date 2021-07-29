import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class ResgisterService {

  constructor(private http: HttpClient) { }

  public logInUserFromRemote(user:User):Observable<any>{
      return this.http.post<any>("http://localhost:8080/userLogin", user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
    console.log(user.email);
      console.log(user.firstname);
      console.log(user.lastname);
      console.log(user.password);
    return this.http.post<any>("http://localhost:8080/userRegister", user)
  }

// private _url : string = "http://localhost:8080/userRegister";


//   registerUserFromRemote(user : User): Observable<any>{
//     return this.http.post<any>(this._url ,user)
//                                         .catch(this.errorHandler);
//   }  

//   errorHandler(error:HttpErrorResponse){
//     return Observable.throw(error.message || "server error")
    
//   }
}
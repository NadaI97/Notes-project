import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: string = "http://localhost:3000/api/v1/"
  currentUser: any;
  constructor(private _HttpClient : HttpClient) { }


  register(obj: any):Observable<any>
  
  {
   return this._HttpClient.post(`${this.baseURL}user/signUp`, obj)
  }

  login(obj: any):Observable<any>
  
  {
   return this._HttpClient.post(`${this.baseURL}user/signIn`, obj)
  }

  userData(token: string)
  
  {

   localStorage.setItem('userToken', `Bearer ${token}` )
  //  localStorage.setItem('userID', this.currentUser._id)
  //   this.currentUser = jwtDecode(token);

    }
}


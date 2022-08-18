import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseURL: string = "http://localhost:3000/api/v1/"

  constructor(private _HttpClient : HttpClient ) { }

  addNewNote(obj: any):Observable<any>
  
  {
   return this._HttpClient.post(`${this.baseURL}note/newNote`, obj )
  }



}

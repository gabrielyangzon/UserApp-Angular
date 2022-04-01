import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private _jsonURL = 'assets/users.json'

  public getUsers() : Observable<UserModel[]>{

    return this.http.get<UserModel[]>(this._jsonURL)

  }

}

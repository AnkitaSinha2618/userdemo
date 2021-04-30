import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public url = "https://jsonplaceholder.typicode.com/";

  //User All User List
  public getUserList():Observable<any>{
    return this.http.get(this.url + 'users' )
  }

  //user user
  public getUser(id:number):Observable<any>{
    return this.http.get(this.url + 'users/' +id)
  }

  // user create
  public createUser(user:any):Observable<any>{
    return this.http.post(this.url + 'users', user);
  }

  //user update
  public updateUser(user:any, id:number):Observable<any>{
    user.id = id;
    return this.http.put(this.url+'users/'+id, user)
  }

  //user Delete
  public deleteUser(id:number):Observable<any>{
    return this.http.delete(this.url+'users/'+id)
  }
}

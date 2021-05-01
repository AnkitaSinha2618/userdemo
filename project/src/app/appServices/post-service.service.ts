import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  public url = "https://jsonplaceholder.typicode.com/";

  //Post All Post List
  public getPostList():Observable<any>{
    return this.http.get(this.url + 'posts' )
  }

  //Post post
  public getPost(id:number):Observable<any>{
    return this.http.get(this.url + 'posts/' +id)
  }

  // Post create
  public createPost(post:any):Observable<any>{
    return this.http.post(this.url + 'posts', post);
  }

  //Post update
  public updatePost(post:any, id:number):Observable<any>{
    post.id = id;
    return this.http.put(this.url+'posts/'+id, post)
  }

  //Post Delete
  public deletePost(id:number):Observable<any>{
    return this.http.delete(this.url+'posts/'+id)
  }
}

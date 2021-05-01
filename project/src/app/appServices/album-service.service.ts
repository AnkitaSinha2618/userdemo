import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private http:HttpClient) { }

  public url = "https://jsonplaceholder.typicode.com/";

  //Album All Album List
  public getAlbumList():Observable<any>{
    return this.http.get(this.url + 'albums' )
  }

  //Album album
  public getAlbum(id:number):Observable<any>{
    return this.http.get(this.url + 'albums/' +id)
  }

  // Album create
  public createAlbum(album:any):Observable<any>{
    return this.http.post(this.url + 'albums', album);
  }

  //Album update
  public updateAlbum(album:any, id:number):Observable<any>{
    album.id = id;
    return this.http.put(this.url+'albums/'+id, album)
  }

  //Album Delete
  public deleteAlbum(id:number):Observable<any>{
    return this.http.delete(this.url+'albums/'+id)
  }
}


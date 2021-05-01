import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlbumServiceService} from '../appServices/album-service.service'

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.scss']
})
export class AllAlbumsComponent implements OnInit {

  constructor(private _service: AlbumServiceService, private router: Router) { }
  public albums: any = [];


  ngOnInit(): void {
     //Getting all album list data
     this._service.getAlbumList().subscribe((data: any) => {
      this.albums = data;
    })
  }

     // Navigating to update page for update based on id
  update(id: number) {
    this.router.navigate(['update-album/' + id]);
  }

  //Deleteting data based on id
  delete(id: number) {
    if (confirm("Are you sure to delete")) {
      this._service.deleteAlbum(id).subscribe((data: any) => {
        console.log("data deleted");

      })
    }
  }
}

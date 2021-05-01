import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlbumServiceService } from '../appServices/album-service.service'


@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private _service:AlbumServiceService) { }

  public id: any;

  public album = new FormGroup({
    userId: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required])
  })
   

  ngOnInit(): void {
     //Getting Id from active URL
     this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    //If Id is present then getting data from server and setting into form
    if (this.id) {
      this._service.getAlbum(this.id).subscribe((data: any) => {
        this.album.patchValue(data);
      })
    }
  }

  //Calling create service to created data to server
  create() {
    this._service.createAlbum(this.album.value).subscribe(data => {
      console.log(data);
      alert("Album Creted");
    });
    this.album.reset();
  }

  //Calling update service for update data to server
  update() {
    this._service.updateAlbum(this.album.value, this.id).subscribe(data => {
      console.log(data);
      alert("Album Updated");
    })

  }

}

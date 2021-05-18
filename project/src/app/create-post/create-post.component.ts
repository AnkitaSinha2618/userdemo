import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../appServices/post-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private _service:PostServiceService,private _snackBar: MatSnackBar,public router:Router) { }

  public id: any;

  public post = new FormGroup({
    userId: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required])

  })
   

  ngOnInit(): void {
     //Getting Id from active URL
     this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    //If Id is present then getting data from server and setting into form
    if (this.id) {
      this._service.getPost(this.id).subscribe((data: any) => {
        this.post.patchValue(data);
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration:3000});    
  }

  //Calling create service to created data to server
  create() {
    this._service.createPost(this.post.value).subscribe((data:any) => {
      console.log(data);
      this.openSnackBar("Post Created Successfully","Create");
    });
    this.post.reset();
  }

  //Calling update service for update data to server
  update() {
    this._service.updatePost(this.post.value, this.id).subscribe((data:any) => {
      console.log(data);
      this.openSnackBar("Post Updated Successfully","Update");
      this.router.navigate(['/posts'])
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PostServiceService} from '../appServices/post-service.service'

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  constructor(private _service: PostServiceService, private router: Router) { }
  public posts: any = [];

  ngOnInit(): void {
    //Getting all Post list data
    this._service.getPostList().subscribe((data: any) => {
     this.posts = data;
   })
 }

    // Navigating to update page for update based on id
 update(id: number) {
   this.router.navigate(['update-post/' + id]);
 }

 //Deleteting data based on id
 delete(id: number) {
   if (confirm("Are you sure to delete")) {
     this._service.deletePost(id).subscribe((data: any) => {
       console.log("data deleted");

     })
   }
 }

}

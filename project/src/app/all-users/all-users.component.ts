import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../appServices/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private _service:UserServiceService, private router:Router) { }
   public users: any = [];

  ngOnInit(): void {
    this._service.getUserList().subscribe((data:any) => {
      this.users=data;
    })
  }

  update(id:number){
    this.router.navigate(['update-user/' +id]);
  }

  delete(id:number){
    if(confirm("Are you sure to delete")){
      this._service.deleteUser(id).subscribe((data:any) => {
        console.log("data deleted");
        
      })
    }
  }


}

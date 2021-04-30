import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../appServices/user-service.service'


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private _service: UserServiceService, private activateRoute: ActivatedRoute) { }

  public id: any;
  public emailPattern = '^[a-z-A-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public zipcodePattern = '^\\d{5}[\\-]?\\d{4}$';

  public user = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
    address: new FormGroup({
      street: new FormControl(null, [Validators.required]),
      suite: new FormControl(null,),
      city: new FormControl(null, [Validators.required]),
      zipcode: new FormControl(null, [Validators.required,Validators.pattern(this.zipcodePattern)]),
      geo: new FormGroup({
        lat: new FormControl(null,),
        lng: new FormControl(null,),
      }),
    }),

    phone: new FormControl(null, [Validators.required]),
    website: new FormControl(null, [Validators.required]),
    company: new FormGroup({
      name: new FormControl(null, [Validators.required]),
      catchPharse: new FormControl(null,),
      bs: new FormControl(null,),
    }),

  })

  ngOnInit(): void {

    //Getting Id from active URL
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    //If Id is present then getting data from server and setting into form
    if (this.id) {
      this._service.getUser(this.id).subscribe((data: any) => {
        this.user.patchValue(data);
      })
    }
  }

  //Calling create service to created data to server
  create() {
    this._service.createUser(this.user.value).subscribe(data => {
      console.log(data);
      alert("User Creted");
    });
    this.user.reset();
  }

  //Calling update service for update data to server
  update() {
    this._service.updateUser(this.user.value, this.id).subscribe(data => {
      console.log(data);
      alert("User Updated");
    })

  }
}

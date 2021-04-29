import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  public emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public user = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required,Validators.pattern(this.emailPattern)]),
    address: new FormGroup({
      street : new FormControl(null, [Validators.required]),
      suite : new FormControl(null,),
      city : new FormControl(null, [Validators.required]),
      zipcode : new FormControl(null, [Validators.required]),
      geo : new FormGroup({
        lat : new FormControl(null,),
        lng : new FormControl(null,),
      }),
    }),

    phone: new FormControl(null, [Validators.required]),
    website: new FormControl(null, [Validators.required]),
    company : new FormGroup({
      name : new FormControl(null, [Validators.required]),
      catchPharse : new FormControl(null,),
      bs : new FormControl(null,),
    }),

  })

  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.user.value);
    
  }
}

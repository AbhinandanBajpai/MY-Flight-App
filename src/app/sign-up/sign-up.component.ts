import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flightService } from '../service/flight.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  message:string="";
  signUpForm:FormGroup
  signUpFlag:boolean=false;

  constructor(private flightService:flightService) {
    this.signUpForm = new FormGroup({
      userName: new FormControl("",[
        Validators.required
      ]),
      email: new FormControl("",[
        Validators.required
      ]),
      password: new FormControl("",[
        Validators.required
      ]),
      confirmPassword: new FormControl("",[
        Validators.required
      ])
    });

   }

  ngOnInit(): void {
  }

  onSignUp(){
    console.log(this.signUpForm.value);
    this.flightService.userSignUp(this.signUpForm.value).subscribe(res=>{
      console.log(res);
      this.signUpForm.reset();
      this.message="Registration Is Successfull";
      this.signUpFlag=!this.signUpFlag;
    })
  }

}

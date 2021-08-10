import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../Models/UserModel';
import { flightService } from '../service/flight.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup
  email:string="";
  password:string="";
  loginFlag:boolean=true;
  messageForLogIn:string="please try again";

  user:UserModel[]=[];

  constructor(private router:Router, private flightService:flightService ) { 


    console.log(12345);
    this.flightService.getAllUsers().subscribe((res:any)=>{
      console.log(res);
      this.user=res;
    });

    // const arrr = this.flightService.getAllUsers().subscribe();
    

    // let userData = JSON.parse(localStorage.getItem('users') || '');
    
    // console.log("Single " + userData.id +" "+ userData.Email+" "+ userData.password);
       
  
    this.loginFormGroup = new FormGroup({
      email: new FormControl("",[
        Validators.required
      ]),
      password: new FormControl("",[
        Validators.required
      ]),
      admin: new FormControl("",[])
    });
    
  }

  ngOnInit(): void {
  }

  onLogin(){

    // for(let i=0; i< this.user.length;i++){
    //   console.log(i);
    //   console.log(this.user[i].email);
    //   }
    if(this.loginFormGroup.value.admin == true){
      if(this.loginFormGroup.value.email == "admin@cognizant.com" &&
       this.loginFormGroup.value.password =="admin"){
         this.router.navigate(['admin']);
       }
    }else{
      for(let i=0; i< this.user.length;i++){
        console.log(this.user[i].email);
        if(this.loginFormGroup.value.email==this.user[i].email && this.loginFormGroup.value.password == this.user[i].password ){
          localStorage.setItem("name", this.user[i].userName);
          localStorage.setItem("email", this.user[i].email);
          this.router.navigate(['ticketbook']);
          this.loginFlag=false;
        }
        }
    }
  }

}

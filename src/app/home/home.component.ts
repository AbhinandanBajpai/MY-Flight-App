import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../Models/Flight';
import { UserModel } from '../Models/UserModel';
import { flightService } from '../service/flight.service';
import { DatePipe } from '@angular/common';
import { Search } from '../Models/Search';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:UserModel[]=[];
  flights:Flight[]=[];
  totalLength:any;
  page:number=1;
  departing = new Date();
  currentDate = new Date();
  returningFlag:boolean=false;


  //Variables for ngModule
  flyingFrom:any;
  flyingTo:any;

  formShowFlag:boolean=false;

  constructor( private router: Router , private flightservice:flightService, public datepipe: DatePipe) {
    this.homeForm=new FormGroup({
      flyingFrom: new FormControl("",[
        Validators.required
      ]),
      flyingTo: new FormControl("",[
        Validators.required
      ])
    });

 
    console.log(this.homeForm.value);
    console.log(this.homeForm);
   }

  homeForm:FormGroup

  ngOnInit(): void {
  }

 
  doSearch(){
    // console.log(this.homeForm.value);
    // console.log(this.flightservice.getAllFlight.subscribe({
    //   res
    // }));
    this.flightservice.getAllFlight(this.homeForm)
    .subscribe((res:any )=>{
      console.log(res);

 
      
      // if(this.departing.getFullYear() >= this.currentDate.getFullYear()
      //    && this.departing.getMonth() >= this.currentDate.getMonth() 
      // ){
      //   // if(this.departing.getDay > this.currentDate.getDay())
      //   this.flights=res;
      // }


      // console.log(this.flights[3].start+" "+ typeof this.flights[3].start)

       this.departing=new Date(this.departing);
       
      if(this.departing > new Date()){
        console.log("Sahi Hai");
        this.flights=res;
      }
    })


 
    // console.log(9889);
    // console.log(this.departing+"   "+ typeof this.departing+" "+this.datepipe.transform(new Date(), 'yyyy-MM-dd')+" "+typeof this.datepipe.transform(new Date(), 'yyyy-MM-dd'));  
    // console.log(new Date(this.departing)+" "+ typeof new Date(this.departing)+" "+ new Date());
    // console.log(this.departing.getDate() +" "+ this.currentDate.getDate());
    // if(this.departing > new Date()){
    //   console.log("Sahi Hai");
    // }

    this.formShowFlag=true;

    // console.log(this.flights);
    // console.log(45678);
    // console.log(this.flyingFrom);
    // console.log(this.flyingTo);
  }



  onTicketBook(id:number){



    this.flightservice.getFlightById(id).subscribe(res=>{
        localStorage.setItem("loginUser",JSON.stringify(res));
        this.router.navigate(['login']);
    });
   

    // console.log(this.flightservice.getUserById(id).subscribe((res:any)=>{
    //   console.log(res);
    //   this.users =res;
    //   //Second Way working 
    //   localStorage.setItem('users',JSON.stringify(this.users));
    // }));

    console.log("email :"+ this.users[0]);

     
    //  localStorage.setItem('email',this.users[0].password);
    console.log(this.flightservice.getUserById(id))

    this.flightservice.getUserById(id).subscribe

    // console.log("my fata"+ this.flightservice.getUserById(id))
//First Way
// this.flightservice.getUserById(id).subscribe(res=>{
//   localStorage.setItem('user',JSON.stringify(res));
//   this.router.navigate(['login']);
// })
    


   
  }

   onSearchButton2(){
    this.formShowFlag=false;
  }

  onReturn(){
    this.returningFlag=!this.returningFlag;
  }
}

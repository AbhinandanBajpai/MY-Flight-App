import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../Models/Flight';
import { flightService } from '../service/flight.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  addFlightForm:FormGroup;
  // flights:Observable<Flight[]>;

  totalLength:any;
  page:number=1;

  blockFlag:boolean=true;
 
   flights:Flight[]=[];
  constructor(private flightService:flightService, private router:Router) {

    this.addFlightForm = new FormGroup({
      flightNumber: new FormControl("",[
        Validators.required
      ]),
      flightCompany: new FormControl("",[
        Validators.required
      ]),
      fromToDestination: new FormControl("",[
        Validators.required
      ]),
      from: new FormControl("",[
        Validators.required
      ]),
      destinanton:new FormControl("",[
        Validators.required
      ]),
      start: new FormControl("", [
        Validators.required
      ]),
      end: new FormControl("",[
        Validators.required
      ]),
      businessSeat: new FormControl("",[
        Validators.required
      ]),
      economySeat: new FormControl("", []),
      cost: new FormControl("",[]),
      block:new FormControl("",[])

    });
   }

   ngOnInit(){
    this.reloadData();
    this.getAllFlight();
  }
  reloadData()
  {
    // this.flights=this.flightService.getAllFlight();
  }
  getAllFlight(){
    this.flightService.getAllFlight()
    .subscribe((res:any )=>{
      console.log(res);
      this.flights=res;
    });
  }
  deleteFlight(id:number){
    this.flightService.deleteFlight(id).subscribe(res=>{
      console.log(res);
      this.getAllFlight();

      // for(let i=0 ; i<this.flights.length;i++){
      //   console.log(i);
      //   console.log(this.flights[i].flightCompany);
      // }
    });
  }

  goAdminHome(){
    this.router.navigate(['admin']);
  }
  onBlock(id:number){
    for(let i=0;i<this.flights.length;i++){
      if(this.flights[i].id == id){
         this.flights[i].block = true;
         this.flightService.blockFlight(id,this.addFlightForm.value);
      }
    }
}

onUnBlock(id:number){
  for(let i=0;i<this.flights.length;i++){
    if(this.flights[i].id == id){
       this.flights[i].block = false;
       this.flightService.blockFlight(id,this.addFlightForm.value);
    }
  }
}
}

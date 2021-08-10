import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { flightService } from '../service/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {


  addFlightForm:FormGroup;
  constructor(private router:Router, private flightService:flightService) {
    this.addFlightForm = new FormGroup({
      flightNumber: new FormControl("",[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)
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
      destinanton: new FormControl("",[
        Validators.required
      ]),
      start: new FormControl("",[
        Validators.required
      ]),
      end: new FormControl("",[
        Validators.required
      ]),
      businessSeat: new FormControl("",[
        Validators.required
      ]),
      economySeat: new FormControl("",[
        Validators.required
      ]),
      cost: new FormControl("",[
        Validators.required
      ]),
      block: new FormControl("",[])
    }); 

   }

  ngOnInit(): void {
  }

  goAdminHome(){
    this.router.navigate(['admin']);
  }

  saveFlight(){
    this.flightService.saveFlight(this.addFlightForm.value).subscribe(res=>console.log(res));
    // console.log(this.addFlightForm.value.block);
    // console.log(this.addFlightForm);
    // console.log(this.addFlightForm.valid);
    // console.log(this.addFlightForm.invalid);
    // console.log(this.addFlightForm.controls);
    // console.log(this.addFlightForm.controls.flightNumber.dirty);
    // console.log(this.addFlightForm.controls.flightNumber.errors);
    console.log(this.addFlightForm.value);
    this.addFlightForm.reset();
  }

}

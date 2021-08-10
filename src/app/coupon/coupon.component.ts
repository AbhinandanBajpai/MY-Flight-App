import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { CouponModel } from '../Models/CouponModel';
import { flightService } from '../service/flight.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  // name:string="";
  // discount:number=0;
  couponThing:CouponModel[]=[];
  couponForm:FormGroup;
  constructor(private flightService:flightService) {
    
    this.couponForm = new FormGroup({
      name: new FormControl("",[
        Validators.required
      ]),
      discount: new FormControl("",[
        Validators.required
      ])
    });
   }

  ngOnInit(): void {
  }

  
  onSaveCoupon(){
console.log(this.couponForm.value+" "+"coupon");

    this.flightService.saveCoupon(this.couponForm.value).subscribe((res)=>{
      console.log(res);
      console.log(this.couponForm.value);
      this.couponForm.reset();
    })

    // console.log(this.name+" ",this.discount);
  }

}

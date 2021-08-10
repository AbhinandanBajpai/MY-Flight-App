import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addFlight(){
    this.router.navigate(['admin/addFlight'])
  }
  viewFlight(){
    this.router.navigate(['admin/flightList']);
  }
  manageDiscount(){
    this.router.navigate(['admin/couponManage'])
  }

}

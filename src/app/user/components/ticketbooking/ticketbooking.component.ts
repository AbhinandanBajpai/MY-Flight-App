import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flightService } from 'src/app/service/flight.service';
import { TicketHistory } from 'src/app/Models/ticketHistory';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {

  paymentFormFlag:boolean=false;
  name:string="";
  loginuser:any;
  bookemail:string="";
  contact:number=0;
  downloadableTicket:boolean=false;
  coupon:string="";
  ticketForm:FormGroup;
  loginEmail:string="";

  obj:TicketHistory={
    "airLine":"",
    "from": "",
    "statue":"",
    "id": 0,
    "destination":"",
    "pnr":0,
    "email":"",
    "fair":0
    }
    // public statue:string ,
    // public destination:string,
    // public pnr:number,
    // public fair:number,
    // public email:string

  numberOfPass:number=0;
  constructor(private flightService:flightService, private router:Router) { 
    this.name = localStorage.getItem('name') || '';
    this.loginuser=JSON.parse(localStorage.getItem("loginUser") || '');
    this.bookemail = this.loginuser.email;
    console.log("loginuser");
    console.log(this.loginuser.id);
    this.coupon
    this.ticketForm = new FormGroup({
      numberOfseats: new FormControl("",[
        Validators.required
      ]),
      contactNumber: new FormControl("",[
        Validators.required
      ]),
      email:new FormControl("",[
        Validators.required
      ])
    });

    this.loginEmail= localStorage.getItem('email') ||''
  }

  ngOnInit(): void {
  }

  onBook(){
    this.paymentFormFlag=true;
  }

  valueCoupon(){
    this.coupon=this.coupon
  }

  onPayment(){
    
    this.downloadableTicket=true;
    // this.flightService.saveFlight(this.addFlightForm.value).subscribe(res=>console.log(res));
    this.obj.airLine=this.loginuser.flightCompany;
    this.obj.from=this.loginuser.start;
    this.obj.statue="active";
    this.obj.id=Math.floor(Math.random() * (1000 - 99) + 99);
    this.obj.destination=this.loginuser.destinanton;
    this.obj.email=localStorage.getItem('email') || '';
    this.obj.fair=this.loginuser.cost;

    console.log(this.obj.airLine+" AirLine"+ this.obj);

    this.flightService.saveTicketHistory(this.obj).subscribe(res=>{
      console.log(res);
    });

 

  }

  onCancel(){

  }

  onGoTicketHistory(){
      this.router.navigate(['ticketbook/ticketHistory']);
  }
  

  download(){

    var element = <HTMLImageElement>document.getElementById('table');

    html2canvas(element).then((canvas)=>{
      console.log(canvas);
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF();
      var imgHieght = canvas.height*208/canvas.width
      doc.addImage(imgData,0,0,208,imgHieght);
      doc.save('Ticket.pdf');
    })
  }
}

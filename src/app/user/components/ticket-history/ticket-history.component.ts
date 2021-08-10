import { Component, OnInit } from '@angular/core';
import { TicketHistory } from 'src/app/Models/ticketHistory';
import { flightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {


  cancilFlag:boolean=false;
  emailloggedIn:string="";
  th:TicketHistory[]=[];
  constructor(private flightService:flightService) { 

    this.flightService.getTicketHistory().subscribe((res:any)=>{
      console.log(res);
      this.th=res;
    });

    this.emailloggedIn =localStorage.getItem('email') || '';
    console.log()
  }

  ngOnInit(): void {
  }

  onCancel(){
    this.cancilFlag=true;
    

  }

}

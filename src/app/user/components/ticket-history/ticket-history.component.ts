import { Component, OnInit } from '@angular/core';
import { TicketHistory } from 'src/app/Models/TicketHistory';
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

    this.showTicketHistory();

    this.emailloggedIn =localStorage.getItem('email') || '';
    console.log()
  }

  showTicketHistory(){
    this.flightService.getTicketHistory().subscribe((res:any)=>{
      console.log(res);
      this.th=res;
    });
  }

  ngOnInit(): void {
  }

  onCancel(ticket:TicketHistory){
    this.cancilFlag=true;
    ticket.statue="cancelled";
    this.flightService.updateTicket(ticket).subscribe((res:any)=>{
      this.showTicketHistory();
    })

  }

  // openDialog(){

  //   this.dialog.open(TicketHistoryComponent);
  // }

}

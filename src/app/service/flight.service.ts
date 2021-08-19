import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CouponModel } from '../Models/CouponModel';
import { Flight } from '../Models/Flight';
import { Search } from '../Models/Search';
import { TicketHistory } from '../Models/TicketHistory';
import { UserModel } from '../Models/UserModel';

@Injectable({"providedIn":"root"})
export class flightService{

    url:string='http://localhost:3000/flights';
    urlUsers:string='http://localhost:3000/users';
    urlcoupon:string='http://localhost:3000/coupons';
    urlTicketHistory:string="http://localhost:3000/tickethistory";

    urlflightSearch:String="http://localhost:8989/flightList/search";
    constructor(private httpClient:HttpClient){}

    saveFlight(flight:Flight){
        return this.httpClient.post(this.url,flight);
    }

    getAllFlight(search:Search){
        // return this.httpClient.get(this.url);
        // return this.httpClient.get("http://localhost:8989/flightList"+"/search");
        return this.httpClient.post("http://localhost:64521/search", Search);
    }

    deleteFlight(id:number){
        return this.httpClient.delete(this.url+'/'+id);
    }

    getFlightById(id:number){
        return this.httpClient.get(this.url+"/"+id);
    }

    getAllUsers(){
        return this.httpClient.get(this.urlUsers);
    }
    getUserById(id:number){
        return this.httpClient.get(this.urlUsers+"/"+id);
    }

    getUserByEmailPassword(email: string, password:string){
        return this.httpClient.get(this.urlUsers+"/"+email+"/"+password);
    }

    userSignUp(user:UserModel){
        // return this.httpClient.post(this.urlUsers,user);
        return this.httpClient.post("localhost:2020/api/auth/signup",user);
    }

    //coupon

    saveCoupon(coupon:CouponModel){
        return this.httpClient.post(this.urlcoupon,coupon);
    }



    //ticketHistory

    saveTicketHistory(ticketHistory:TicketHistory){
        return this.httpClient.post(this.urlTicketHistory,ticketHistory);
    }

    getTicketHistory(){
        return this.httpClient.get(this.urlTicketHistory);
    }


    updateTicket(ticket:TicketHistory) {
        return this.httpClient.put(this.url + "/" + ticket.id, ticket);
    }



} 

//   modifyTicketHistory(id:number, ticketHistory:TicketHistoryPage){
//       return this.httpClient.put(this.urlTicketHistory+'/'+id, ticketHistory);
//   }

//   getTicketHistoryById(id:number){
//       return this.httpClient.get(this.urlTicketHistory+'/'+id);
//   }

//}
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CouponModel } from '../Models/CouponModel';
import { Flight } from '../Models/Flight';
import { TicketHistory } from '../Models/ticketHistory';
import { UserModel } from '../Models/UserModel';

@Injectable({"providedIn":"root"})
export class flightService{

    url:string='http://localhost:3000/flights';
    urlUsers:string='http://localhost:3000/users';
    urlcoupon:string='http://localhost:3000/coupons';
    urlTicketHistory:string="http://localhost:3000/tickethistory";
    constructor(private httpClient:HttpClient){}

    saveFlight(flight:Flight){
        return this.httpClient.post(this.url,flight);
    }

    getAllFlight(){
        return this.httpClient.get(this.url);
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
        return this.httpClient.post(this.urlUsers,user);
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

}
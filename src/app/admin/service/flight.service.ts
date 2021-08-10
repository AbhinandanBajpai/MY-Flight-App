import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../Models/Flight';

@Injectable({"providedIn":"platform"})
export class flightService{

    url:string='http://localhost:3000/flights';
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

    blockFlight(id:number, flight:Flight){
        return this.httpClient.put(this.url+'/'+id,flight);
    }

}
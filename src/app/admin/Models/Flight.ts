export class Flight{
    // constructor(public id:number=0, public flightNumber:number, public flightCompany:string, public fromToDestination:string){}
     constructor(public id:number=0,
         public flightNumber:number,
         public flightCompany:string,
         public fromToDestination:string,
         public from:string,
         public destinanton:string,
         public start:string,
         public end:string,
         public businessSeat:number,
         public economySeat:number,
         public cost:number,
         public block:boolean 
           ){}
}
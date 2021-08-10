export class TicketHistory{
    constructor(
        public id:number=0,
        public airLine:string,
        public from: string,
        public statue:string ,
        public destination:string,
        public pnr:number,
        public fair:number,
        public email:string
    ){}
}
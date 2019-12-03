import { Gebruiker } from './gebruiker.model';
import { Antwoord } from './antwoord.model';

export class Poll {
    pollID:	number;
    naam: string;
    vraag: string;
    aanmaakDatum: Date;
    sluitDatum: Date;
    makerID: number;
    status: number;
    maker: Gebruiker;
    antwoorden: Antwoord[];

    constructor(pollID:number, naam:string, vraag:string, aanmaakDatum:Date, sluitDatum:Date, makerID:number, status:number, maker:Gebruiker, antwoorden:Antwoord[]){
        this.pollID = pollID;
        this.naam = naam;
        this.vraag = vraag;
        this.aanmaakDatum = aanmaakDatum;
        this.sluitDatum = sluitDatum;
        this.makerID = makerID;
        this.status = status;
        this.maker = maker;
        this.antwoorden = antwoorden;
    }

}
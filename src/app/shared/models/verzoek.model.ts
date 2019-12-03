import { Gebruiker } from 'src/app/security/models/gebruiker.model';

export class Verzoek {
    gebruikerRelatieID:	number;
    gebruikerID: number;
    verbondenGebruikerID: number;
    type: number;
    gebruiker: Gebruiker;
    verbondenGebruiker: Gebruiker;
    aanmaakDatum: Date;

    constructor(gebruikerRelatieID:number, gebruikerID:number, gebruiker:Gebruiker, verbondenGebruikerID:number, type:number, verbondenGebruiker:Gebruiker, aanmaakDatum: Date){
        this.gebruikerRelatieID = gebruikerRelatieID;
        this.gebruikerID = gebruikerID;
        this.aanmaakDatum = aanmaakDatum;
        this.gebruiker = gebruiker;
        this.verbondenGebruikerID = verbondenGebruikerID;
        this.verbondenGebruiker = verbondenGebruiker;
        this.aanmaakDatum = aanmaakDatum;
    }

}
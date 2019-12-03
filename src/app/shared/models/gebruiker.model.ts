export class Gebruiker {
    gebruikerID: number;
    email: string;
    wachtwoord: string;
    gebruikersnaam: string;
    aanmaakDatum: Date;
    token: string;

    constructor(gebruikerID:number, email:string, wachtwoord:string, gebruikersnaam:string, aanmaakDatum:Date, picture:string, token:string){
        this.gebruikerID = gebruikerID;
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.gebruikersnaam = gebruikersnaam;
        this.aanmaakDatum = aanmaakDatum;
        this.token = token
    }

}
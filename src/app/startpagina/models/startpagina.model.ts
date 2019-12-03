import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Poll } from 'src/app/shared/models/poll.model';

export class Startpagina {
    totaalGebruikerAantal: number;
    totaalPollAantal: number;
    top5NieuweGebruikers:Gebruiker[];
    top10NieuwePolls: Poll[];

    constructor(totaalGebruikerAantal:number, totaalPollAantal:number, top5NieuweGebruikers:Gebruiker[], top10NieuwePolls:Poll[]){
        this.totaalGebruikerAantal = totaalGebruikerAantal;
        this.totaalPollAantal = totaalPollAantal;
        this.top5NieuweGebruikers = top5NieuweGebruikers;
        this.top10NieuwePolls = top10NieuwePolls;
    }

}
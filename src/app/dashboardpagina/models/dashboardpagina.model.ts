import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { Poll } from 'src/app/shared/models/poll.model';
import { Verzoek } from 'src/app/shared/models/verzoek.model';

export class Dashboardpagina {
    nieuwstePolls:Poll[];
    mijnPolls: Poll[];
    mijnDeelgenomenPolls: Poll[];
    uitgenodigdePolls: Poll[];
    mijnVrienden:Gebruiker[];
    mijnVriendenschapVerzoeken:Verzoek[];

    constructor(nieuwstePolls:Poll[], mijnPolls:Poll[], mijnDeelgenomenPolls: Poll[], uitgenodigdePolls:Poll[], mijnVrienden:Gebruiker[], mijnVriendenschapVerzoeken:Verzoek[]){
        this.nieuwstePolls = nieuwstePolls;
        this.mijnPolls = mijnPolls;
        this.mijnDeelgenomenPolls = mijnDeelgenomenPolls;
        this.uitgenodigdePolls = uitgenodigdePolls;
        this.mijnVrienden = mijnVrienden;
        this.mijnVriendenschapVerzoeken = mijnVriendenschapVerzoeken
    }

}
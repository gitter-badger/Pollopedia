import { Gebruiker } from './gebruiker.model';
import { Poll } from './poll.model';

export class Antwoord {
    antwoordID:	number;
    antwoordInhoud: string;
    voteScore: number;
    pollID: number;
    poll: Poll;

    constructor(antwoordID:	number, antwoordInhoud: string, voteScore: number, pollID: number, poll: Poll){
        this.antwoordID = antwoordID;
        this.antwoordInhoud = antwoordInhoud;
        this.voteScore = voteScore;
        this.pollID = pollID;
        this.poll = poll;
    }

}
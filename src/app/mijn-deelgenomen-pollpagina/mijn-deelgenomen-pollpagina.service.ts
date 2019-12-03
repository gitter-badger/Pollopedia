import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poll } from '../shared/models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class MijnDeelgenomenPollpaginaService {

  constructor(private httpClient: HttpClient) { }

  getMijnDeelgenomenPolls(): Observable<Poll[]>{
    return this.httpClient.get<Poll[]>('https://localhost:5001/api/v1/mijnDeelgenomenPolls/');
  }
}
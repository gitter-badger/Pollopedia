import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gebruiker } from '../security/models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class VriendenpaginaService {

  constructor(private httpClient: HttpClient) { }

  getVrienden(): Observable<Gebruiker[]>{
    return this.httpClient.get<Gebruiker[]>('https://localhost:5001/api/v1/vrienden/');
  }
}
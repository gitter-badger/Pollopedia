import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Startpagina } from './models/startpagina.model';

@Injectable({
  providedIn: 'root'
})
export class StartpaginaService {

  constructor(private httpClient: HttpClient) { }

  getStartpaginaInformatie(): Observable<Startpagina>{
    return this.httpClient.get<Startpagina>('https://localhost:5001/api/v1/startpagina');
  }
}
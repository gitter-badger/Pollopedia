import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboardpagina } from './models/dashboardpagina.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardpaginaService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getDashboardpaginaInformatie(): Observable<Dashboardpagina>{
    return this.httpClient.get<Dashboardpagina>('https://localhost:5001/api/v1/dashboardpagina');
  }

  verzoekRelatie(verbondenGebruikerID : number){
    this.httpClient.put('https://localhost:5001/api/v1/verzoekRelatie', verbondenGebruikerID).subscribe(

        data  => {
        
        console.log("PUT Request is successful ", data);
        
        },
        
        error  => {
        
        console.log("Error", error);
        
        }
        
        );
  }

  acceptVerzoek(verzoekID : number){
    this.httpClient.put('https://localhost:5001/api/v1/acceptVerzoek', verzoekID).subscribe(

        data  => {
        console.log("PUT Request is successful ", data);
        
        },
        
        error  => {
        
        console.log("Error", error);
        
        }
        
        );
  }

  denyVerzoek(verzoekID : number){
    this.httpClient.put('https://localhost:5001/api/v1/denyVerzoek', verzoekID).subscribe(

        data  => {
        
        console.log("PUT Request is successful ", data);
        
        },
        
        error  => {
        
        console.log("Error", error);
        
        }
        
        );
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { Gebruiker } from 'src/app/shared/models/gebruiker.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  errorData: {};
  redirectUrl: string;

  constructor(private _httpClient: HttpClient) { }

  // gebruiker identificeren bij de api
  authenticate(gebruikerLogin: GebruikerLogin){
    return this._httpClient.post<Gebruiker>("https://localhost:5001/api/v1/identiteit/aanmelden", gebruikerLogin)
      .pipe(
        map(
          result => {
        if (result.token) {
          localStorage.setItem("gebruiker", JSON.stringify(result));
        }
      }),
        catchError(this.handleError)
      )
  }

  // gebruiker registreren bij de api
  register(gebruiker: GebruikerLogin){
    return this._httpClient.post<Gebruiker>("https://localhost:5001/api/v1/identiteit/registreren", gebruiker)
      .pipe(
        map(
          result => {
        if (result.token) {
          localStorage.setItem("gebruiker", JSON.stringify(result));
        }
      }),
        catchError(this.handleError)
      )
  }

  // gebruiker uitloggen
  logout() {
    localStorage.removeItem('gebruiker');
  }

  // controleren of er een ingelogde gebruiker is
  isLoggedIn() {
    if (localStorage.getItem("gebruiker")) {
      return true;
    }
    return false;
  }

  // errors behandelen
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return error message
    return throwError(error);
  }
}
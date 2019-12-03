import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { GebruikerspaginaService } from '../gebruikerspagina.service';

@Component({
  selector: 'app-gebruikers-list',
  templateUrl: './gebruikers-list.component.html',
  styleUrls: ['./gebruikers-list.component.scss']
})
export class GebruikersListComponent{

  gebruikers: Gebruiker[];

  constructor(private _gebruikerpaginaService: GebruikerspaginaService) {
    this._gebruikerpaginaService.getGebruikers().subscribe(
      result => {
        this.gebruikers = result;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';
import { VriendenpaginaService } from '../vriendenpaginaService';

@Component({
  selector: 'app-vriendenpagina',
  templateUrl: './vriendenpagina.component.html',
  styleUrls: ['./vriendenpagina.component.scss']
})
export class VriendenpaginaComponent{

  gebruikers: Gebruiker[];

  constructor(private _vriendenpaginaService: VriendenpaginaService) {
    this._vriendenpaginaService.getVrienden().subscribe(
      result => {
        this.gebruikers = result;
      });
  }
}

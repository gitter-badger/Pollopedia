import { Component, OnInit } from '@angular/core';
import { StartpaginaService } from './startpagina.service';
import { Startpagina } from './models/startpagina.model';
import { Gebruiker } from '../shared/models/gebruiker.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  startpaginaInformatie: Startpagina;
  top5NieuweGebruikersTitle: string = "Top 4 nieuwste leden";
  top5NieuweGebruikersLink: string = "gebruikers";

  constructor(private _startpaginaService: StartpaginaService) {
    this._startpaginaService.getStartpaginaInformatie().subscribe(
      result => {
        this.startpaginaInformatie = result;
      });
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Gebruiker } from '../../models/gebruiker.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { DashboardpaginaService } from 'src/app/dashboardpagina/dashboardpagina.service';

@Component({
  selector: 'app-gebruiker-list-item',
  templateUrl: './gebruiker-list-item.component.html',
  styleUrls: ['./gebruiker-list-item.component.scss']
})
export class GebruikerListItemComponent implements OnInit {
  @Input() gebruiker: Gebruiker;
  dashboardpaginaService: DashboardpaginaService;
  constructor(private authenticateService: AuthenticateService, private _dashboardpaginaService: DashboardpaginaService) { 
    this.dashboardpaginaService = _dashboardpaginaService;
  }

  ngOnInit() {
  }

  verzoekRelatie(gebruikerID : number){
    this.dashboardpaginaService.verzoekRelatie(gebruikerID);
  }

  get isLoggedIn() { return this.authenticateService.isLoggedIn(); }

}

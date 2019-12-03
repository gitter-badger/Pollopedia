import { Component, OnInit } from '@angular/core';
import { Dashboardpagina } from './models/dashboardpagina.model';
import { DashboardpaginaService } from './dashboardpagina.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardpaginaInformatie: Dashboardpagina;
  nieuwstePollsTitle : string = "Laatste 5 nieuwe polls";
  nieuwstePollsLink : string = "polls";
  mijnPollsTitle : string = "Laatste 5 zelfgemaakte polls";
  mijnPollsLink: string = "mijnPolls";
  mijnDeelgenomenPollsTitle : string = "Laatste 5 deelgenomen polls";
  mijnDeelgenomenPollsLink : string = "mijnDeelgenomenPolls";
  uitgenodigdePollsTitle : string = "Laatste 5 uitgenodigde polls";
  uitgenodigdePollsLink : string = "uitgenodigdenPolls";
  vriendenlijstTitle : string = "Laatste 5 nieuwe vrienden";
  vriendenLink : string = "vrienden"

  constructor(private _dashboardpaginaService: DashboardpaginaService) {
    this._dashboardpaginaService.getDashboardpaginaInformatie().subscribe(
      result => {
        this.dashboardpaginaInformatie = result;
      });
  }

  ngOnInit() {
  }

}
